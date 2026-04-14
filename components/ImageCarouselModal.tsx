import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselModalProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    title?: string;
}

const ImageCarouselModal: React.FC<ImageCarouselModalProps> = ({
    isOpen,
    onClose,
    images,
    title = "图片预览"
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Reset index when modal opens
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
        }
    }, [isOpen]);

    // Handle keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setTimeout(() => setIsAnimating(false), 300);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setTimeout(() => setIsAnimating(false), 300);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onClick={onClose}
        >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

            {/* Modal Container */}
            <div
                className="relative z-10 w-full max-w-6xl mx-4 md:mx-8"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Glass Card */}
                <div className="bg-surface/95 backdrop-blur-2xl rounded-3xl border border-border/50 shadow-2xl overflow-hidden">

                    {/* Header */}
                    <div className="flex items-center justify-between px-8 py-6 border-b border-border/50">
                        <div>
                            <h3 className="text-2xl font-bold text-primary">{title}</h3>
                            <p className="text-sm text-textMuted mt-1">
                                {currentIndex + 1} / {images.length}
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-surfaceHighlight text-textMuted hover:text-primary transition-all border border-transparent hover:border-border group"
                            aria-label="Close"
                        >
                            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                        </button>
                    </div>

                    {/* Image Display Area */}
                    <div className="relative bg-gradient-to-br from-surfaceHighlight/30 to-background/50 p-8 md:p-12">
                        {/* Decorative Background */}
                        <div className="absolute inset-0 bg-grid opacity-5" />
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />

                        {/* Image Container */}
                        <div className="relative aspect-video bg-background/50 rounded-2xl overflow-hidden border border-border/30 shadow-2xl">
                            <img
                                src={images[currentIndex]}
                                alt={`Slide ${currentIndex + 1}`}
                                className={`w-full h-full object-contain transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                                    }`}
                            />

                            {/* Navigation Arrows */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrev}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-surface/90 backdrop-blur-md border border-border hover:bg-accent hover:border-accent hover:text-white text-text transition-all shadow-lg hover:scale-110 group"
                                        aria-label="Previous"
                                    >
                                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-surface/90 backdrop-blur-md border border-border hover:bg-accent hover:border-accent hover:text-white text-text transition-all shadow-lg hover:scale-110 group"
                                        aria-label="Next"
                                    >
                                        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnail Navigation */}
                        {images.length > 1 && (
                            <div className="flex justify-center gap-3 mt-8 overflow-x-auto pb-2">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            if (!isAnimating) {
                                                setIsAnimating(true);
                                                setCurrentIndex(idx);
                                                setTimeout(() => setIsAnimating(false), 300);
                                            }
                                        }}
                                        className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${idx === currentIndex
                                                ? 'border-accent scale-110 shadow-lg shadow-accent/30'
                                                : 'border-border/30 hover:border-accent/50 opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${idx + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                        {idx === currentIndex && (
                                            <div className="absolute inset-0 bg-accent/20" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer with Tips */}
                    <div className="px-8 py-4 bg-surfaceHighlight/30 border-t border-border/50">
                        <div className="flex items-center justify-center gap-6 text-xs text-textMuted">
                            <span className="flex items-center gap-2">
                                <kbd className="px-2 py-1 bg-surface rounded border border-border font-mono">←</kbd>
                                <kbd className="px-2 py-1 bg-surface rounded border border-border font-mono">→</kbd>
                                <span>切换图片</span>
                            </span>
                            <span className="flex items-center gap-2">
                                <kbd className="px-2 py-1 bg-surface rounded border border-border font-mono">ESC</kbd>
                                <span>关闭</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCarouselModal;
