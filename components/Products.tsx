import React from 'react';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">精选产品 <span className="text-textMuted font-normal text-lg ml-2">/ Digital Assets</span></h2>
          <p className="text-textMuted max-w-xl">
             我不做虚无的内容，只提供经过验证的实战系统。一切为了帮你节省时间，实现增长。
          </p>
        </div>
        <a href="#" className="inline-flex items-center text-accent hover:text-white transition-colors">
          访问小红书店铺 <ArrowUpRight className="ml-1 w-4 h-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PRODUCTS.map((project, idx) => (
          <div key={idx} className="flex flex-col h-full bg-surface border border-white/5 rounded-xl overflow-hidden hover:translate-y-[-4px] transition-transform duration-300 shadow-lg shadow-black/20">
            {/* Visual Header */}
            <div className="h-32 bg-gradient-to-br from-surfaceHighlight to-background border-b border-white/5 p-6 flex items-center justify-center">
                <div className="bg-background/50 p-3 rounded-full border border-white/10 backdrop-blur-sm">
                   <ShoppingBag className="w-6 h-6 text-textMuted" />
                </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono text-accent uppercase tracking-wider">{project.category}</span>
                <span className="text-sm font-bold text-primary bg-white/5 px-2 py-1 rounded">{project.price}</span>
              </div>
              
              <h3 className="text-lg font-bold text-primary mb-3">{project.title}</h3>
              <p className="text-textMuted text-sm mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-textMuted/60 bg-white/5 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <button className="w-full mt-6 py-2 rounded border border-accent/30 text-accent hover:bg-accent hover:text-white transition-all text-sm font-medium">
                查看详情
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;