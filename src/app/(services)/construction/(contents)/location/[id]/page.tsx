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
            serviceType="Construction"
            serviceTypeUppercase="Construction"
            heroImage="/assets/images/services/construction.jpg"
            heroImageAlt="Construction project in {city}"
            serviceIcon="solar:hammer-bold"
            primaryColor="text-yellow-700"
            secondaryColor="text-yellow-600"
            accentColor="border-yellow-500"
            primaryBgColor="bg-yellow-600"
            secondaryBgColor="bg-yellow-50"
            urgencyText="Construction projects often face delays and unexpected challenges. When disputes or damage occurs, acting quickly is essential to manage costs and maintain schedules. Professional claims handling ensures your construction project can proceed without unnecessary financial setbacks."
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
        title: `Construction Insurance Adjuster in ${area.city}`,
        description: `Looking for a construction insurance adjuster in ${area.city}? Our local experts are here to help with your construction project insurance claim. Contact us today!`,
    };
}
