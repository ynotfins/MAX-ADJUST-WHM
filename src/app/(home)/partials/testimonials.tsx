"use client";

import branding from "~/branding";
import { StarRating } from "~/components/star-rating";
import Image from "next/image";

export default function Testimonials() {
    const reviews = [
        {
            id: 1,
            name: "Johnathan D.",
            rating: 5,
            review: "The team went above and beyond to fight for my insurance claim. They handled every detail seriously, ensuring I received the maximum payout possible. They are exceptional public adjusters, standing out far beyond other public adjusters.",
            profileImage: "/avatars/johnathan_d.jpg",
            claim: "Fire Damage",
            increase: "+215%",
        },
        {
            id: 2,
            name: "Jane S.",
            rating: 5,
            review: `From start to finish, ${branding.name} turned a daunting process of insurance claim into something manageable. Every question I had was answered promptly, and I felt supported every step of the way.`,
            profileImage: "/avatars/jane_s.jpg",
            claim: "Water Damage",
            increase: "+180%",
        },
        {
            id: 3,
            name: "Michael R.",
            rating: 5,
            review: `Outstanding service! Their negotiation skills blew me away. I was initially underpaid, but thanks to ${branding.name} team, my insurance claim was re-evaluated, and I received the compensation I truly deserved.`,
            profileImage: "/avatars/michael_r.jpg",
            claim: "Storm Damage",
            increase: "+195%",
        },
        {
            id: 4,
            name: "Emily C.",
            rating: 5,
            review: "I was searching for public adjusters for my insurance claim and finally chose Max Adjust due to their expertise. I must say, I received far more compensation than I expected.",
            profileImage: "/avatars/emily_c.jpg",
            claim: "Mold Damage",
            increase: "+170%",
        },
    ];

    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="page-container">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Real Results from <span className="text-primary">Real Clients</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        See how we've helped property owners get the settlements they deserve
                    </p>
                </div>
            </div>

            {/* Scrolling Testimonials */}
            <div className="relative">
                <div className="flex space-x-6 animate-infinite-scroll">
                    {[...reviews, ...reviews].map((review, index) => (
                        <div
                            key={`${review.id}-${index}`}
                            className="card min-w-[400px] max-w-[400px]"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={review.profileImage}
                                        alt={review.name}
                                        className="w-14 h-14 rounded-full object-cover"
                                        width={56}
                                        height={56}
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {review.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {review.claim}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-secondary">
                                        {review.increase}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Settlement Increase
                                    </p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="mb-4">
                                <StarRating rating={review.rating} />
                            </div>

                            {/* Review */}
                            <p className="text-gray-600 leading-relaxed">
                                "{review.review}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="page-container mt-16">
                <div className="text-center">
                    <p className="text-lg text-gray-600 mb-6">
                        Join thousands of satisfied clients who got the settlements they deserve
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/testimonials"
                            className="btn-secondary"
                        >
                            Read More Reviews
                        </a>
                        <a
                            href="/contact"
                            className="btn-primary"
                        >
                            Start Your Claim
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}