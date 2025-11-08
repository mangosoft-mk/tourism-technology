import React from 'react';
import type { ChatMessage as ChatMessageType } from '../types';

interface ChatMessageProps {
  message: ChatMessageType;
}

const BotIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.5 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3.88 3.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
    />
  </svg>
);

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  if (message.sender === 'system') {
    return (
       <div className="text-center my-4">
          <p className="text-sm text-gray-400 bg-gray-700/50 rounded-full px-4 py-1 inline-block">{message.text}</p>
       </div>
    )
  }

  return (
    <div className={`flex items-start gap-3 my-4 ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
          <BotIcon />
        </div>
      )}
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl shadow-md ${
          isBot
            ? 'bg-gray-700 text-white rounded-tl-none'
            : 'bg-blue-600 text-white rounded-br-none'
        }`}
      >
        <p className="text-sm">{message.text}</p>
        {message.link && (
            <a
                href={message.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors duration-300 w-full text-center"
            >
                {message.link.text}
            </a>
        )}
      </div>
       {!isBot && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
          <UserIcon />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
