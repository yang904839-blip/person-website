import React, { useEffect } from 'react';
import { X, Copy, Check } from 'lucide-react';

interface WeChatContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WeChatContactModal: React.FC<WeChatContactModalProps> = ({ isOpen, onClose }) => {
    const [copied, setCopied] = React.useState(false);
    const wechatId = "NeymarJaMo";

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

    // Reset copied state when modal closes
    useEffect(() => {
        if (!isOpen) {
            setCopied(false);
        }
    }, [isOpen]);

    const handleCopyWeChatId = async () => {
        try {
            await navigator.clipboard.writeText(wechatId);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

            {/* Modal Container */}
            <div
                className="relative z-10 w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Glass Card */}
                <div className="bg-surface/95 backdrop-blur-2xl rounded-3xl border border-border/50 shadow-2xl overflow-hidden">

                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                    {/* Header */}
                    <div className="relative flex items-center justify-between px-6 py-5 border-b border-border/50">
                        <div>
                            <h3 className="text-2xl font-bold text-primary">联系我</h3>
                            <p className="text-sm text-textMuted mt-1">扫码或添加微信号</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="flex-shrink-0 p-2 rounded-full hover:bg-surfaceHighlight text-textMuted hover:text-primary transition-all border border-transparent hover:border-border group"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="relative p-8">
                        {/* WeChat QR Code */}
                        <div className="mb-6">
                            <div className="relative mx-auto w-64 h-64 bg-white rounded-2xl p-4 shadow-lg border-4 border-accent/20 group hover:border-accent/40 transition-all duration-300">
                                <img
                                    src="/assets/wechat-qr.jpg"
                                    alt="WeChat QR Code"
                                    className="w-full h-full object-contain rounded-lg"
                                />
                                {/* Shine effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            </div>
                            <p className="text-center text-sm text-textMuted mt-4">
                                使用微信扫描二维码添加好友
                            </p>
                        </div>

                        {/* WeChat ID */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-textMuted">
                                微信号
                            </label>
                            <div className="flex items-center gap-2">
                                <div className="flex-1 px-4 py-3 bg-surfaceHighlight/50 border border-border rounded-xl text-primary font-mono text-lg font-semibold">
                                    {wechatId}
                                </div>
                                <button
                                    onClick={handleCopyWeChatId}
                                    className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${copied
                                            ? 'bg-green-500/20 text-green-500 border border-green-500/30'
                                            : 'bg-accent/10 text-accent border border-accent/30 hover:bg-accent hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                                        }`}
                                    disabled={copied}
                                >
                                    {copied ? (
                                        <>
                                            <Check className="w-4 h-4" />
                                            <span className="hidden sm:inline">已复制</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" />
                                            <span className="hidden sm:inline">复制</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Tips */}
                        <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-xl">
                            <p className="text-xs text-textMuted leading-relaxed">
                                💡 <span className="font-semibold text-primary">温馨提示:</span> 添加好友时请备注来源,方便快速通过验证
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="relative px-6 py-4 bg-surfaceHighlight/30 border-t border-border/50">
                        <div className="flex items-center justify-center text-xs text-textMuted">
                            <kbd className="px-2 py-1 bg-surface rounded border border-border font-mono mr-2">ESC</kbd>
                            <span>关闭窗口</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeChatContactModal;
