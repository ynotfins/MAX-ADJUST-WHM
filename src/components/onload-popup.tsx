"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import branding from "~/branding";
import { Button } from "@heroui/button";
import { ShieldCheck, Phone, Sparkles, X } from "lucide-react";

export default function PopupModal() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        try {
            const dismissedUntil = localStorage.getItem("ma_popup_dismissed_until");
            if (dismissedUntil && Date.now() < Number(dismissedUntil)) {
                return; // Respect snooze window
            }
        } catch {}

        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 8000); // Show after 8 seconds

        return () => clearTimeout(timer);
    }, []);

    const dismissForDays = (days: number) => {
        try {
            const until = Date.now() + days * 24 * 60 * 60 * 1000;
            localStorage.setItem("ma_popup_dismissed_until", String(until));
        } catch {}
        setShowPopup(false);
    };

    if (!showPopup) return null;

    return (
        <div className="fixed bottom-24 lg:bottom-10 left-4 right-4 md:left-8 md:right-8 z-50">
            <div className="card-glass max-w-4xl mx-auto shadow-xl border border-primary/10">
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4">
                    {/* Close */}
                    <button
                        aria-label="Close"
                        onClick={() => dismissForDays(2)}
                        className="absolute top-2 right-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <X className="w-4 h-4 text-gray-500" />
                    </button>

                    {/* Icon */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <div className="hidden md:block w-px h-10 bg-gray-200" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                            You're eligible for a free claim evaluation
                        </h2>
                        <p className="mt-1 text-gray-600">
                            Our licensed adjusters make the process simple and often secure higher settlements. It takes just a minute to get started.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <Link href="/contact" className="btn-primary text-center">
                            Get Free Evaluation
                        </Link>
                        <Link
                            href={`tel:${branding.phoneNumber}`}
                            className="btn-ghost text-center inline-flex items-center justify-center gap-2"
                        >
                            <Phone className="w-4 h-4" /> Call {branding.phoneNumber}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
