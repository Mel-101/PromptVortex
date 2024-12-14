import React from 'react';
import { Header } from './components/Header';
import { PromptGenerator } from './components/PromptGenerator';

function App() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <PromptGenerator />
        </div>
      </main>
    </div>
  );
}

export default App;