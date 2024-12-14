import React from 'react';
import { Menu, Settings, User, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-secondary" />
            <Sparkles className="ml-4 h-6 w-6 text-secondary" />
            <h1 className="ml-2 text-xl font-semibold text-white">PromptVortex</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-primary-light">
              <Settings className="h-5 w-5 text-secondary" />
            </button>
            <button className="p-2 rounded-full hover:bg-primary-light">
              <User className="h-5 w-5 text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}