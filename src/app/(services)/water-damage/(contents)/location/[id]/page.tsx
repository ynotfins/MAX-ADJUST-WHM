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
            serviceType="Water"
            serviceTypeUppercase="Water"
            heroImage="/assets/images/services/water-damage.webp"
            heroImageAlt="Water damage in {city}"
            serviceIcon="solar:water-drops-bold"
            primaryColor="text-blue-700"
            secondaryColor="text-blue-600"
            accentColor="border-blue-500"
            primaryBgColor="bg-blue-600"
            secondaryBgColor="bg-blue-50"
            urgencyText="Time is critical after water damage. Quick action can prevent mold growth, structural damage, and other secondary issues. Insurance companies have strict deadlines for reporting water damage claims."
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
        title: `Water Damage Adjuster in ${area.city}`,
        description: `Looking for a water damage adjuster in ${area.city}? Our local experts are here to help with your insurance claim. Contact us today!`,
    };
}
