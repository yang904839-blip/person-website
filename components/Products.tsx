import React, { useRef, useState, MouseEvent } from 'react';
import { ShoppingBag, ArrowUpRight, Zap, Code, LayoutTemplate, Star } from 'lucide-react';
import { DIGITAL_PRODUCTS, SOFTWARE_PRODUCTS } from '../constants';
import { Project } from '../types';

interface ProductCardProps {
  project: Project;
  icon: React.ElementType;
  accentColor: string; // 'purple' or 'blue'
}

const ProductCard: React.FC<ProductCardProps> = ({ project, icon: Icon, accentColor }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const isPurple = accentColor === 'purple';
  const accentClass = isPurple ? 'text-purple-500' : 'text-blue-500';
  const bgAccentClass = isPurple ? 'bg-purple-500' : 'bg-blue-500';
  const borderAccentClass = isPurple ? 'border-purple-500' : 'border-blue-500';
  const gradientClass = isPurple ? 'from-purple-500/20' : 'from-blue-500/20';
  // Use a tailwind-compatible hex for the conic gradient color
  const borderGradientColor = isPurple ? '#a855f7' : '#3b82f6';

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full rounded-2xl overflow-hidden cursor-none select-none"
    >
      {/* 1. Animated Border Layer (Background) */}
      <div className="absolute inset-0 z-0">
         <div 
            className={`absolute inset-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow`}
            style={{
                background: `conic-gradient(from 0deg, transparent 0 340deg, ${borderGradientColor} 360deg)`
            }}
         />
      </div>

      {/* 2. Main Content Container (Relative with margin to reveal border) */}
      <div className="relative z-10 h-full m-[1.5px] bg-surface rounded-[14px] flex flex-col overflow-hidden border border-border/50 group-hover:border-transparent transition-colors">
        
        {/* Top: Product Image / Visual Area */}
        <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${gradientClass} to-surfaceHighlight p-6 flex items-center justify-center shrink-0`}>
           {/* Abstract Background Patterns */}
           <div className="absolute inset-0 bg-grid opacity-20" />
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-surface via-transparent to-transparent opacity-90" />
           
           {/* Floating Icon/Graphic */}
           <div className={`relative z-10 bg-surface/80 p-5 rounded-2xl border border-border backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform duration-500 ${isHovered ? 'shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]' : ''}`}>
             <Icon className={`w-10 h-10 ${accentClass}`} strokeWidth={1.5} />
           </div>

           {/* Badge */}
           <div className="absolute top-4 right-4">
              <span className="text-xs font-bold text-primary bg-surfaceHighlight/80 backdrop-blur px-3 py-1 rounded-full border border-border shadow-sm">
                {project.price}
              </span>
           </div>
        </div>

        {/* Bottom: Description Area */}
        <div className="p-6 flex-1 flex flex-col bg-surface relative">
           <div className="mb-4">
              <span className={`text-[10px] font-bold font-mono uppercase tracking-widest ${accentClass} ${bgAccentClass}/10 px-2 py-1 rounded border ${borderAccentClass}/20`}>
                {project.category}
              </span>
           </div>

           <h3 className={`text-xl font-bold text-primary mb-3 group-hover:${accentClass} transition-colors duration-300`}>
             {project.title}
           </h3>
           
           <p className="text-textMuted text-sm mb-6 flex-1 leading-relaxed opacity-80">
             {project.description}
           </p>

           <div className="mt-auto pt-4 border-t border-border/50 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] text-textMuted/60 bg-surfaceHighlight px-2 py-1 rounded-md">
                    #{tag}
                </span>
              ))}
           </div>
        </div>
      </div>

      {/* 3. Custom Cursor Follower Bubble */}
      <div 
        className="absolute top-0 left-0 pointer-events-none z-50 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) translate(-50%, -150%)`,
        }}
      >
        <div className={`px-4 py-2 rounded-full ${bgAccentClass} text-white text-xs font-bold shadow-xl whitespace-nowrap flex items-center gap-1.5`}>
           <Star className="w-3 h-3 fill-current animate-pulse" />
           你即将变得更好
        </div>
        {/* Little triangle pointer */}
        <div className={`w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-${isPurple ? 'purple-500' : 'blue-500'} absolute left-1/2 -translate-x-1/2 top-full`} />
      </div>

    </div>
  );
};

const Products: React.FC = () => {
  return (
    <section id="products" className="py-32 bg-background relative border-t border-border transition-colors duration-300">
      {/* Background Separator Gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-border pb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
               <Zap className="w-5 h-5 text-accent" fill="currentColor" />
               <span className="text-accent font-mono text-sm uppercase tracking-widest">Monetization</span>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">精选产品 <span className="text-textMuted/40 font-light text-2xl ml-2">/ Selected Products</span></h2>
            <p className="text-textMuted max-w-xl text-lg">
               我不做虚无的内容，只提供经过验证的实战系统。一切为了帮你节省时间，实现增长。
            </p>
          </div>
          <a 
            href="https://www.xiaohongshu.com/user/profile/651d6ba9000000002402f766" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center px-6 py-3 bg-surface border border-border rounded-lg text-text hover:bg-surfaceHighlight hover:border-textMuted/30 transition-all"
          >
            访问小红书店铺 
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 1. Digital Assets Section */}
        <div className="mb-24">
           <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 text-purple-500">
                 <LayoutTemplate className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-primary">数字资产 <span className="text-textMuted font-normal text-base ml-2">Digital Assets</span></h3>
           </div>
           
           <div className="grid md:grid-cols-3 gap-10">
            {DIGITAL_PRODUCTS.map((project, idx) => (
                <ProductCard 
                  key={idx} 
                  project={project} 
                  icon={ShoppingBag} 
                  accentColor="purple" 
                />
            ))}
            </div>
        </div>

        {/* 2. Indie Development Section */}
        <div>
           <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 text-blue-500">
                 <Code className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-primary">独立开发 <span className="text-textMuted font-normal text-base ml-2">Indie Dev</span></h3>
           </div>

           <div className="grid md:grid-cols-3 gap-10">
            {SOFTWARE_PRODUCTS.map((project, idx) => (
                <ProductCard 
                  key={idx} 
                  project={project} 
                  icon={Code} 
                  accentColor="blue" 
                />
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Products;