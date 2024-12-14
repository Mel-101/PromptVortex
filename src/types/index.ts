export interface Prompt {
  id: string;
  content: string;
  category: PromptCategory;
  style: PromptStyle;
  tone: PromptTone;
  createdAt: Date;
}

export type PromptCategory = 
  | 'writing'
  | 'visual'
  | 'business'
  | 'programming'
  | 'custom';

export type PromptStyle = 
  | 'professional'
  | 'creative'
  | 'technical'
  | 'casual';

export type PromptTone = 
  | 'formal'
  | 'casual'
  | 'humorous'
  | 'serious';