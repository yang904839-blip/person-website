import React, { useState, useEffect } from 'react';
import { AppWindow, Monitor, Command, Code, MessageCircle, ExternalLink, Check } from 'lucide-react';
import { SOFTWARE_PROJECTS } from '../constants';
import WeChatContactModal from './WeChatContactModal';
import ImageCarouselModal from './ImageCarouselModal';

const SoftwareShowcase: React.FC = () => {
    const [wechatModalOpen, setWechatModalOpen] = useState(false);
    const [carouselModalOpen, setCarouselModalOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [selectedTitle, setSelectedTitle] = useState('');
    const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: number]: number }>({});

    const getIcon = (idx: number) => {
        switch (idx) {
            case 0: return AppWindow;
            case 1: return Monitor;
            default: return Command;
        }
    };

    const handleImageClick = (project: typeof SOFTWARE_PROJECTS[0]) => {
        if (project.softwareImages && project.softwareImages.length > 0) {
            setSelectedImages(project.softwareImages);
            setSelectedTitle(project.title);
            setCarouselModalOpen(true);
        }
    };

    // Auto-rotate images for projects with multiple screenshots
    useEffect(() => {
        const intervals: NodeJS.Timeout[] = [];

        SOFTWARE_PROJECTS.forEach((project, idx) => {
            if (project.softwareImages && project.softwareImages.length > 1) {
                const interval = setInterval(() => {
                    setCurrentImageIndexes(prev => ({
                        ...prev,
                        [idx]: ((prev[idx] || 0) + 1) % project.softwareImages!.length
                    }));
                }, 3000);
                intervals.push(interval);
            }
        });

        return () => {
            intervals.forEach(interval => clearInterval(interval));
        };
    }, []);

    return (
        <div className="relative">
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-border pb-10">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Code className="w-5 h-5 text-accent" fill="currentColor" />
                            <span className="text-accent font-mono text-sm uppercase tracking-widest">Development</span>
                        </div>
                        <h2 className="text-4xl font-bold text-primary mb-4">独立开发 <span className="text-textMuted/40 font-light text-2xl ml-2">/ Software</span></h2>
                        <p className="text-textMuted max-w-xl text-lg">
                            用代码解决实际问题,打造极致的小而美工具。
                        </p>
                    </div>
                </div>

                {/* Software Projects - Minimalist Layout */}
                <div className="space-y-16">
                    {SOFTWARE_PROJECTS.map((project, idx) => {
                        const Icon = getIcon(idx);
                        const isEven = idx % 2 === 0;
                        const hasCarousel = project.softwareImages && project.softwareImages.length > 0;
                        const currentImageIndex = currentImageIndexes[idx] || 0;
                        const displayImage = hasCarousel
                            ? project.softwareImages![currentImageIndex]
                            : project.image;

                        return (
                            <div
                                key={idx}
                                className="group relative"
                            >
                                {/* Content Container */}
                                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16`}>

                                    {/* Left Side - Screenshot (60%) */}
                                    <div className="w-full md:w-[60%]">
                                        <div
                                            className={`relative bg-gradient-to-br from-surfaceHighlight/30 to-background/50 rounded-2xl overflow-hidden border border-border/50 hover:border-accent/30 transition-all duration-500 ${hasCarousel ? 'cursor-pointer' : ''}`}
                                            onClick={() => hasCarousel && handleImageClick(project)}
                                        >
                                            {/* Screenshot */}
                                            <div className="relative aspect-video flex items-center justify-center p-6">
                                                {displayImage ? (
                                                    <div className="relative w-full h-full">
                                                        <img
                                                            key={displayImage}
                                                            src={displayImage}
                                                            alt={project.title}
                                                            className="w-full h-full object-contain transform group-hover:scale-[1.02] transition-transform duration-700"
                                                        />

                                                        {/* Hover Overlay */}
                                                        {hasCarousel && (
                                                            <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium">
                                                                    点击查看 {project.softwareImages!.length} 张截图
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Carousel Indicators */}
                                                        {hasCarousel && project.softwareImages!.length > 1 && (
                                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                                                                {project.softwareImages!.map((_, imgIdx) => (
                                                                    <div
                                                                        key={imgIdx}
                                                                        className={`h-1 rounded-full transition-all duration-300 ${imgIdx === currentImageIndex
                                                                                ? 'w-6 bg-accent'
                                                                                : 'w-1 bg-white/30'
                                                                            }`}
                                                                    />
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center justify-center h-full">
                                                        <div className="text-center">
                                                            <Icon className="w-16 h-16 text-accent/30 mx-auto mb-3" />
                                                            <p className="text-textMuted/40 text-sm">界面截图即将上线</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side - Info (40%) */}
                                    <div className="w-full md:w-[40%] flex flex-col justify-center">
                                        {/* Category Badge */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-1 h-4 bg-accent rounded-full" />
                                            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-textMuted text-base leading-relaxed mb-6">
                                            {project.description}
                                        </p>

                                        {/* Features */}
                                        {project.features && project.features.length > 0 && (
                                            <div className="space-y-3 mb-8">
                                                {project.features.map((feature, featureIdx) => (
                                                    <div key={featureIdx} className="flex items-start gap-3">
                                                        <span className="text-xl flex-shrink-0 mt-0.5">{feature.icon}</span>
                                                        <span className="text-sm text-textMuted leading-relaxed">{feature.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs text-textMuted/70 bg-surfaceHighlight/30 px-3 py-1.5 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => setWechatModalOpen(true)}
                                                className="flex-1 py-3 px-5 rounded-xl bg-accent text-white hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 transition-all text-sm font-semibold flex items-center justify-center gap-2"
                                            >
                                                <MessageCircle className="w-4 h-4" />
                                                联系我
                                            </button>

                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-5 py-3 rounded-xl border border-border bg-surface hover:bg-surfaceHighlight transition-all flex items-center justify-center group"
                                                    title="访问项目"
                                                >
                                                    <ExternalLink className="w-4 h-4 text-textMuted group-hover:text-accent transition-colors" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Divider (except for last item) */}
                                {idx < SOFTWARE_PROJECTS.length - 1 && (
                                    <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* WeChat Contact Modal */}
            <WeChatContactModal
                isOpen={wechatModalOpen}
                onClose={() => setWechatModalOpen(false)}
            />

            {/* Image Carousel Modal */}
            <ImageCarouselModal
                isOpen={carouselModalOpen}
                onClose={() => setCarouselModalOpen(false)}
                images={selectedImages}
                title={selectedTitle}
            />
        </div>
    );
};

export default SoftwareShowcase;
