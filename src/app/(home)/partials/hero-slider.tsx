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
    {
        src: "/assets/images/lincoln.jpg",
        srcMobile: "/assets/images/lincoln-mobile.png",
        heading: "No Upfront Costs",
        subheading: "You pay nothing until we get you paid - We increase settlements by 180% on average",
        cta: "Call Now",
        ctaLink: `tel:${branding.phoneNumber}`,
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
        <section className="relative w-full h-[70vh] lg:h-[80vh] overflow-hidden bg-gray-900">
            <h1 className="sr-only">
                {branding.name} - Professional Public Insurance Adjusters in New
                Jersey Helping Property Owners Get Maximum Insurance Claim
                Settlements
            </h1>

            {/* Slides */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={cn(
                            "absolute inset-0 transition-opacity duration-1000",
                            currentSlide === index ? "opacity-100" : "opacity-0"
                        )}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.heading}
                            priority={index === 0}
                            className={cn("w-full h-full object-cover", {
                                "hidden lg:block": slide.srcMobile,
                            })}
                            width={1920}
                            height={1080}
                        />

                        {slide.srcMobile && (
                            <Image
                                src={slide.srcMobile}
                                alt={slide.heading}
                                priority={index === 0}
                                className="w-full h-full object-cover lg:hidden"
                                width={768}
                                height={1024}
                            />
                        )}

                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="page-container text-center text-white max-w-4xl">
                    <div className="animate-fade-in">
                        <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                            {slides[currentSlide].heading}
                        </h2>
                        <p className="text-lg lg:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
                            {slides[currentSlide].subheading}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={slides[currentSlide].ctaLink}
                                className="inline-flex items-center justify-center gap-2 bg-secondary text-white font-semibold px-8 py-4 rounded-full hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                {slides[currentSlide].cta}
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur text-white border-2 border-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                <button
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                <div className="flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                currentSlide === index
                                    ? "w-8 bg-white"
                                    : "bg-white/50 hover:bg-white/70"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-5 h-5 text-white" />
                </button>
            </div>
        </section>
    );
}