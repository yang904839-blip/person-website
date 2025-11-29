import React from 'react';
import { Quote } from 'lucide-react';
import { PRINCIPLES } from '../constants';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 bg-surface relative border-t border-border transition-colors duration-300">
      {/* Background Texture - Responsive to theme */}
      <div className="absolute inset-0 bg-dot opacity-30 pointer-events-none" />

      {/* Top light source simulation - visible in both themes */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl font-bold text-primary mb-6 tracking-tight">
            思维体系 <span className="text-textMuted/40 font-light text-2xl ml-3">/ Mindset</span>
          </h2>
          <p className="text-textMuted max-w-2xl text-lg leading-relaxed md:mx-0 mx-auto">
            作为一名程序员和创作者，我用代码的逻辑重构生活。
            <br className="hidden md:block" />
            拒绝感性内耗，拥抱<span className="text-accent">系统化</span>与<span className="text-accent">极度务实</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PRINCIPLES.map((item, idx) => (
            <div key={idx} className="group glass-card rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-1 bg-surfaceHighlight/30 dark:bg-surfaceHighlight/10">

              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 bg-surface rounded-xl border border-border group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-300 shadow-sm">
                    <item.icon className="w-8 h-8 text-text group-hover:text-accent transition-colors" />
                  </div>
                  <Quote className="w-10 h-10 text-textMuted/10 group-hover:text-textMuted/20 transition-colors" />
                </div>

                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-textMuted mb-8 text-base leading-relaxed h-12">{item.description}</p>

                <div className="pt-6 border-t border-dashed border-border group-hover:border-accent/20 transition-colors">
                  <p className="text-sm font-mono text-textMuted/60 italic group-hover:text-accent/80 transition-colors">
                    <span className="text-accent/40 mr-2">root@mind:~$</span>
                    echo "{item.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;