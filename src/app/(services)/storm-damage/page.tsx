import cn from "~/lib/cn";
import branding from "~/branding";
import ServicePageHero from "~/templates/service-page-hero";
import { Link } from "next-view-transitions";
import { Metadata } from "next";
import { allPosts } from "content-collections";

export const metadata: Metadata = {
    title: "Storm Damage Insurance Claims & Restoration",
    description:
        "Our team specializes in storm damage insurance claims & restoration, guiding you through the process to ensure you receive the compensation you deserve—quickly and efficiently.",
};

export default function StormDamage() {
    const posts = allPosts.filter((post) => post.service === "storm-damage");

    return (
        <div>
            <ServicePageHero
                title="Maximize Storm Damage Insurance Claims"
                description={`Don't let storm damage claims blow you away. At ${branding.name}, our licensed public adjusters specialize in storm damage insurance claims. We handle the hard work so you can focus on recovery, ensuring you receive the maximum compensation you deserve.`}
                image="/assets/images/services/storm-damage.jpg"
                activeTab="storm-damage"
                serviceId="storm-damage"
                checklists={{
                    do: [
                        "Document all visible storm damage with photos and videos immediately.",
                        "Contact your insurance company and file a claim promptly.",
                        "Hire a public adjuster to review your policy and maximize your claim.",
                        "Mitigate further damage by covering broken windows or damaged roofs.",
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
                        "Delay reporting the storm damage to your insurance company.",
                        "Throw away damaged items before documenting them.",
                        "Attempt repairs without consulting your insurance or public adjuster.",
                        "Sign any agreements or accept settlements without understanding the full policy details.",
                        "Ignore hidden damages such as roof leaks or structural issues.",
                        "Rely solely on your insurance adjuster without an independent assessment.",
                    ],
                }}
                testimonials={[
                    {
                        profileImage: "/avatars/ethan_w.jpg",
                        name: "Ethan W.",
                        rating: 5,
                        text: `Dealing with storm damage was a nightmare, but ${branding.name} turned it into a smooth and stress-free process. Their expertise and commitment ensured I received a settlement that truly covered my damages. Highly recommended!`,
                    },
                    {
                        profileImage: "/avatars/olivia_m2.jpg", // Olivia M. already used once
                        name: "Olivia M.",
                        rating: 5,
                        text: `I had no idea where to start with my storm damage claim, but ${branding.name} stepped in and took care of everything. They were professional, thorough, and helped me secure a much better payout than I expected. Thank you!`,
                    },
                    {
                        profileImage: "/avatars/liam_k.jpg",
                        name: "Liam K.",
                        rating: 5,
                        text: `The team at ${branding.name} is simply amazing! They fought for me when my storm damage claim was undervalued and ensured I got every penny I deserved. Their service is worth every bit of praise.`,
                    },
                    {
                        profileImage: "/avatars/emma_j.jpg",
                        name: "Emma J.",
                        rating: 5,
                        text: `I was overwhelmed by the insurance process after a severe storm damaged my home, but ${branding.name} made it so much easier. They handled everything with professionalism and got me a settlement that covered all my repairs. Can't thank them enough!`,
                    },
                ]}
                relevantArticles={posts.map((post) => ({
                    title: post.title,
                    href: `/storm-damage/${post.slug}`,
                }))}

                // relevantArticles={[
                //     {
                //         title: "What is a Water Damage Insurance Claim and Why It Matters",
                //         href: "#",
                //     },
                //     {
                //         title: "How to File an Insurance Claim for Water Damage Successfully",
                //         href: "#",
                //     },
                //     {
                //         title: "Understanding the Role of a Public Adjuster in Water Damage Insurance Claims",
                //         href: "#",
                //     },
                //     {
                //         title: "How to Maximize Your Water Damage Insurance Claim Payout",
                //         href: "#",
                //     },
                //     {
                //         title: "10 Ways to Avoid Being Underpaid for Water Damage Insurance Claims",
                //         href: "#",
                //     },
                //     {
                //         title: "What Water Damage Insurance Covers - Common Exclusions You Should Know",
                //         href: "#",
                //     },
                //     {
                //         title: "Immediate Steps to Take After Discovering Water Damage in Your Home",
                //         href: "#",
                //     },
                //     {
                //         title: "How Long You Have to File a Water Damage Claim",
                //         href: "#",
                //     },
                //     {
                //         title: "Actual Cash Value vs. Replacement Cost in Water Damage Policies",
                //         href: "#",
                //     },
                //     {
                //         title: "Public Adjuster vs. Insurance Adjuster - Who to Trust for Water Damage Claims",
                //         href: "#",
                //     },
                //     {
                //         title: "5 Red Flags You Need a Public Adjuster for Water Damage Claims",
                //         href: "#",
                //     },
                //     {
                //         title: "How Much Does a Public Adjuster Cost - Breaking Down Fees",
                //         href: "#",
                //     },
                //     {
                //         title: "Success Stories of Public Adjusters Winning 6-Figure Water Damage Payouts",
                //         href: "#",
                //     },
                //     {
                //         title: "How to Negotiate Fair Compensation for Water Damage with Insurers",
                //         href: "#",
                //     },
                //     {
                //         title: "10 Common Mistakes to Avoid When Filing a Water Damage Claim",
                //         href: "#",
                //     },
                //     {
                //         title: "What to Do If Your Water Damage Claim is Denied - An Appeal Guide",
                //         href: "#",
                //     },
                //     {
                //         title: "Can You Sue Your Insurance Company Over a Water Damage Claim - Legal Insights",
                //         href: "#",
                //     },
                //     {
                //         title: "How Home Maintenance Boosts Your Water Damage Insurance Claim",
                //         href: "#",
                //     },
                //     {
                //         title: "Documenting Water Damage Like a Pro - Tools and Checklists",
                //         href: "#",
                //     },
                //     {
                //         title: "Preventing Mold After Water Damage - What Insurers Expect",
                //         href: "#",
                //     },
                //     {
                //         title: "Commercial vs. Residential Water Damage Claims - Coverage Differences",
                //         href: "#",
                //     },
                //     {
                //         title: "Slow Leaks vs. Burst Pipes - How Insurance Handles Water Damage Types",
                //         href: "#",
                //     },
                //     {
                //         title: "State-Specific Water Damage Laws and Their Impact on Your Claim",
                //         href: "#",
                //     },
                //     {
                //         title: "Using Drones and Apps for Water Damage Documentation - Tech Tips",
                //         href: "#",
                //     },
                //     {
                //         title: "How Climate Change is Reshaping Water Damage Insurance Policies",
                //         href: "#",
                //     },
                // ]}
            />
        </div>
    );
}
