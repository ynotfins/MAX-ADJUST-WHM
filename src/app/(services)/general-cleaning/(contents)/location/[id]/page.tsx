import React from "react";
import { AREAS } from "~/constants/areas";

import { Metadata } from "next";
import ServiceLocationPage from "~/components/service-location-page";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <ServiceLocationPage
            id={id}
            serviceType="Cleaning"
            serviceTypeUppercase="Cleaning"
            heroImage="/assets/images/services/general-cleaning.jpg"
            heroImageAlt="Professional cleaning in {city}"
            serviceIcon="solar:washing-machine-bold"
            primaryColor="text-teal-700"
            secondaryColor="text-teal-600"
            accentColor="border-teal-500"
            primaryBgColor="bg-teal-600"
            secondaryBgColor="bg-teal-50"
            urgencyText="Professional cleaning services after property damage can help prevent long-term issues and restore your home or business to its pre-loss condition. Quick action can prevent secondary damage like mold growth and persistent odors that develop over time."
        />
    );
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const area = AREAS.find((area) => area.id === id);
    if (!area) return {};
    return {
        title: `Professional Cleaning Services in ${area.city}`,
        description: `Looking for professional cleaning services in ${area.city}? Our local experts provide comprehensive cleaning solutions for homes and businesses. Contact us today!`,
    };
}
