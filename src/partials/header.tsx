"use client";

import { Link } from "next-view-transitions";
import Logo from "./logo";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { services } from "~/constants/services";
import PhoneNumberButton from "~/components/phone-number-button";
import cn from "~/lib/cn";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm"
                    : "bg-white/60 backdrop-blur-sm"
            )}
        >
            <nav className="page-container">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-primary transition-colors font-medium"
                        >
                            Home
                        </Link>
                        
                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center gap-1">
                                Services
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            <div className="absolute top-full left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                                <div className="bg-white rounded-2xl shadow-lg p-2">
                                    {services.map((service) => (
                                        <Link
                                            key={service.id}
                                            href={service.href}
                                            className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="text-gray-900 font-medium">
                                                {service.label}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/testimonials"
                            className="text-gray-700 hover:text-primary transition-colors font-medium"
                        >
                            Testimonials
                        </Link>
                        
                        <Link
                            href="/contact"
                            className="text-gray-700 hover:text-primary transition-colors font-medium"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link
                            href="tel:8889995740"
                            className="bg-secondary text-white font-semibold px-6 py-3 rounded-full hover:bg-red-600 transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            (888) 999-5740
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={cn(
                        "lg:hidden transition-all duration-300 overflow-hidden",
                        isMobileMenuOpen ? "max-h-[600px]" : "max-h-0"
                    )}
                >
                    <div className="py-4 space-y-1">
                        <Link
                            href="/"
                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        
                        <div className="px-4 py-2">
                            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                Services
                            </div>
                            {services.map((service) => (
                                <Link
                                    key={service.id}
                                    href={service.href}
                                    className="block py-2 text-gray-700 hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {service.label}
                                </Link>
                            ))}
                        </div>

                        <Link
                            href="/testimonials"
                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Testimonials
                        </Link>
                        
                        <Link
                            href="/contact"
                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>

                        <div className="px-4 pt-4">
                            <Link
                                href="tel:8889995740"
                                className="btn-primary w-full text-center flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Now
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export function GetQuote() {
    return (
        <Link href="/contact" className="btn-primary">
            Get Free Evaluation
        </Link>
    );
}