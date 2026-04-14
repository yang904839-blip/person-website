import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface YouTubePlayerModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoId: string;
    title?: string;
}

const YouTubePlayerModal: React.FC<YouTubePlayerModalProps> = ({
    isOpen,
    onClose,
    videoId,
    title = "视频播放"
}) => {
    // Handle keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

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

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

            {/* Modal Container */}
            <div
                className="relative z-10 w-full max-w-6xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Glass Card */}
                <div className="bg-surface/95 backdrop-blur-2xl rounded-3xl border border-border/50 shadow-2xl overflow-hidden">

                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
                        <h3 className="text-xl font-bold text-primary line-clamp-1 pr-4">{title}</h3>
                        <button
                            onClick={onClose}
                            className="flex-shrink-0 p-2 rounded-full hover:bg-surfaceHighlight text-textMuted hover:text-primary transition-all border border-transparent hover:border-border group"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                        </button>
                    </div>

                    {/* Video Player */}
                    <div className="relative bg-black">
                        <div className="aspect-video">
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                title={title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Footer with Tips */}
                    <div className="px-6 py-3 bg-surfaceHighlight/30 border-t border-border/50">
                        <div className="flex items-center justify-between text-xs text-textMuted">
                            <span className="flex items-center gap-2">
                                <kbd className="px-2 py-1 bg-surface rounded border border-border font-mono">ESC</kbd>
                                <span>关闭播放器</span>
                            </span>
                            <a
                                href={`https://www.youtube.com/watch?v=${videoId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:underline"
                            >
                                在 YouTube 中打开 →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YouTubePlayerModal;
