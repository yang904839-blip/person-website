import React from 'react';
import { ArrowRight, Terminal, Sparkles } from 'lucide-react';
import { HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="identity" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-background transition-colors duration-300">
      {/* 1. Enhanced Lighting Effects (Background) */}
      {/* Adjusted mix-blend-mode and opacity for visibility in both Light and Dark modes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none opacity-60 dark:mix-blend-screen mix-blend-multiply" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none opacity-40 dark:mix-blend-screen mix-blend-multiply" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-accent/20 text-xs font-mono text-accent shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Open to Work & Collab
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary leading-[1.1]">
            {HERO_DATA.title.split(',')[0]},<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-textMuted to-textMuted/60">
              {HERO_DATA.title.split(',')[1]}
            </span>
          </h1>

          <div className="space-y-6 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-transparent rounded-full opacity-50" />
            <div className="pl-6 space-y-4">
              <h2 className="text-2xl text-text font-semibold">
                {HERO_DATA.subtitle}
              </h2>
              <p className="text-textMuted text-lg max-w-lg leading-relaxed">
                {HERO_DATA.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://yang904839-blip.github.io/Para-Template-Intro/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-background font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-accent/10"
            >
              {HERO_DATA.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            {/* <button className="px-8 py-4 glass-panel text-text rounded-xl hover:bg-surfaceHighlight transition-all flex items-center justify-center gap-2 font-mono text-sm group">
              <Terminal className="w-4 h-4 text-accent transition-colors" />
              查看技术栈
            </button> */}
          </div>
        </div>

        {/* Visual Representation of "Identity" with 3D effect */}
        <div className="relative hidden md:block perspective-1000">
          <div className="relative h-[600px] w-full bg-surfaceHighlight dark:bg-[#0c0c0e] rounded-2xl border border-border p-1 shadow-2xl overflow-hidden group transition-colors duration-300">
            {/* Glow behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative h-full w-full bg-surface dark:bg-[#0c0c0e] rounded-xl overflow-hidden flex flex-col transition-colors duration-300">
              {/* Header */}
              <div className="h-10 border-b border-border flex items-center px-4 justify-between bg-surfaceHighlight/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-[10px] font-mono text-textMuted/60">Notion_Life_OS.v2</div>
              </div>

              {/* Code Content */}
              <div className="p-8 font-mono text-sm space-y-4 text-textMuted relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full pointer-events-none" />

                <div className="flex gap-4">
                  <span className="text-purple-500 dark:text-purple-400">const</span>
                  <span className="text-blue-600 dark:text-blue-400">Identity</span>
                  <span>=</span>
                  <span className="text-yellow-600 dark:text-yellow-100">{'{'}</span>
                </div>
                <div className="pl-6 space-y-2 border-l border-border ml-2">
                  <div>role: <span className="text-green-600 dark:text-green-400">'Frontend Engineer'</span>,</div>
                  <div>sideHustle: <span className="text-green-600 dark:text-green-400">'Creator'</span>,</div>
                  <div>focus: <span className="text-yellow-600 dark:text-yellow-100">['Notion', 'AI', 'Money']</span></div>
                </div>
                <div><span className="text-yellow-600 dark:text-yellow-100">{'}'}</span>;</div>

                <br />
                <div className="text-textMuted/50 italic">// Executing pragmatic protocol...</div>
                <div className="pl-2 border-l-2 border-accent/50 bg-accent/5 p-4 rounded-r">
                  <span className="text-accent">function</span> <span className="text-blue-500 dark:text-blue-300">dailyRoutine</span>() {'{'}
                  <div className="pl-4 text-xs mt-2 text-textMuted">
                    if (!profitable) return <span className="text-red-500 dark:text-red-400">false</span>;<br />
                    return <span className="text-green-600 dark:text-green-400">shipIt()</span>;
                  </div>
                  {'}'}
                </div>
              </div>

              {/* Floating Elements (Notion Blocks) */}
              {/* <div className="absolute bottom-10 right-8 w-56 glass-panel p-4 rounded-lg border-l-4 border-l-accent shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-surface/80">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs font-bold text-text">今日目标</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-accent rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-textMuted">
                    <span>视频脚本撰写</span>
                    <span>75%</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade to blend into next section - Adjusted gradient for light/dark */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;