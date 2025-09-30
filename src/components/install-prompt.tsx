"use client";

import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";
import { Button } from "@heroui/button";

export default function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showPrompt, setShowPrompt] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // Check if iOS
        const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        setIsIOS(iOS);

        // Check if already installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            return;
        }

        // Listen for install prompt
        const handler = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            
            // Show prompt after a delay
            setTimeout(() => {
                setShowPrompt(true);
            }, 30000); // Show after 30 seconds
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
            setDeferredPrompt(null);
            setShowPrompt(false);
        }
    };

    const handleClose = () => {
        setShowPrompt(false);
        // Don't show again for 7 days
        localStorage.setItem('installPromptDismissed', Date.now().toString());
    };

    if (!showPrompt) return null;

    return (
        <div className="fixed bottom-20 left-4 right-4 lg:left-auto lg:right-8 lg:bottom-8 max-w-sm z-50 animate-slide-up">
            <div className="card bg-white shadow-xl border border-gray-200">
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 p-1 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    <X className="w-4 h-4 text-gray-500" />
                </button>
                
                <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Download className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                            Install MAX ADJUST App
                        </h3>
                        <p className="text-sm text-gray-600">
                            Get quick access to file claims and our 24/7 hotline
                        </p>
                    </div>
                </div>

                {isIOS ? (
                    <div className="text-sm text-gray-600 mb-4">
                        Tap the share button <span className="inline-block w-4 h-4 align-middle">⬆️</span> and select "Add to Home Screen"
                    </div>
                ) : (
                    <div className="flex gap-3">
                        <Button
                            size="sm"
                            variant="light"
                            onPress={handleClose}
                        >
                            Not Now
                        </Button>
                        <Button
                            size="sm"
                            color="primary"
                            onPress={handleInstall}
                            startContent={<Download className="w-4 h-4" />}
                        >
                            Install
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
