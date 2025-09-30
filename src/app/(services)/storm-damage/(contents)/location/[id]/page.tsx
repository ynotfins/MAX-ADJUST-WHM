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
            serviceType="Storm"
            serviceTypeUppercase="Storm"
            heroImage="/assets/images/services/storm-damage.jpg"
            heroImageAlt="Storm damage in {city}"
            serviceIcon="solar:thunder-linear"
            primaryColor="text-purple-700"
            secondaryColor="text-purple-600"
            accentColor="border-purple-500"
            primaryBgColor="bg-purple-600"
            secondaryBgColor="bg-purple-50"
            urgencyText="After a storm, it's critical to act quickly to protect your property from further damage. Storm damage can worsen over time, and insurance companies often have strict deadlines for reporting claims. Documenting damage immediately can significantly impact your settlement."
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
        title: `Storm Damage Adjuster in ${area.city}`,
        description: `Looking for a storm damage adjuster in ${area.city}? Our local experts are here to help with your insurance claim. Contact us today!`,
    };
}
