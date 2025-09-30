import cn from "~/lib/cn";
import branding from "~/branding";
import ServicePageHero from "~/templates/service-page-hero";
import { Link } from "next-view-transitions";
import { Metadata } from "next";
import { allPosts } from "content-collections";
import { Service, WithContext } from "schema-dts";
import { url } from "~/lib/url";

export const metadata: Metadata = {
    title: "Fire damage Insurance Claims & Restoration",
    description:
        "Dealing with fire damage? Double your Fire Damage Insurance Claims with our specialized public adjusters. Pay us only after you get paid.",
};

export default function FireDamage() {
    const posts = allPosts.filter((post) => post.service === "fire-damage");
    const schemaData: WithContext<Service> = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Fire Damage Insurance Claims",
        url: url("/fire-damage"),
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
                title="Maximize Fire Damage Insurance Claims"
                description={`Don't let stubborn insurers underpay or deny your fire damage claim. At ${branding.name}, our licensed public adjusters specialize in fire damage insurance claims. Turning your frustration into maximum compensation which you deserve.`}
                image="/assets/images/services/fire-damage.jpg"
                activeTab="fire-damage"
                serviceId="fire-damage"
                checklists={{
                    do: [
                        "Document all fire, smoke, and structural damage with photos/videos immediately.",
                        "Contact your insurance company to file a fire damage insurance claim—or hire a public adjuster first for expert help.",
                        "Hire licensed public adjusters to review your policy, negotiate with insurers, and maximize your payout.",
                        "Prevent further damage (board windows, tarp roofs) to avoid claim disputes.",
                        "Save receipts for temporary repairs, fire cleanup, and lodging costs.",
                        <p key="12345">
                            <Link href={cn("tel:", branding.phoneNumber)}>
                                Call {branding.name}'s fire damage experts
                            </Link>{" "}
                            for a FREE claim review and 24/7 support.
                        </p>,
                    ],
                    dont: [
                        "Delay reporting fire damage—evidence fades fast!",
                        "Discard damaged items before a public adjuster inspects them.",
                        "Start permanent repairs without insurer/public adjuster approval.",
                        "Accept settlements before public adjusters assess hidden damage (soot, electrical issues, weakened structures).",
                        "Trust insurer adjusters blindly—they work for the company, not YOU.",
                        "Ignore policy deadlines or undervalued fire damage insurance claim offers.",
                    ],
                }}
                testimonials={[
                    {
                        profileImage: "/avatars/johnathan_d.jpg",
                        name: "Johnathan D.",
                        rating: 5,
                        text: `After our house fire, ${branding.name}'s public adjusters turned disaster into hope. They fought for every penny—even uncovered hidden smoke damage our insurer ignored. Thanks to them, our fire damage insurance claim paid for FULL repairs. Lifesavers!`,
                    },
                    {
                        profileImage: "/avatars/jane_s.jpg",
                        name: "Jane S.",
                        rating: 5,
                        text: `I was drowning in fire damage paperwork until ${branding.name} stepped in. Their public adjusters documented structural damage, smoke residue, and even lost belongings we forgot to list. Our settlement was DOUBLE the insurer's first offer!`,
                    },
                    {
                        profileImage: "/avatars/michael_r.jpg",
                        name: "Michael R.",
                        rating: 5,
                        text: `The insurance company blamed "pre-existing issues" after our fire. ${branding.name} shut that down fast! Their fire damage experts proved it was all new damage—and got us a 40% higher payout. Worth every second!`,
                    },
                    {
                        profileImage: "/avatars/emily_c.jpg",
                        name: "Emily C.",
                        rating: 5,
                        text: `${branding.name} didn't just handle our fire damage claim—they rebuilt our peace of mind. Their public adjusters caught hidden electrical damage the insurer skipped. We'd have lost $25k without them!`,
                    },
                ]}
                // relevantArticles={[
                //     {
                //         title: "What is a Fire Damage Insurance Claim and Why It Matters",
                //         href: "#",
                //     },
                //     {
                //         title: "How to File an Insurance Claim for Fire Damage Successfully",
                //         href: "#",
                //     },
                //     {
                //         title: "Understanding the Role of a Public Adjuster in Fire Damage Insurance Claims",
                //         href: "#",
                //     },
                //     {
                //         title: "How to Maximize Your Fire Damage Insurance Claim Payout",
                //         href: "#",
                //     },
                //     {
                //         title: "10 Ways to Avoid Being Underpaid for Fire Damage Insurance Claims",
                //         href: "#",
                //     },
                //     {
                //         title: "What Fire Damage Insurance Covers - Common Exclusions You Should Know",
                //         href: "#",
                //     },
                //     {
                //         title: "Immediate Steps to Take After Discovering Fire Damage in Your Home",
                //         href: "#",
                //     },
                //     {
                //         title: "How Long You Have to File a Fire Damage Claim",
                //         href: "#",
                //     },
                //     {
                //         title: "Actual Cash Value vs. Replacement Cost in Fire Damage Policies",
                //         href: "#",
                //     },
                //     {
                //         title: "Public Adjuster vs. Insurance Adjuster - Who to Trust for Fire Damage Claims",
                //         href: "#",
                //     },
                //     {
                //         title: "5 Red Flags You Need a Public Adjuster for Fire Damage Claims",
                //         href: "#",
                //     },
                //     {
                //         title: "How Much Does a Public Adjuster Cost - Breaking Down Fees",
                //         href: "#",
                //     },
                //     {
                //         title: "Success Stories of Public Adjusters Winning 6-Figure Fire Damage Payouts",
                //         href: "#",
                //     },
                //     {
                //         title: "How to Negotiate Fair Compensation for Fire Damage with Insurers",
                //         href: "#",
                //     },
                //     {
                //         title: "10 Common Mistakes to Avoid When Filing a Fire Damage Claim",
                //         href: "#",
                //     },
                //     {
                //         title: "What to Do If Your Fire Damage Claim is Denied - An Appeal Guide",
                //         href: "#",
                //     },
                //     {
                //         title: "Can You Sue Your Insurance Company Over a Fire Damage Claim - Legal Insights",
                //         href: "#",
                //     },
                //     {
                //         title: "How Home Maintenance Boosts Your Fire Damage Insurance Claim",
                //         href: "#",
                //     },
                //     {
                //         title: "Documenting Fire Damage Like a Pro - Tools and Checklists",
                //         href: "#",
                //     },
                //     {
                //         title: "Preventing Mold After Fire Damage - What Insurers Expect",
                //         href: "#",
                //     },
                //     {
                //         title: "Commercial vs. Residential Fire Damage Claims - Coverage Differences",
                //         href: "#",
                //     },
                //     {
                //         title: "Slow Leaks vs. Burst Pipes - How Insurance Handles Fire Damage Types",
                //         href: "#",
                //     },
                //     {
                //         title: "State-Specific Fire Damage Laws and Their Impact on Your Claim",
                //         href: "#",
                //     },
                //     {
                //         title: "Using Drones and Apps for Fire Damage Documentation - Tech Tips",
                //         href: "#",
                //     },
                //     {
                //         title: "How Climate Change is Reshaping Fire Damage Insurance Policies",
                //         href: "#",
                //     },
                // ]}

                relevantArticles={posts.map((post) => ({
                    title: post.title,
                    href: `/fire-damage/${post.slug}`,
                }))}
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
