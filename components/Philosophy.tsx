import React from 'react';
import { Quote } from 'lucide-react';
import { PRINCIPLES } from '../constants';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-surface/50 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">思维体系 <span className="text-textMuted font-normal text-lg ml-2">/ Mindset</span></h2>
          <p className="text-textMuted max-w-2xl">
            作为一名程序员和创作者，我用代码的逻辑重构生活。这里是我对抗内耗、保持高效的核心原则。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PRINCIPLES.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/30 hover:bg-surfaceHighlight/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent/10 transition-colors">
                  <item.icon className="w-6 h-6 text-text group-hover:text-accent" />
                </div>
                <Quote className="w-8 h-8 text-white/5 group-hover:text-white/10" />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-textMuted mb-6 h-12">{item.description}</p>
              
              <div className="pt-6 border-t border-white/5">
                <p className="text-sm font-mono text-accent/80 italic">
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;