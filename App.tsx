
import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Chat } from '@google/genai';
import type { ChatMessage as ChatMessageType, BookingDetails } from './types';
import ChatMessage from './components/ChatMessage';
import BookingSummary from './components/BookingSummary';
import { initializeChat, sendMessageToGemini } from './services/geminiService';

const SendIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
);

const App: React.FC = () => {
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<ChatMessageType[]>([]);
    const [userInput, setUserInput] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
        checkInDate: null,
        nights: null,
        adults: null,
        children: null,
        childrenAges: null,
    });
    
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const startConversation = useCallback(async () => {
        const newChat = initializeChat();
        setChat(newChat);
        setIsLoading(true);
        try {
            const firstResponse = await sendMessageToGemini(newChat, "Hello");
            setMessages([{
                id: crypto.randomUUID(),
                sender: 'bot',
                text: firstResponse.text
            }]);
        } catch (error) {
            console.error("Failed to start conversation:", error);
            setMessages([{
                id: crypto.randomUUID(),
                sender: 'bot',
                text: "I'm sorry, I'm having trouble connecting right now. Please try again later."
            }]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        startConversation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || !chat || isLoading) return;

        const userMessage: ChatMessageType = {
            id: crypto.randomUUID(),
            sender: 'user',
            text: userInput,
        };
        setMessages(prev => [...prev, userMessage]);
        setUserInput('');
        setIsLoading(true);

        try {
            const response = await sendMessageToGemini(chat, userInput);
            
            if (response.functionCalls && response.functionCalls.length > 0) {
                const functionCall = response.functionCalls[0];
                if (functionCall.name === 'findVacationPackages') {
                    // FIX: Cast to unknown first to satisfy TypeScript's type safety checks for converting a generic object to a specific interface.
                    const args = functionCall.args as unknown as BookingDetails;
                    setBookingDetails(args);

                    const systemMessage: ChatMessageType = {
                        id: crypto.randomUUID(),
                        sender: 'system',
                        text: 'Searching for vacation packages on eurosava.com...',
                    };
                    setMessages(prev => [...prev, systemMessage]);

                    const params = new URLSearchParams({
                        type: 'charter-antalya',
                        from: 'Skopje',
                        to: 'Antalya',
                        page: '1',
                    });

                    if (args.checkInDate) {
                        // Reformat date from YYYY-MM-DD to DD-MM-YYYY
                        const dateParts = args.checkInDate.split('-');
                        if (dateParts.length === 3) {
                            const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
                            params.set('date', formattedDate);
                        }
                    }
                    if (args.nights) {
                        params.set('nights', args.nights.toString());
                    }
                    if (args.adults) {
                        params.set('adl', args.adults.toString());
                    }
                    if (args.children !== null) {
                        params.set('chld', args.children.toString());
                    }
                    if (args.childrenAges && args.childrenAges.length > 0) {
                        args.childrenAges.forEach((age, index) => {
                            params.set(`ch${index + 1}`, age.toString());
                        });
                    }
                    const searchUrl = `https://test-web.eurosava.com/hotels?${params.toString()}`;

                    // Simulate API call and show results
                    setTimeout(() => {
                        const finalBotMessage: ChatMessageType = {
                            id: crypto.randomUUID(),
                            sender: 'bot',
                            text: "Great news! I've found some fantastic vacation packages for you. Click the button below to see the results and book your trip.",
                            link: {
                                url: searchUrl,
                                text: 'View Packages on Eurosava.com'
                            }
                        };
                        setMessages(prev => [...prev, finalBotMessage]);
                    }, 1500);
                }
            } else {
                 setMessages(prev => [...prev, {
                    id: crypto.randomUUID(),
                    sender: 'bot',
                    text: response.text,
                 }]);
            }

        } catch (error) {
            console.error("Failed to send message:", error);
            setMessages(prev => [...prev, {
                id: crypto.randomUUID(),
                sender: 'bot',
                text: "Apologies, but I've encountered an error. Please try again."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4" style={{backgroundImage: "url(https://picsum.photos/seed/antalya/1920/1080)", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 h-[90vh]">
                
                {/* Booking Summary */}
                <div className="lg:w-1/3 w-full lg:order-1 order-2">
                    <BookingSummary details={bookingDetails} />
                </div>
                
                {/* Chat Section */}
                <div className="lg:w-2/3 w-full flex flex-col bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 lg:order-2 order-1">
                    <div className="p-4 border-b border-gray-700">
                        <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Antalya Vacation Booker</h1>
                        <p className="text-center text-gray-400 text-sm">Your personal AI travel agent</p>
                    </div>

                    <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto">
                        {messages.map((msg) => (
                            <ChatMessage key={msg.id} message={msg} />
                        ))}
                         {isLoading && (
                            <div className="flex items-start gap-3 my-4 justify-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center animate-pulse"></div>
                                <div className="max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl shadow-md bg-gray-700 rounded-tl-none">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700 flex items-center gap-3">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type your message..."
                            disabled={isLoading}
                            className="flex-1 bg-gray-800 border border-gray-600 rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white disabled:opacity-50 transition-all duration-300"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !userInput.trim()}
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
                        >
                           <SendIcon />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default App;
