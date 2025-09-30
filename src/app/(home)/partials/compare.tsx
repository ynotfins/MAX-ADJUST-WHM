"use client";

import { Check, X } from "lucide-react";
import Icon from "~/components/icon";

const comparison = [
    {
        feature: "Policy Analysis",
        maxAdjust: "Comprehensive review to maximize coverage and identify all claimable damages",
        insurance: "Basic documentation focused on minimizing payout",
        icon: "solar:document-text-linear",
    },
    {
        feature: "Representation",
        maxAdjust: "Works exclusively for you to get maximum settlement",
        insurance: "Works for insurance company to minimize their costs",
        icon: "solar:users-group-two-rounded-linear",
    },
    {
        feature: "Settlement Results",
        maxAdjust: "Average 180% higher settlements than initial offers",
        insurance: "Typically offers lowest possible settlement",
        icon: "solar:dollar-linear",
    },
    {
        feature: "Experience",
        maxAdjust: "Decades of experience fighting for homeowners",
        insurance: "Experienced in protecting insurance company profits",
        icon: "material-symbols-light:award-star-outline",
    },
    {
        feature: "Cost",
        maxAdjust: "No upfront fees - paid only from settlement proceeds",
        insurance: "Paid by insurance company to save them money",
        icon: "solar:wallet-linear",
    },
];

const benefits = [
    { text: "Licensed & Bonded Professionals", hasIt: { maxAdjust: true, insurance: true } },
    { text: "Works in Your Best Interest", hasIt: { maxAdjust: true, insurance: false } },
    { text: "Maximizes Your Settlement", hasIt: { maxAdjust: true, insurance: false } },
    { text: "Handles All Paperwork", hasIt: { maxAdjust: true, insurance: false } },
    { text: "No Upfront Costs", hasIt: { maxAdjust: true, insurance: false } },
    { text: "24/7 Emergency Response", hasIt: { maxAdjust: true, insurance: false } },
];

export default function Compare() {
    return (
        <section className="section-padding bg-gray-50">
            <div className="page-container">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Why Choose <span className="text-primary">MAX ADJUST</span> Over Going It Alone?
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        We handle the entire insurance claims process and negotiate a fair settlement 
                        while you focus on getting your life back to normal.
                    </p>
                </div>

                {/* Comparison Cards */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* MAX ADJUST Card */}
                    <div className="card bg-white relative overflow-hidden border-2 border-primary/20">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                        <div className="relative">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-primary">With MAX ADJUST</h3>
                                    <p className="text-sm text-gray-500 mt-1">Public Adjusters Working for You</p>
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <Check className="w-8 h-8 text-primary" />
                                </div>
                            </div>

                            <div className="space-y-6">
                                {comparison.map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                                                <Icon icon={item.icon} className="w-5 h-5 text-gray-700" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900 mb-1">
                                                {item.feature}
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                {item.maxAdjust}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Insurance Company Card */}
                    <div className="card bg-gray-50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 rounded-full blur-3xl" />
                        <div className="relative">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-700">Self-Filed Claims</h3>
                                    <p className="text-sm text-gray-500 mt-1">Insurance Company Adjusters</p>
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                                    <X className="w-8 h-8 text-secondary" />
                                </div>
                            </div>

                            <div className="space-y-6">
                                {comparison.map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                                                <Icon icon={item.icon} className="w-5 h-5 text-gray-400" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-700 mb-1">
                                                {item.feature}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                {item.insurance}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits Comparison */}
                <div className="card bg-white max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-8">
                        Quick Comparison
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h4 className="font-semibold text-gray-900 mb-4">Features</h4>
                            <div className="space-y-3">
                                {benefits.map((benefit, idx) => (
                                    <p key={idx} className="text-sm text-gray-600">
                                        {benefit.text}
                                    </p>
                                ))}
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <h4 className="font-semibold text-primary mb-4">MAX ADJUST</h4>
                            <div className="space-y-3">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex justify-center">
                                        {benefit.hasIt.maxAdjust ? (
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                                <Check className="w-4 h-4 text-primary" />
                                            </div>
                                        ) : (
                                            <X className="w-5 h-5 text-gray-300" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <h4 className="font-semibold text-gray-500 mb-4">Insurance Company</h4>
                            <div className="space-y-3">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex justify-center">
                                        {benefit.hasIt.insurance ? (
                                            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                                                <Check className="w-4 h-4 text-gray-500" />
                                            </div>
                                        ) : (
                                            <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                                                <X className="w-4 h-4 text-secondary" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-lg text-gray-600 mb-8">
                            We are your unwavering advocates, working only for you
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="btn-secondary">
                                Get Your Free Evaluation
                            </a>
                            <a href="tel:8889995740" className="btn-outline">
                                Call (888) 999-5740
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}