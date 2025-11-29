import React from 'react';
import { Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-primary font-bold text-lg">Pragmatic Creator</p>
          <p className="text-textMuted text-sm mt-1">Built with React, Tailwind & Notion Data.</p>
        </div>
        
        <div className="flex gap-6">
            <a href="#" className="p-2 bg-surface rounded-full text-textMuted hover:text-white hover:bg-surfaceHighlight transition-all" aria-label="Xiaohongshu">
              {/* Using Instagram icon as placeholder for Xiaohongshu/Social */}
              <Instagram className="w-5 h-5" /> 
            </a>
            <a href="mailto:hello@example.com" className="p-2 bg-surface rounded-full text-textMuted hover:text-white hover:bg-surfaceHighlight transition-all" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
        </div>

        <div className="text-textMuted/40 text-xs text-center md:text-right">
          <p>© 2025 All Rights Reserved.</p>
          <p>Don't Overthink. Just Ship.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;