"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { branding } from "~/branding";
import { show } from "@intercom/messenger-js-sdk";
import PhoneNumberButton from "~/components/phone-number-button";
import { Divider } from "@heroui/divider";

export function StickyHeader() {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // Using 768px as MD breakpoint
        };

        const handleScroll = () => {
            const scrollY = window.scrollY;
            setHasScrolled(scrollY > 100); // Show after 100px scroll
        };

        // Initial checks
        checkMobile();
        handleScroll();

        // Event listeners
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", checkMobile);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    // Don't render if desktop and hasn't scrolled
    if (!isMobile && !hasScrolled) {
        return null;
    }

    return (
        <motion.div
            className="fixed w-full bg-black bg-opacity-50 backdrop-blur-xl z-[9999999]"
            style={{
                top: isMobile ? "auto" : 0,
                bottom: isMobile ? 0 : "auto",
            }}
            initial={{ y: isMobile ? 100 : -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2 }}
        >
            <div className="px-md lg:px-3xl text-white flex flex-col md:flex-row justify-between gap-sm py-md">
                <div className="text-start text-xs md:text-lg">
                    <span className="font-semibold">Very important</span> – Call{" "}
                    {branding.name} <br />
                    before your insurance company
                </div>

                <div className="flex flex-row gap-md items-center md:gap-lg">
                    <button
                        onClick={show}
                        className="bg-black text-primary font-semibold border-2 md:border-4 border-primary text-xs md:text-lg px-md py-sm md:px-md md:py-sm rounded-full"
                    >
                        LIVE CHAT
                    </button>

                    <Divider
                        orientation="vertical"
                        className="text-white h-7 bg-white"
                    />

                    <PhoneNumberButton
                        labelClassName="text-start text-white"
                        className="text-white"
                    />
                </div>
            </div>
        </motion.div>
    );
}
