import React, { useState } from 'react';
import { ShoppingBag, ArrowUpRight, Zap, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ImageCarouselModal from './ImageCarouselModal';
import WeChatContactModal from './WeChatContactModal';

const Products: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [wechatModalOpen, setWechatModalOpen] = useState(false);

  const handleViewDetails = (project: typeof PRODUCTS[0]) => {
    if (project.selfMediaImages && project.selfMediaImages.length > 0) {
      setSelectedImages(project.selfMediaImages);
      setSelectedTitle(project.title);
      setModalOpen(true);
    } else if (project.link) {
      window.open(project.link, '_blank');
    }
  };

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
              我不做虚无的内容,只提供经过验证的实战系统。一切为了帮你节省时间,实现增长。
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
                {/* Visual Header */}
                <div className="h-48 bg-gradient-to-br from-surfaceHighlight to-background relative flex items-center justify-center overflow-hidden group-hover:h-48 transition-all duration-500">
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  {/* Gradient Overlay */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-surface to-transparent opacity-80 z-10" />

                  {project.image ? (
                    <div className="w-full h-full relative z-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  ) : (
                    <div className="relative z-10 bg-surface/50 p-4 rounded-2xl border border-border backdrop-blur-md shadow-sm group-hover:scale-110 transition-transform duration-500">
                      <ShoppingBag className="w-8 h-8 text-accent" />
                    </div>
                  )}
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

                  {/* Buttons Container */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleViewDetails(project)}
                      className="flex-1 py-3 rounded-lg border border-border bg-surfaceHighlight/50 text-text hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all text-sm font-medium"
                    >
                      查看详情
                    </button>
                    <button
                      onClick={() => setWechatModalOpen(true)}
                      className="px-4 py-3 rounded-lg border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all text-sm font-medium flex items-center gap-2"
                      title="联系我"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="hidden sm:inline">联系我</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Carousel Modal */}
      <ImageCarouselModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={selectedImages}
        title={selectedTitle}
      />

      {/* WeChat Contact Modal */}
      <WeChatContactModal
        isOpen={wechatModalOpen}
        onClose={() => setWechatModalOpen(false)}
      />
    </div>
  );
};

export default Products;