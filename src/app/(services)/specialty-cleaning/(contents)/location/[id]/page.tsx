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
            serviceType="Specialty Cleaning"
            serviceTypeUppercase="Specialty"
            heroImage="/assets/images/services/specialty-cleaning.jpg"
            heroImageAlt="Specialty cleaning in {city}"
            serviceIcon="solar:broom-bold"
            primaryColor="text-indigo-700"
            secondaryColor="text-indigo-600"
            accentColor="border-indigo-500"
            primaryBgColor="bg-indigo-600"
            secondaryBgColor="bg-indigo-50"
            urgencyText="Specialty cleaning situations often involve hazardous materials or sensitive environments that require immediate professional attention. Delays can lead to permanent damage, health risks, and higher remediation costs."
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
        title: `Specialty Cleaning Services in ${area.city}`,
        description: `Looking for specialty cleaning services in ${area.city}? Our local experts provide advanced cleaning solutions for difficult situations. Contact us today!`,
    };
}
