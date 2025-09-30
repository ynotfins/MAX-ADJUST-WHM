import { Link } from "next-view-transitions";
import Image from "next/image";
import branding from "~/branding";

export default function Steps() {
    const steps = [
        {
            number: "01",
            title: "Free Claim Evaluation",
            description: "Call us for a comprehensive assessment of your property damage and insurance policy coverage.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
        },
        {
            number: "02",
            title: "Professional Documentation",
            description: "Our licensed adjusters submit all necessary paperwork and provide detailed damage estimates to your insurance company.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            number: "03",
            title: "Expert Negotiation",
            description: "We negotiate directly with your insurance company to maximize your settlement, leveraging our decades of experience.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
        },
        {
            number: "04",
            title: "Settlement Finalization",
            description: "We secure the best possible settlement and present you with the full replacement value of your covered belongings.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="section-padding bg-gray-50">
            <div className="page-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold">
                            We Get You <span className="text-secondary">180% More</span> Than Insurance Companies Offer
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Our adjusters consistently secure settlements that are close to double 
                            what insurance carriers initially offer. We fight for every dollar you deserve.
                        </p>

                        {/* Steps */}
                        <div className="mt-12 space-y-8">
                            {steps.map((step, idx) => (
                                <div key={idx} className="flex gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-baseline gap-3 mb-2">
                                            <span className="text-sm font-semibold text-gray-400">
                                                {step.number}
                                            </span>
                                            <h3 className="text-xl font-semibold">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-12">
                            <Link
                                href={`tel:${branding.phoneNumber}`}
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                Call Now: {branding.phoneNumber}
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/images/handshake-video-poster.webp"
                                alt="Professional Insurance Adjusters"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                            
                            {/* Overlay Card */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="card-glass">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">
                                                Average Settlement Increase
                                            </p>
                                            <p className="text-3xl font-bold text-primary">
                                                +180%
                                            </p>
                                        </div>
                                        <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                                            <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}