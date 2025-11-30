import React from 'react';
import { ShoppingBag, ArrowUpRight, Zap } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <div className="relative">
      {/* Background Separator Gradient - Removed as it's handled by wrapper or not needed for sub-section */}

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-border pb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-accent" fill="currentColor" />
              <span className="text-accent font-mono text-sm uppercase tracking-widest">Monetization</span>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">精选产品 <span className="text-textMuted/40 font-light text-2xl ml-2">/ Assets</span></h2>
            <p className="text-textMuted max-w-xl text-lg">
              我不做虚无的内容，只提供经过验证的实战系统。一切为了帮你节省时间，实现增长。
            </p>
          </div>
          <a href="#" className="group inline-flex items-center px-6 py-3 bg-surface border border-border rounded-lg text-text hover:bg-surfaceHighlight hover:border-textMuted/30 transition-all">
            访问小红书店铺
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {PRODUCTS.map((project, idx) => (
            <div key={idx} className="group relative flex flex-col h-full bg-surface rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 shadow-lg shadow-black/5 dark:shadow-none">
              {/* Spotlight Border Glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Inner Card */}
              <div className="relative flex flex-col h-full bg-surface rounded-2xl border border-border overflow-hidden group-hover:border-transparent transition-colors">

                {/* Visual Header */}
                <div className="h-40 bg-gradient-to-br from-surfaceHighlight to-background relative p-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  {/* Gradient Overlay adjusted for light/dark */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-surface to-transparent opacity-80" />

                  <div className="relative z-10 bg-surface/50 p-4 rounded-2xl border border-border backdrop-blur-md shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <ShoppingBag className="w-8 h-8 text-accent" />
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col relative">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold font-mono text-accent uppercase tracking-widest bg-accent/10 px-2 py-1 rounded border border-accent/20">{project.category}</span>
                    <span className="text-sm font-bold text-primary bg-surfaceHighlight px-3 py-1 rounded-full border border-border">{project.price}</span>
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-textMuted text-sm mb-8 flex-1 leading-relaxed opacity-80">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] text-textMuted/60 border border-border px-2 py-1 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-3 rounded-lg border border-border bg-surfaceHighlight/50 text-text hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all text-sm font-medium">
                    查看详情
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;