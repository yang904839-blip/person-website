
import React from 'react';
import { Play, ArrowRight, ExternalLink } from 'lucide-react';
import { VIDEOS } from '../constants';

const FeaturedContent: React.FC = () => {
  return (
    <section id="content" className="py-32 bg-background relative border-t border-border transition-colors duration-300">
      {/* Subtle background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Play className="w-5 h-5 text-accent" fill="currentColor" />
              <span className="text-accent font-mono text-sm uppercase tracking-widest">Selected Works</span>
            </div>
            <h2 className="text-4xl font-bold text-primary tracking-tight">
              精选内容 <span className="text-textMuted/40 font-light text-2xl ml-3">/ Top Hits</span>
            </h2>
          </div>
          
          <a 
            href="https://www.youtube.com/@thoughtcounts" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-text hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-0.5"
          >
            访问 YouTube 频道 <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {VIDEOS.map((video, idx) => (
            <div key={idx} className="group glass-card flex flex-col rounded-2xl overflow-hidden bg-surfaceHighlight/30 dark:bg-surfaceHighlight/10 transition-transform duration-500 shadow-lg border border-border/50 hover:-translate-y-2">
              {/* Video Thumbnail Link */}
              <a 
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video w-full bg-black relative block overflow-hidden group/image"
                aria-label={`Watch ${video.title} on YouTube`}
              >
                {/* Fallback image placeholder */}
                <div className="absolute inset-0 bg-surfaceHighlight animate-pulse" />
                
                <img 
                  src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105 opacity-90 group-hover/image:opacity-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('maxresdefault')) {
                        target.src = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
                    }
                  }}
                />
                
                {/* Overlay & Play Button */}
                <div className="absolute inset-0 bg-black/20 group-hover/image:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover/image:scale-110 transition-transform duration-300 shadow-xl">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Duration Badge (Mockup) */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                   WATCH ON YOUTUBE
                </div>
              </a>
              
              {/* Text Content */}
              <div className="p-6 relative flex flex-col flex-1">
                {/* Number Badge */}
                <div className="absolute -top-4 right-6 bg-surface border border-border text-textMuted font-mono text-xs px-2 py-1 rounded shadow-sm z-20">
                   #{idx + 1} Most Viewed
                </div>

                <h3 className="text-lg font-bold text-primary mb-3 line-clamp-2 leading-snug group-hover:text-accent transition-colors">
                  <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                   {video.title}
                  </a>
                </h3>
                <p className="text-textMuted text-sm line-clamp-3 leading-relaxed opacity-80 mb-4 flex-1">
                  {video.description}
                </p>
                
                <a 
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-accent hover:underline mt-auto"
                >
                  在 YouTube 上观看 <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Link */}
        <div className="mt-10 text-center md:hidden">
           <a 
            href="https://www.youtube.com/@thoughtcounts" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-surface border border-border rounded-lg text-text hover:bg-surfaceHighlight transition-all"
          >
            访问 YouTube 频道 <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
