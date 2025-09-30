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
            serviceType="Commercial"
            serviceTypeUppercase="Commercial"
            heroImage="/assets/images/services/commercial-restoration.jpg"
            heroImageAlt="Commercial property in {city}"
            serviceIcon="solar:buildings-bold"
            primaryColor="text-gray-700"
            secondaryColor="text-gray-600"
            accentColor="border-gray-500"
            primaryBgColor="bg-gray-700"
            secondaryBgColor="bg-gray-100"
            urgencyText="Commercial property claims require fast action. Business interruption losses can grow quickly, and insurance policies for commercial properties often have complex terms and deadlines. Professional representation helps ensure your business recovers financially."
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
        title: `Commercial Property Adjuster in ${area.city}`,
        description: `Looking for a commercial property adjuster in ${area.city}? Our local experts are here to help with your business insurance claim. Contact us today!`,
    };
}
