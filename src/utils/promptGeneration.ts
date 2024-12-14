import type { PromptBlock } from '../types/prompt';

export function generatePrompt(blocks: PromptBlock[]): string {
  return blocks
    .sort((a, b) => a.order - b.order)
    .map(block => {
      const header = `[${block.type.toUpperCase()}]`;
      const content = block.content.trim();
      return `${header}\n${content}`;
    })
    .join('\n\n');
}