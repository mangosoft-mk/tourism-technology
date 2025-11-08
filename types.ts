export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot' | 'system';
  text: string;
  isFunctionCall?: boolean;
  link?: {
    url: string;
    text: string;
  };
}

export interface BookingDetails {
  checkInDate: string | null;
  nights: number | null;
  adults: number | null;
  children: number | null;
  childrenAges: number[] | null;
}
