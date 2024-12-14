export interface PromptTemplate {
  id: string;
  name: string;
  description: string;
  template: string;
  category: PromptCategory;
  tags: string[];
}

export interface PromptAnalysis {
  score: number;
  suggestions: string[];
  strengths: string[];
  weaknesses: string[];
}

export interface PromptBlock {
  id: string;
  type: 'context' | 'instruction' | 'example' | 'constraint' | 'output-format';
  content: string;
  order: number;
}

export interface EnhancedPrompt extends Prompt {
  blocks: PromptBlock[];
  analysis?: PromptAnalysis;
  version: number;
  lastModified: Date;
}