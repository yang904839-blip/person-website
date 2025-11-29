import React from 'react';
import { Mail, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-border bg-background transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-primary font-bold text-lg">Pragmatic Creator</p>
          <p className="text-textMuted text-sm mt-1">Built with React, Tailwind & Notion Data.</p>
        </div>
        
        <div className="flex gap-6">
            {/* Xiaohongshu (Little Red Book) */}
            <a 
              href="https://www.xiaohongshu.com/user/profile/651d6ba9000000002402f766?xsec_token=YBRKcwMLaR3TAtHK2wLZyRCrXt9G3OK2rtg3Tz6pjzEVc=&xsec_source=app_share&xhsshare=CopyLink&shareRedId=ODszRDlHRUI2NzUyOTgwNjg3OTlKPDw_&apptime=1764396077&share_id=4efb6055a09046668b7ee53c193d006f" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-surface rounded-full text-textMuted hover:text-primary hover:bg-surfaceHighlight transition-all border border-transparent hover:border-border" 
              aria-label="Xiaohongshu"
            >
              <svg className="w-5 h-5" viewBox="0 0 1024 1024" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M208.7 544.6c-27.3 0-48.4-20.1-48.4-46.1 0-25.1 19.6-45.5 45.4-46.1 27.6-0.6 51.4 21.6 51.4 48.1 0 24.3-19.6 44.1-48.4 44.1z m304-45.4c0-24.9 19.6-45.2 45.3-45.9 27.8-0.8 51.5 21.7 51.5 48.2 0 24.2-19.4 43.8-48.1 43.8-27.2 0-48.7-20.4-48.7-46.1z m325.2-140c-29.2-1.5-68.8-3.5-98.8 6.5-60.7 20.2-86 73-100.3 102.8-5.3 10.9-20.8 11.2-26.6 0.5-8.3-15.3-17.7-30.8-28.5-45.3-12.8-17.2-27.1-33.1-42.6-47.8-24.8-23.6-58.6-42.7-93.5-44.5-51-2.6-96.6 23.9-122.9 66.2-7.8 12.6-13.6 26.3-17.2 40.8-2.6 10.3-6.6 20.3-11.9 29.8-17.8 32-51.5 52.8-88.3 53.8-6.1 0.2-10.9 5.3-10.6 11.4 0.3 5.4 4.5 9.7 9.8 10.1 52.6 4.3 98.7-29.4 117.8-78.1 3.2-8.3 6.9-16.3 10.9-24.1 3.7-7.2 13-8.8 18.9-3.2 25.1 23.7 53.6 44.1 84.6 60.1 27.9 14.4 57.6 25 88.5 31.4 8.6 1.8 13.9 10.7 11.6 19.1-12 43.4-38.3 80.9-74.4 107.1-4.9 3.6-11.7 1.8-13.9-3.8-6.1-15.5-13.9-30.2-23.1-44-6-9-17.9-10.5-26.2-3.4-19.1 16.5-41.9 29.2-67.4 36.4-17.7 5-36 7.6-54.7 7.6-67.6 0-128.5-38.3-157.9-97.1-2.5-5-8.6-7.2-13.8-5-5.5 2.3-8.3 8.3-6.4 13.9 33.7 98.4 126.9 166.4 233.7 166.4 34.3 0 67.2-7.5 97.4-21 21.6-9.7 41.7-22.1 59.9-36.8 3.8-3.1 9.4-2.5 12.5 1.4 19.1 23.5 34.8 49.9 46.5 78.4 1.8 4.3 6 7.1 10.6 7.1 1.7 0 3.5-0.4 5.1-1.1 6.1-2.8 8.6-10 5.8-16.1-13-28.8-29.9-55.6-50.1-79.6-1.5-1.8-1.5-4.4 0-6.2 38.6-46.6 60.6-104.9 61.2-165.7 0-0.4 0-0.9 0-1.3 0.2-2.7 1.3-5.2 3.1-7.2 40.5-45.6 101.4-60.5 160.2-38.1 5.7 2.2 12-0.7 14.2-6.4 2.1-5.6-0.8-11.9-6.4-14z" />
              </svg>
            </a>

            {/* YouTube */}
            <a 
              href="https://www.youtube.com/@thoughtcounts" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-surface rounded-full text-textMuted hover:text-primary hover:bg-surfaceHighlight transition-all border border-transparent hover:border-border" 
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>

            {/* Email */}
            <a href="mailto:hello@example.com" className="p-2 bg-surface rounded-full text-textMuted hover:text-primary hover:bg-surfaceHighlight transition-all border border-transparent hover:border-border" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
        </div>

        <div className="text-textMuted/60 text-xs text-center md:text-right">
          <p>© 2025 All Rights Reserved.</p>
          <p>Don't Overthink. Just Ship.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;