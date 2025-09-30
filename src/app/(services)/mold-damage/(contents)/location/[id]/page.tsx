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
            serviceType="Mold"
            serviceTypeUppercase="Mold"
            heroImage="/assets/images/services/mold-damage.webp"
            heroImageAlt="Mold damage in {city}"
            serviceIcon="solar:bacteria-bold"
            primaryColor="text-green-700"
            secondaryColor="text-green-600"
            accentColor="border-green-500"
            primaryBgColor="bg-green-600"
            secondaryBgColor="bg-green-50"
            urgencyText="Time is crucial when dealing with mold damage. Mold can spread rapidly, causing health issues and further property damage. Insurance companies require timely reporting and proper documentation for mold claims."
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
        title: `Mold Damage Adjuster in ${area.city}`,
        description: `Looking for a mold damage adjuster in ${area.city}? Our local experts are here to help with your insurance claim. Contact us today!`,
    };
}
