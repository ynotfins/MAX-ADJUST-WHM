"use client";
import cn from "~/lib/cn";
import Image from "next/image";
import { Link } from "next-view-transitions";
import React, { useEffect, useState } from "react";
import { StarRating } from "~/components/star-rating";
import { CheckList } from "~/components/checklist";

import Icon from "~/components/icon";
import services from "~/constants/services";
import PhoneNumberButton from "~/components/phone-number-button";
import { ServiceAreasMap } from "~/components/service-areas-map";

export type ServicePageHeroProps = {
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
    activeTab?: string;
    checklists: {
        do: React.ReactNode[];
        dont: React.ReactNode[];
    };
    relevantArticles?: {
        title: string;
        href: string;
    }[];
    testimonials: {
        profileImage: string;
        name: string;
        rating: number;
        text: string;
    }[];
    serviceId?: string;
};

export default function ServicePageHero({
    title,
    description,
    image,
    imageAlt,
    activeTab,
    checklists,
    relevantArticles = [],
    testimonials,
    serviceId,
}: ServicePageHeroProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <article itemScope itemType="http://schema.org/Service">
            {/* Hero Section */}
            <section
                className="relative w-full h-[80vh] lg:h-[60vh] overflow-hidden mb-lg"
                aria-labelledby="service-title"
            >
                <div
                    className="absolute inset-0"
                    role="img"
                    aria-label={imageAlt}
                >
                    <Image
                        src={image}
                        alt={imageAlt ?? "Service background"}
                        width={1200}
                        height={800}
                        className="w-full h-full object-cover"
                        priority
                        sizes="100vw"
                        itemProp="image"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"
                        aria-hidden="true"
                    ></div>
                </div>

                <div className="relative z-10 flex flex-col gap-md items-center justify-center h-full text-center text-white px-4">
                    <h1
                        id="service-title"
                        className="text-white text-3xl lg:text-5xl font-bold tracking-tight"
                        itemProp="name"
                    >
                        {title}
                    </h1>
                    <p
                        className="text-gray-200 text-lg lg:text-xl max-w-4xl leading-relaxed"
                        itemProp="description"
                    >
                        {description}
                    </p>
                    <div className="flex flex-col gap-4 items-center mt-4">
                        <div className="p-sm backdrop-blur-md rounded-xl bg-white/10">
                            <PhoneNumberButton
                                className="text-white"
                                labelClassName="text-white text-sm text-start"
                            />
                        </div>
                        <p className="text-gray-300 text-sm">
                            Free Consultation • No Upfront Fees
                        </p>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="container">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                        <span className="text-red-500 font-bold italic">
                            INSURANCE COMPANIES NOTORIOUSLY DENY LARGE CLAIMS
                            BECAUSE OF TECHNICALITIES YOU WERE UNAWARE OF.
                        </span>
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        That's why you need one of our licensed public adjusters
                        managing your claim. We fight for your rights and ensure
                        you get the maximum settlement you deserve.
                    </p>
                </div>

                <nav
                    className="w-full grid grid-cols-2 lg:grid-cols-5 gap-sm mt-2xl"
                    aria-label="Service categories"
                >
                    {services.map((service, i) => (
                        <Link
                            key={i}
                            className={cn(
                                "flex flex-col justify-center items-center lg:h-52 py-md bg-white rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105",
                                {
                                    "bg-primary text-white shadow-inner":
                                        service.id === activeTab,
                                }
                            )}
                            href={service.href ?? "#"}
                            aria-current={
                                service.id === activeTab ? "page" : undefined
                            }
                        >
                            <Image
                                src={service.imgSrc}
                                alt={service.altText}
                                width={96}
                                height={96}
                                className="w-24 h-24 mb-4"
                            />
                            <span
                                className={cn("text-sm font-medium", {
                                    "text-black": service.id === activeTab,
                                })}
                            >
                                {service.label}
                            </span>
                        </Link>
                    ))}
                    <div className="flex flex-col justify-center items-center lg:h-52 py-md bg-white rounded-xl hover:shadow-lg transition-all duration-300">
                        <PhoneNumberButton
                            label="And more..."
                            labelClassName="text-start text-md font-medium"
                        />
                    </div>
                </nav>
            </section>

            {isClient && (
                <section className="container mt-2xl">
                    <ServiceAreasMap serviceId={serviceId} />
                </section>
            )}

            {/* Guidelines Section */}
            <section className="container mt-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl">
                    <div className="flex flex-col gap-lg bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl lg:text-4xl uppercase font-black text-primary">
                            What to do
                        </h2>
                        <CheckList items={checklists.do} />
                    </div>
                    <div className="flex flex-col gap-lg bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl lg:text-4xl uppercase font-black text-red-500">
                            What not to do
                        </h2>
                        <CheckList items={checklists.dont} isCross />
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                className="container mt-2xl"
                aria-labelledby="testimonials-title"
            >
                <div className="bg-gray-50 rounded-xl p-2xl">
                    <h2
                        id="testimonials-title"
                        className="text-3xl font-bold text-center mb-8"
                    >
                        What Our Clients Say
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {testimonials.map((review, idx) => (
                            <article
                                key={idx}
                                className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <header className="flex items-center gap-4">
                                    <Image
                                        src={review.profileImage}
                                        alt={`${review.name}'s profile picture`}
                                        className="w-12 h-12 rounded-full object-cover"
                                        width={120}
                                        height={120}
                                    />
                                    <div>
                                        <h3 className="text-md font-semibold text-black">
                                            {review.name}
                                        </h3>
                                        <div className="flex items-center">
                                            <StarRating
                                                rating={review.rating}
                                            />
                                        </div>
                                    </div>
                                </header>
                                <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">
                                    {review.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Articles Section */}
            {relevantArticles.length > 0 && (
                <section
                    className="container mt-2xl"
                    aria-labelledby="related-articles-title"
                >
                    <h2
                        id="related-articles-title"
                        className="text-3xl font-bold text-center mb-8"
                    >
                        Related Articles
                    </h2>
                    <nav className="flex flex-col gap-4">
                        {relevantArticles.map((article, i) => (
                            <Link
                                key={i}
                                href={article.href}
                                className="flex flex-row items-start gap-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300"
                                scroll={false}
                            >
                                <Icon
                                    icon="solar:double-alt-arrow-right-linear"
                                    className="w-6 h-6 flex-shrink-0 text-primary"
                                    aria-hidden="true"
                                />
                                <span className="text-lg font-medium text-gray-800 hover:text-primary transition-colors">
                                    {article.title}
                                </span>
                            </Link>
                        ))}
                    </nav>
                </section>
            )}
        </article>
    );
}
