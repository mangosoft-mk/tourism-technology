import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { findVacationPackagesFunctionDeclaration } from '../constants';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `You are a friendly and highly professional travel agent for vacations in Antalya, Turkey. Your goal is to collect information from the user to book their dream trip.
- Ask for the necessary information one question at a time to keep the conversation natural.
- The required pieces of information are: check-in date, number of nights, number of adults, and number of children.
- If there are children, you must ask for their ages.
- Be conversational and polite. You can start with a friendly greeting.
- Once you have gathered ALL the necessary information, you MUST call the 'findVacationPackages' function with the collected details. Do not call it before you have every piece of information.
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
