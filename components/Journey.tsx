import React from 'react';
import { TIMELINE } from '../constants';

const Journey: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-surfaceHighlight/10 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
         <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">进化之路 <span className="text-textMuted font-normal text-lg ml-2">/ Journey</span></h2>
          <p className="text-textMuted">
            从焦虑的职场新人到目标坚定的创作者，每一步都算数。
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-ml-px"></div>

          <div className="space-y-12">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className={`relative flex items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="flex-1 ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className={`p-6 rounded-xl border ${item.current ? 'bg-accent/5 border-accent/30' : 'bg-surface border-white/5'} hover:border-white/20 transition-colors`}>
                    <div className="flex items-center justify-between mb-2">
                       <h3 className={`font-bold text-lg ${item.current ? 'text-accent' : 'text-primary'}`}>{item.title}</h3>
                       {item.current && <span className="text-[10px] uppercase bg-accent text-white px-2 py-0.5 rounded-full animate-pulse">Now</span>}
                    </div>
                    <p className="text-textMuted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Marker */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full border-2 ${item.current ? 'bg-background border-accent' : 'bg-surfaceHighlight border-textMuted'}`}></div>
                </div>

                {/* Date Side */}
                <div className={`hidden md:block md:w-1/2 md:px-8 text-right ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <span className={`font-mono text-sm tracking-wider ${item.current ? 'text-accent font-bold' : 'text-textMuted/50'}`}>
                    {item.year}
                  </span>
                </div>
                
                {/* Mobile Date Overlay (if needed, but structure above handles desktop mainly) */}
                <div className="md:hidden absolute -top-6 left-12">
                   <span className="font-mono text-xs text-textMuted/50">{item.year}</span>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;