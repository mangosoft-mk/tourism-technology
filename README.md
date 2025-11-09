# Antalya Vacation Booker ✈️

A beautiful AI-powered vacation booking assistant built with **Vue.js 3** and **Google Gemini AI**. This application provides a conversational interface to help users plan and book their dream vacations to Antalya, Turkey.

## Features

- 🤖 **AI-Powered Chat**: Natural conversation flow powered by Google Gemini AI
- 🎨 **Modern Tourism UI**: Beautiful gradient designs with tourism-themed aesthetics
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 💬 **Real-time Booking Summary**: Live updates as you provide information
- 🌊 **Animated Backgrounds**: Engaging visual experience with smooth animations
- 🔗 **Direct Booking Integration**: Connects to eurosava.com for package searches

## Tech Stack

- **Framework**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: Google Gemini AI (@google/genai)
- **Font**: Poppins (Google Fonts)

## Prerequisites

- Node.js (v16 or higher)
- A Gemini API key (get one at [Google AI Studio](https://aistudio.google.com/app/apikey))

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env.local`
   - Add your Gemini API key:
     ```
     VITE_GEMINI_API_KEY=your_api_key_here
     ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## How It Works

1. The AI assistant greets you and asks about your travel preferences
2. You provide information through natural conversation:
   - Check-in date
   - Number of nights
   - Number of adults
   - Number of children (and their ages if applicable)
3. Once all information is collected, the AI searches for vacation packages
4. Click the provided link to view and book packages on eurosava.com

## Project Structure

```
├── App.vue                    # Main application component
├── components/
│   ├── ChatMessage.vue        # Chat message display component
│   ├── BookingSummary.vue     # Booking details sidebar
│   └── SummaryItem.vue        # Individual summary items
├── services/
│   └── geminiService.ts       # Gemini AI integration
├── types.ts                   # TypeScript type definitions
├── constants.ts               # AI function declarations
└── main.ts                    # Vue app entry point
```

## License

This project is open source and available under the MIT License.
