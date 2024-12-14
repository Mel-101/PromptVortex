import type { PromptBlock, PromptAnalysis } from '../types/prompt';

export function analyzePrompt(blocks: PromptBlock[]): PromptAnalysis {
  const strengths: string[] = [];
  const weaknesses: string[] = [];
  const suggestions: string[] = [];
  let score = 7.0;

  // Check for essential block types
  const hasContext = blocks.some(b => b.type === 'context');
  const hasInstruction = blocks.some(b => b.type === 'instruction');
  const hasExample = blocks.some(b => b.type === 'example');
  const hasConstraint = blocks.some(b => b.type === 'constraint');
  const hasOutputFormat = blocks.some(b => b.type === 'output-format');

  if (hasContext) {
    strengths.push('Provides clear context for the AI model');
    score += 0.5;
  } else {
    weaknesses.push('Missing context information');
    suggestions.push('Add context to help the AI understand the background');
    score -= 0.5;
  }

  if (hasInstruction) {
    strengths.push('Clear instructions provided');
    score += 0.5;
  } else {
    weaknesses.push('Missing specific instructions');
    suggestions.push('Add clear instructions about what you want the AI to do');
    score -= 1.0;
  }

  if (hasExample) {
    strengths.push('Includes examples for better understanding');
    score += 0.5;
  } else {
    suggestions.push('Consider adding examples to illustrate desired output');
  }

  if (hasConstraint) {
    strengths.push('Clear constraints defined');
    score += 0.5;
  }

  if (hasOutputFormat) {
    strengths.push('Output format clearly specified');
    score += 0.5;
  } else {
    suggestions.push('Specify desired output format for better results');
  }

  return {
    score: Math.min(10, Math.max(0, score)),
    strengths,
    weaknesses,
    suggestions,
  };
}