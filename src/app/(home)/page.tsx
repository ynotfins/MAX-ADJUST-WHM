import HeroSlider from "./partials/hero-slider";
import Services from "./partials/services";
import Steps from "./partials/steps";
import Testimonials from "./partials/testimonials";
import Compare from "./partials/compare";
import { Metadata } from "next";
import { ProfessionalService, WithContext } from "schema-dts";
import branding from "~/branding";
import { url } from "~/lib/url";
import services from "~/constants/services";
import PopupModal from "~/components/onload-popup";

export const metadata: Metadata = {
    title: "Important to call us before you call your insurance company",
    description:
        "We specialize in maximizing your insurance claim to get you paid more, while protecting you from being denied!",
};

export default function Home() {
    const schemaData: WithContext<ProfessionalService> = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: branding.name,
        url: url("/"),
        description: `${branding.name} is a trusted public adjuster specialising in insurance claims for fire, storm, and property damage. We handle the claims process, negotiate with insurers, and fight for the maximum payout you deserve.`,
        email: branding.email,
        telephone: branding.phoneNumber,
        address: {
            "@type": "PostalAddress",
            streetAddress: "23 Sheraton Ln",
            addressLocality: "Rumson",
            addressRegion: "NJ",
            postalCode: "07760",
            addressCountry: "US",
        },
        serviceArea: {
            "@type": "Country",
            name: "United States",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Our Services",
            itemListElement: services.map((service) => ({
                "@type": "OfferCatalog",
                name: service.label,
                itemListElement: [
                    {
                        "@type": "Offer",
                        name: service.label,
                        url: url(service.href),
                    },
                ],
            })),
        },
    };

    return (
        <div>
            <PopupModal />
            <HeroSlider />
            <Services />
            <Steps />
            <Testimonials />
            <Compare />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaData),
                }}
            />
        </div>
    );
}
