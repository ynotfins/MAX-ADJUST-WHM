"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import branding from "~/branding";
import { Button } from "@heroui/button";

export default function PopupModal() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!showPopup) return null;

    return (
        <div className="fixed bottom-32 lg:bottom-12 left-4 right-4 md:left-8 md:right-8 z-50 dark bg-red-900/80 backdrop-blur-lg text-white p-4 md:p-5 rounded-lg shadow-lg animate-slide-up max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left space-y-2">
                    <h2 className="text-base md:text-lg font-semibold uppercase tracking-wide">
                        Attention Homeowners
                    </h2>
                    <p className="text-sm md:text-base font-medium">
                        Insurance companies often underpay or deny claims when
                        you're unrepresented.
                        <br />
                        Our licensed adjusters help you get up to 2X more.
                    </p>
                    <p className="text-sm md:text-base font-medium mt-1">
                        <Link
                            href={`tel:${branding.phoneNumber}`}
                            className="underline"
                        >
                            {branding.phoneNumber}
                        </Link>{" "}
                        for a free consultation.
                    </p>
                </div>
                <Button
                    onPress={() => setShowPopup(false)}
                    className="bg-white text-black text-sm font-semibold rounded-md px-4 py-2 hover:bg-gray-200 transition w-full md:w-auto"
                >
                    Close
                </Button>
            </div>
        </div>
    );
}
