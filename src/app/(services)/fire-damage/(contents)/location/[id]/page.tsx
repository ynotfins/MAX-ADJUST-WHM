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
            serviceType="Fire"
            serviceTypeUppercase="Fire"
            heroImage="/assets/images/services/fire-damage.jpg"
            heroImageAlt="Fire damage in {city}"
            serviceIcon="solar:fire-bold"
            primaryColor="text-red-700"
            secondaryColor="text-red-600"
            accentColor="border-red-500"
            primaryBgColor="bg-red-600"
            secondaryBgColor="bg-red-50"
            urgencyText="Time is critical after fire damage. Insurance companies have strict deadlines, and evidence can deteriorate quickly. The sooner you act, the better your chances of a successful claim."
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
        title: `Fire Damage Adjuster in ${area.city}`,
        description: `Looking for a fire damage adjuster in ${area.city}? Our local experts are here to help with your insurance claim. Contact us today!`,
    };
}
