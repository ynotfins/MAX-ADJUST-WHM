import { Link } from "next-view-transitions";
import Image from "next/image";
import services from "~/constants/services";
import Icon from "~/components/icon";

export default function Services() {
    return (
        <section className="section-padding bg-white">
            <div className="page-container">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Property Damage Claims <span className="text-primary">Expertise</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Insurance companies often deny large claims due to technicalities. 
                        Our licensed public adjusters protect your claim while maximizing 
                        your settlement - we know every detail of your policy.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <Link
                            key={i}
                            href={service.href ?? "#"}
                            className="group card hover-lift"
                        >
                            <div className="flex flex-col items-center text-center">
                                {/* Icon Container */}
                                <div className="icon-container bg-primary/5 group-hover:bg-primary/10 mb-6 border border-primary/10 group-hover:border-primary/20">
                                    {service.icon ? (
                                        <Icon
                                            icon={service.icon}
                                            className="w-10 h-10 lg:w-12 lg:h-12 text-primary group-hover:scale-110 transition-transform duration-300"
                                        />
                                    ) : (
                                        <Image
                                            src={service.imgSrc}
                                            alt={service.altText}
                                            className="w-10 h-10 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:scale-110"
                                            width={48}
                                            height={48}
                                        />
                                    )}
                                </div>

                                {/* Service Name */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {service.label}
                                </h3>

                                {/* Arrow Icon */}
                                <div className="mt-auto">
                                    <svg 
                                        className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M17 8l4 4m0 0l-4 4m4-4H3" 
                                        />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold mb-4">
                            Need Help With Your <span className="text-secondary">Insurance Claim?</span>
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Get a free evaluation from our experienced adjusters and secure the settlement you deserve
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="btn-secondary inline-flex items-center justify-center gap-2"
                            >
                                Get Free Evaluation
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link
                                href="tel:8889995740"
                                className="btn-outline inline-flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call (888) 999-5740
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}