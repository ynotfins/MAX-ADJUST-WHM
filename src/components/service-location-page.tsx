import React from "react";
import { AREAS } from "~/constants/areas";
import { notFound } from "next/navigation";
import { Button } from "@heroui/button";
import Link from "next/link";
import branding from "~/branding";
import Image from "next/image";
import Icon from "~/components/icon";
import PhoneNumberButton from "~/components/phone-number-button";

export interface ServiceLocationProps {
    id: string;
    serviceType: string;
    serviceTypeUppercase: string;
    heroImage: string;
    heroImageAlt: string;
    serviceIcon: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    primaryBgColor: string;
    secondaryBgColor: string;
    urgencyText: string;
}

export default function ServiceLocationPage({
    id,
    serviceType,
    serviceTypeUppercase,
    heroImage,
    heroImageAlt,
    serviceIcon,
    primaryColor,
    secondaryColor,
    accentColor,
    primaryBgColor,
    secondaryBgColor,
    urgencyText,
}: ServiceLocationProps) {
    const area = AREAS.find((area) => area.id === id);

    if (!area) {
        return notFound();
    }

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section
                className="relative w-full h-[50vh] overflow-hidden"
                aria-labelledby="location-title"
            >
                <div className="absolute inset-0">
                    <Image
                        src={heroImage}
                        alt={heroImageAlt.replace("{city}", area.city)}
                        width={1200}
                        height={800}
                        className="w-full h-full object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>

                <div className="relative z-10 flex flex-col gap-md items-center justify-center h-full text-center text-white px-4 container mx-auto">
                    <h1
                        id="location-title"
                        className="text-white text-2xl lg:text-4xl font-bold"
                    >
                        {serviceTypeUppercase} Damage Public Adjuster in{" "}
                        {area.city}
                    </h1>
                    <p className="text-gray-200 text-md lg:text-lg max-w-3xl">
                        Expert {serviceType.toLowerCase()} damage insurance
                        claims assistance from local professionals who know{" "}
                        {area.city} inside and out
                    </p>
                    <div className="p-sm backdrop-blur-md rounded-xl bg-white/10 mt-4">
                        <PhoneNumberButton
                            className="text-white"
                            labelClassName="text-white text-sm text-start"
                        />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                                <h2
                                    className={`text-2xl font-bold mb-6 ${primaryColor} flex items-center`}
                                >
                                    <Icon
                                        icon={serviceIcon}
                                        className="h-6 w-6 mr-2"
                                    />
                                    {serviceTypeUppercase} Damage Insurance
                                    Claim Experts
                                </h2>

                                <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                                    If you are facing the aftermath of{" "}
                                    {serviceType.toLowerCase()} damage, our{" "}
                                    <span className="font-semibold">
                                        {serviceType.toLowerCase()} damage
                                        public adjusters in {area.city}
                                    </span>{" "}
                                    are here to help you with your{" "}
                                    <span className="font-semibold">
                                        {serviceType.toLowerCase()} damage
                                        insurance claims
                                    </span>
                                    . We specialize in representing
                                    policyholders—not insurance
                                    companies—ensuring you get the settlement
                                    you deserve for your{" "}
                                    <span className="font-semibold">
                                        {serviceType.toLowerCase()} damage claim
                                        in {area.city}
                                    </span>
                                    .
                                </p>

                                <div
                                    className={`mb-8 border-l-4 ${accentColor} pl-6 py-2`}
                                >
                                    <h3
                                        className={`text-xl font-semibold mb-3 ${secondaryColor}`}
                                    >
                                        What is a {serviceTypeUppercase} Damage
                                        Public Adjuster?
                                    </h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        A {serviceType.toLowerCase()} damage
                                        public adjuster is a licensed
                                        professional who works exclusively for
                                        you, the policyholder, to manage and
                                        maximize your{" "}
                                        <span className="font-semibold">
                                            {serviceType.toLowerCase()} damage
                                            insurance claim
                                        </span>
                                        . We handle all aspects of the claims
                                        process, from documentation and
                                        negotiation to final settlement, so you
                                        can focus on recovery.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div
                                        className={`${secondaryBgColor} rounded-lg p-6`}
                                    >
                                        <h3
                                            className={`text-lg font-semibold mb-4 ${primaryColor}`}
                                        >
                                            Our Services
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <Icon
                                                    icon="solar:check-circle-bold"
                                                    className={`h-5 w-5 ${primaryColor} mr-2 mt-1 flex-shrink-0`}
                                                />
                                                <span>
                                                    Expert assessment of{" "}
                                                    {serviceType.toLowerCase()}{" "}
                                                    {serviceType.toLowerCase() ===
                                                    "water"
                                                        ? "and flood"
                                                        : "and smoke"}{" "}
                                                    damage
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <Icon
                                                    icon="solar:check-circle-bold"
                                                    className={`h-5 w-5 ${primaryColor} mr-2 mt-1 flex-shrink-0`}
                                                />
                                                <span>
                                                    Comprehensive documentation
                                                    for your{" "}
                                                    <span className="font-semibold">
                                                        {serviceType.toLowerCase()}{" "}
                                                        damage claim
                                                    </span>
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <Icon
                                                    icon="solar:check-circle-bold"
                                                    className={`h-5 w-5 ${primaryColor} mr-2 mt-1 flex-shrink-0`}
                                                />
                                                <span>
                                                    Direct negotiation with your
                                                    insurance company
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <Icon
                                                    icon="solar:check-circle-bold"
                                                    className={`h-5 w-5 ${primaryColor} mr-2 mt-1 flex-shrink-0`}
                                                />
                                                <span>
                                                    Maximizing your{" "}
                                                    <span className="font-semibold">
                                                        {serviceType.toLowerCase()}{" "}
                                                        damage insurance claim
                                                    </span>{" "}
                                                    payout
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <h3
                                            className={`text-lg font-semibold mb-4 ${primaryColor}`}
                                        >
                                            Why Choose Us in {area.city}
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <Icon
                                                    icon="solar:check-circle-bold"
                                                    className={`h-5 w-5 ${primaryColor} mr-2 mt-1 flex-shrink-0`}
                                                />
                                                <span>
                                                    Local knowledge of{" "}
                                                    {area.city} insurance
                                                    policies and procedures
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <Icon
                                                    icon="solar:check-circle-bold"
                                                    className={`h-5 w-5 ${primaryColor} mr-2 mt-1 flex-shrink-0`}
                                                />
                                                <span>
                                                    Proven results in{" "}
                                                    <span className="font-semibold">
                                                        {serviceType.toLowerCase()}{" "}
                                                        damage claims
                                                    </span>{" "}
                                                    for homes and businesses
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <Icon
                                                    icon="solar:check-circle-bold"
                                                    className={`h-5 w-5 ${primaryColor} mr-2 mt-1 flex-shrink-0`}
                                                />
                                                <span>
                                                    Personalized service and
                                                    transparent communication
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <Icon
                                                    icon="solar:check-circle-bold"
                                                    className={`h-5 w-5 ${primaryColor} mr-2 mt-1 flex-shrink-0`}
                                                />
                                                <span>
                                                    No recovery, no fee—pay only
                                                    when you get paid
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                                <h3
                                    className={`text-xl font-semibold mb-4 ${primaryColor} flex items-center`}
                                >
                                    <Icon
                                        icon="solar:phone-calling-bold"
                                        className="h-5 w-5 mr-2"
                                    />
                                    Get a Free Consultation
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Don't let the insurance company dictate your
                                    recovery. Our{" "}
                                    <span className="font-semibold">
                                        {serviceType.toLowerCase()} damage
                                        public adjusters in {area.city}
                                    </span>{" "}
                                    are ready to fight for your best interests.
                                </p>
                                <Button
                                    as={Link}
                                    color={
                                        primaryColor.includes("blue")
                                            ? "primary"
                                            : "danger"
                                    }
                                    className={`w-full ${primaryBgColor} py-3 text-lg mt-2`}
                                    href={`tel:${branding.phoneNumber}`}
                                >
                                    Call {branding.phoneNumber}
                                </Button>
                            </div>

                            <div
                                className={`${secondaryBgColor} rounded-xl shadow-md p-6`}
                            >
                                <h3
                                    className={`text-xl font-semibold mb-4 ${primaryColor} flex items-center`}
                                >
                                    <Icon
                                        icon="solar:clock-circle-bold"
                                        className="h-5 w-5 mr-2"
                                    />
                                    Act Quickly After {serviceTypeUppercase}{" "}
                                    Damage
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        {urgencyText}
                                    </p>
                                    <div className="p-4 bg-white rounded-lg">
                                        <p
                                            className={`font-semibold ${primaryColor}`}
                                        >
                                            Contact our {area.city}{" "}
                                            {serviceType.toLowerCase()} damage
                                            experts today for:
                                        </p>
                                        <ul className="mt-2 space-y-2">
                                            <li className="flex items-center">
                                                <Icon
                                                    icon="solar:star-bold"
                                                    className="h-4 w-4 text-yellow-500 mr-2"
                                                />
                                                <span>Free claim review</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Icon
                                                    icon="solar:star-bold"
                                                    className="h-4 w-4 text-yellow-500 mr-2"
                                                />
                                                <span>
                                                    Expert documentation
                                                    assistance
                                                </span>
                                            </li>
                                            <li className="flex items-center">
                                                <Icon
                                                    icon="solar:star-bold"
                                                    className="h-4 w-4 text-yellow-500 mr-2"
                                                />
                                                <span>
                                                    Maximum settlement
                                                    negotiation
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={`${primaryBgColor} py-12 -mb-16`}>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Get Help With Your {serviceTypeUppercase} Damage
                        Insurance Claim in {area.city}
                    </h2>
                    <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
                        Don't navigate the complex insurance process alone. Our{" "}
                        {area.city} {serviceType.toLowerCase()} damage experts
                        are ready to help you secure the maximum settlement for
                        your claim.
                    </p>
                    <Button
                        as={Link}
                        color="default"
                        className={`text-${primaryColor.replace(
                            "text-",
                            ""
                        )} bg-white hover:bg-gray-100 px-8 py-3 text-lg font-medium`}
                        href={`tel:${branding.phoneNumber}`}
                    >
                        Call us now at {branding.phoneNumber}
                    </Button>
                </div>
            </section>
        </main>
    );
}
