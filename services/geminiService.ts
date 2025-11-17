import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { findVacationPackagesFunctionDeclaration } from '../constants';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
    throw new Error("VITE_GEMINI_API_KEY environment variable not set. Please create a .env.local file with your API key.");
}

const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `You are a friendly and highly professional travel agent specializing in tourism for Antalya, Turkey and surrounding areas, as well as warm destinations like Antalya, Turkey.

For Antalya, Turkey vacation packages:
- If the user wants to book a vacation package to Antalya, collect the necessary information
- Ask for the necessary information one question at a time to keep the conversation natural
- The required pieces of information are: check-in date, number of nights, number of adults, and number of children
- If there are children, you must ask for their ages
- Once you have gathered ALL the necessary information for Antalya, you MUST call the 'findVacationPackages' function with the collected details

General guidelines:
- Before starting conversation asks in Macedonian for the language you want to use (Macedonian, Albanina or English) and for the answer give 3 button so the user can click and choose Macedonian, Shqip or English
- Be conversational, friendly, and polite
- Provide helpful recommendations and suggestions
- If unsure about what the user wants, ask clarifying questions
- For Antalya Hotels, provide detailed recommendations but don't call any functions
- Only call 'findVacationPackages' for Antalya, Turkey vacation bookings when you have all required information
`;

export const initializeChat = (): Chat => {
    const chat: Chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            tools: [{ functionDeclarations: [findVacationPackagesFunctionDeclaration] }],
        },
    });
    return chat;
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<GenerateContentResponse> => {
    const response = await chat.sendMessage({ message });
    return response;
};
