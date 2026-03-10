export interface Chat {
  id: string;
  title: string;
  lastMessageDate: Date;
  isActive?: boolean;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  senderName?: string;
}

export interface AuthCredentials {
  credentials: string;
  scope: 'GIGACHAT_API_PERS' | 'GIGACHAT_API_B2B' | 'GIGACHAT_API_CORP';
}

export interface Settings {
  model: 'GigaChat' | 'GigaChat-Plus' | 'GigaChat-Pro' | 'GigaChat-Max';
  temperature: number;
  topP: number;
  maxTokens: number;
  systemPrompt: string;
  theme: 'light' | 'dark';
}