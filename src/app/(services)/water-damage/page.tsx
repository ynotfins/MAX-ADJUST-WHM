import cn from "~/lib/cn";
import branding from "~/branding";
import ServicePageHero from "~/templates/service-page-hero";
import { Link } from "next-view-transitions";
import { Metadata } from "next";
import { Service, WithContext } from "schema-dts";
import { url } from "~/lib/url";

export const metadata: Metadata = {
    title: "Water Damage Insurance Claim & Restoration",
    description:
        "Maximize your water damage insurance claim up to 180% with specialized public adjusters, and enjoy hassle-free water damage restoration services handled by experts. Pay us only after you get paid.",
};

export default function WaterDamage() {
    const schemaData: WithContext<Service> = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Water Damage Insurance Claims",
        url: url("/water-damage"),
        serviceType: "Insurance Claims Assistance",
        provider: {
            "@type": "ProfessionalService",
            name: branding.name,
            url: url("/"),
        },
    };

    return (
        <div>
            <ServicePageHero
                title="Maximize Water Damage Insurance Claims"
                description={`Don't let stubborn insurers underpay or deny your water damage claim. At ${branding.name}, our licensed public adjusters specialize in water damage insurance claims. Turning your frustration into maximum compensation which you deserve.`}
                image="/assets/images/services/water-damage.webp"
                activeTab="water-damage"
                serviceId="water-damage"
                checklists={{
                    do: [
                        "Document all visible water damage with photos and videos immediately.",
                        "Contact your insurance company and file a claim promptly.",
                        "Hire a public adjuster to review your policy and maximize your claim.",
                        "Mitigate further damage by addressing leaks and drying out affected areas.",
                        "Keep receipts and records of any temporary repairs or mitigation efforts.",
                        <p key="12345">
                            <Link href={cn("tel:", branding.phoneNumber)}>
                                Consult {branding.name}{" "}
                            </Link>
                            for professional guidance and support throughout the
                            claims process.
                        </p>,
                    ],
                    dont: [
                        "Delay reporting the water damage to your insurance company.",
                        "Throw away damaged items before documenting them.",
                        "Attempt repairs without consulting your insurance or public adjuster.",
                        "Sign any agreements or accept settlements without understanding the full policy details.",
                        "Ignore hidden damages such as mold or structural issues.",
                        "Rely solely on your insurance adjuster without an independent assessment.",
                    ],
                }}
                testimonials={[
                    {
                        profileImage: "/avatars/alexander_p.jpg",
                        name: "Alexander P.",
                        rating: 5,
                        text: `Dealing with water damage was a nightmare, but ${branding.name} turned it into a smooth and stress-free process. Their expertise and commitment ensured I received a settlement that truly covered my damages. Highly recommended!`,
                    },
                    {
                        profileImage: "/avatars/sophia_l.jpg",
                        name: "Sophia L.",
                        rating: 5,
                        text: `I had no idea where to start with my water damage claim, but ${branding.name} stepped in and took care of everything. They were professional, thorough, and helped me secure a much better payout than I expected. Thank you!`,
                    },
                    {
                        profileImage: "/avatars/ryan_t.jpg",
                        name: "Ryan T.",
                        rating: 5,
                        text: `The team at ${branding.name} is simply amazing! They fought for me when my water damage claim was undervalued and ensured I got every penny I deserved. Their service is worth every bit of praise.`,
                    },
                    {
                        profileImage: "/avatars/mia_k.jpg",
                        name: "Mia K.",
                        rating: 5,
                        text: `I was overwhelmed by the insurance process after a pipe burst in my home, but ${branding.name} made it so much easier. They handled everything with professionalism and got me a settlement that covered all my repairs. Can't thank them enough!`,
                    },
                ]}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaData),
                }}
            />
        </div>
    );
}
