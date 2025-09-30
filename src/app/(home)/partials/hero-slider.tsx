"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import branding from "~/branding";
import cn from "~/lib/cn";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        src: "/assets/images/fire-damage-poster.webp",
        heading: "Property Damage Experts",
        subheading: "Get the maximum insurance settlement you deserve with professional representation",
        cta: "Free Evaluation",
        ctaLink: "/contact",
    },
    {
        src: "/assets/images/straight-path.jpg",
        heading: "We Guide Your Path",
        subheading: "Licensed public adjusters who secure the best financial settlement for your claim",
        cta: "Learn More",
        ctaLink: "/contact",
    },
    {
        src: "/assets/images/insurance-guidance.jpg",
        heading: "Insurance Claims Made Simple",
        subheading: "Let us handle your insurance claim for a stress-free process",
        cta: "Get Started",
        ctaLink: "/contact",
    },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative w-full h-[46vh] lg:h-[64vh] overflow-hidden bg-gray-50">
            <h1 className="sr-only">
                {branding.name} - Professional Public Insurance Adjusters in New
                Jersey Helping Property Owners Get Maximum Insurance Claim
                Settlements
            </h1>

            {/* Desktop/Laptop Slides (hidden on mobile) */}
            <div className="relative w-full h-full hidden sm:block">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={cn(
                            "absolute inset-0 transition-opacity duration-700",
                            currentSlide === index ? "opacity-100" : "opacity-0"
                        )}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.heading}
                            priority={index === 0}
                            className="w-full h-full object-cover"
                            width={1920}
                            height={1080}
                            sizes="100vw"
                        />
                        {/* Lighter overlay for airy look */}
                        <div className="absolute inset-0 bg-white/30 mix-blend-lighten" />
                    </div>
                ))}
            </div>

            {/* Mobile clean hero (no photo) */}
            <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-white to-gray-50" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="page-container text-center max-w-4xl">
                    <div className="animate-fade-in">
                        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
                            {slides[currentSlide].heading}
                        </h2>
                        <p className="text-base sm:text-lg lg:text-2xl mb-6 sm:mb-10 text-gray-600 max-w-2xl mx-auto">
                            {slides[currentSlide].subheading}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <Link
                                href={slides[currentSlide].ctaLink}
                                className="inline-flex items-center justify-center gap-2 btn-secondary px-8 py-4"
                            >
                                {slides[currentSlide].cta}
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 btn-outline px-8 py-4"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation (desktop only) */}
            <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center gap-4">
                <button
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-colors"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                <div className="flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                currentSlide === index
                                    ? "w-8 bg-gray-700"
                                    : "bg-gray-300 hover:bg-gray-400"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-colors"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
            </div>
        </section>
    );
}