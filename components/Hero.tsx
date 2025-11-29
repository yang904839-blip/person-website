import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="identity" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surfaceHighlight border border-white/10 text-xs font-mono text-accent">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Open to Work & Collab
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary leading-tight">
            {HERO_DATA.title.split(',')[0]},<br />
            <span className="text-textMuted">{HERO_DATA.title.split(',')[1]}</span>
          </h1>
          
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl text-text font-medium border-l-4 border-accent pl-4">
              {HERO_DATA.subtitle}
            </h2>
            <p className="text-textMuted text-lg max-w-lg leading-relaxed">
              {HERO_DATA.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-4 bg-primary text-background font-bold rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2 group">
              {HERO_DATA.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-surface border border-white/10 text-text rounded-lg hover:border-white/30 transition-all flex items-center justify-center gap-2 font-mono text-sm">
              <Terminal className="w-4 h-4" />
              查看技术栈
            </button>
          </div>
        </div>

        {/* Visual Representation of "Identity" */}
        <div className="relative hidden md:block h-[600px] w-full bg-surfaceHighlight/30 rounded-2xl border border-white/5 p-8 overflow-hidden backdrop-blur-sm">
           {/* Abstract IDE / Notion UI Mockup */}
           <div className="w-full h-full flex flex-col gap-4 opacity-80">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs font-mono text-textMuted">Productivity.tsx</div>
              </div>
              
              <div className="font-mono text-sm space-y-2 text-textMuted">
                <div className="flex gap-4">
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-400">Goal</span>
                  <span>=</span>
                  <span className="text-green-400">'Financial Freedom'</span>;
                </div>
                <div className="flex gap-4">
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-400">Stack</span>
                  <span>=</span>
                  <span className="text-yellow-100">['React', 'Notion', 'AI']</span>;
                </div>
                <br />
                <div className="text-text/50">// TODO: Stop overthinking, start shipping.</div>
                <div className="pl-4 border-l border-white/10">
                  <span className="text-accent">while</span> (alive) {'{'}
                  <div className="pl-4">
                     learn();<br/>
                     build();<br/>
                     <span className="text-green-400">monetize();</span>
                  </div>
                  {'}'}
                </div>
              </div>

              {/* A Floating "Notion Card" */}
              <div className="absolute bottom-12 right-12 w-64 bg-surface border border-white/10 p-4 rounded-lg shadow-2xl rotate-3 hover:rotate-0 transition-all cursor-default">
                 <div className="h-2 w-12 bg-accent/50 rounded mb-4" />
                 <div className="h-4 w-3/4 bg-white/20 rounded mb-2" />
                 <div className="h-4 w-1/2 bg-white/20 rounded" />
                 <div className="mt-4 flex items-center justify-between text-xs text-textMuted">
                    <span>Priority: High</span>
                    <span className="text-accent">Done</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;