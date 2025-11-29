import React from 'react';
import { TIMELINE } from '../constants';

const Journey: React.FC = () => {
  return (
    <section id="timeline" className="py-32 bg-surface border-t border-border relative overflow-hidden transition-colors duration-300">
       {/* Background Light Beam */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent blur-sm" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
         <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-primary mb-6">进化之路 <span className="text-textMuted/40 font-light text-2xl ml-2">/ Journey</span></h2>
          <p className="text-textMuted max-w-lg mx-auto text-lg">
            从焦虑的职场新人到目标坚定的创作者，每一步都算数。
          </p>
        </div>

        <div className="relative">
          {/* Main Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-ml-px">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent to-transparent opacity-50"></div>
          </div>

          <div className="space-y-20">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className={`relative flex items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                
                {/* Content Side */}
                <div className="flex-1 ml-20 md:ml-0 md:w-1/2 md:px-12">
                  <div className={`p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 
                    ${item.current 
                      ? 'bg-accent/5 border-accent/50 shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]' 
                      : 'bg-background/80 border-border hover:border-accent/30 hover:bg-surfaceHighlight'
                    }`}>
                    
                    <div className="flex items-center justify-between mb-3">
                       <h3 className={`font-bold text-xl ${item.current ? 'text-accent' : 'text-primary'}`}>{item.title}</h3>
                       {item.current && (
                         <span className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            Now
                         </span>
                       )}
                    </div>
                    
                    <p className="text-textMuted text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Marker Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 z-10
                    ${item.current 
                      ? 'bg-primary border-accent shadow-[0_0_15px_rgba(59,130,246,1)] scale-125' 
                      : 'bg-background border-textMuted group-hover:border-primary group-hover:scale-110'
                    }`}></div>
                </div>

                {/* Date Side */}
                <div className={`hidden md:block md:w-1/2 md:px-12 ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <span className={`font-mono text-xl tracking-wider ${item.current ? 'text-accent font-bold drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'text-textMuted/40 group-hover:text-textMuted transition-colors'}`}>
                    {item.year}
                  </span>
                </div>
                
                {/* Mobile Date Overlay */}
                <div className="md:hidden absolute -top-8 left-20">
                   <span className={`font-mono text-sm ${item.current ? 'text-accent' : 'text-textMuted/50'}`}>{item.year}</span>
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