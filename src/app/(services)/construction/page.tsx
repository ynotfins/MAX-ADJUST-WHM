import cn from "~/lib/cn";
import { Link } from "next-view-transitions";
import branding from "~/branding";
import ServicePageHero from "~/templates/service-page-hero";
import { allPosts } from "content-collections";

export default function Construction() {
    const posts = allPosts.filter((post) => post.service === "construction");

    return (
        <div>
            <ServicePageHero
                title="Maximize Construction Insurance Claims"
                description={`Don't let construction damage claims leave you stressed. At ${branding.name}, our licensed public adjusters specialize in construction insurance claims. We handle the complexities so you can receive the maximum settlement you deserve.`}
                image="/assets/images/services/construction.jpg"
                activeTab="construction"
                serviceId="construction"
                checklists={{
                    do: [
                        "Document all construction-related damage with photos and videos immediately.",
                        "File your insurance claim promptly and accurately.",
                        "Hire a public adjuster to assess your policy and maximize your claim payout.",
                        "Mitigate further damage by securing the affected areas and taking preventive measures.",
                        "Keep all receipts and records of any temporary repairs or expenses.",
                        <p key="12345">
                            <Link href={cn("tel:", branding.phoneNumber)}>
                                Contact {branding.name}{" "}
                            </Link>
                            for expert guidance and support throughout the
                            claims process.
                        </p>,
                    ],
                    dont: [
                        "Delay reporting the construction damage to your insurance company.",
                        "Dispose of damaged materials or items without proper documentation.",
                        "Attempt repairs before consulting your insurance adjuster or public adjuster.",
                        "Sign any agreements or accept settlements without fully understanding your policy.",
                        "Overlook hidden damages like structural issues or water intrusion.",
                        "Rely solely on your insurance adjuster without seeking independent advice.",
                    ],
                }}
                testimonials={[
                    {
                        profileImage: "/avatars/jonathan_r.jpg",
                        name: "Jonathan R.",
                        rating: 5,
                        text: `After dealing with construction damage, ${branding.name} made the entire insurance claim process hassle-free. Their expertise ensured I got the settlement I deserved, covering all my repair costs. Highly recommended!`,
                    },
                    {
                        profileImage: "/avatars/emily_h.jpg",
                        name: "Emily H.",
                        rating: 5,
                        text: `I was overwhelmed with my construction damage claim, but ${branding.name} stepped in and handled everything. Their professionalism and dedication got me a much better payout than I anticipated. Thank you so much!`,
                    },
                    {
                        profileImage: "/avatars/michael_d.jpg",
                        name: "Michael D.",
                        rating: 5,
                        text: `The team at ${branding.name} is fantastic! They worked tirelessly to ensure my construction damage claim was valued correctly and helped me get a fair settlement. They are true professionals!`,
                    },
                    {
                        profileImage: "/avatars/olivia_c.jpg",
                        name: "Olivia C.",
                        rating: 5,
                        text: `When a storm caused major damage to my construction site, I was lost. ${branding.name} made the insurance process stress-free and got me a settlement that covered everything. I'm so grateful for their help!`,
                    },
                ]}
                // relevantArticles={[
                //     {
                //         title: "What is a Construction Insurance Claim and Why It Matters",
                //         href: "#",
                //     },
                //     {
                //         title: "How to File an Insurance Claim for Construction Successfully",
                //         href: "#",
                //     },
                //     {
                //         title: "Understanding the Role of a Public Adjuster in Construction Insurance Claims",
                //         href: "#",
                //     },
                //     {
                //         title: "How to Maximize Your Construction Insurance Claim Payout",
                //         href: "#",
                //     },
                //     {
                //         title: "10 Ways to Avoid Being Underpaid for Construction Insurance Claims",
                //         href: "#",
                //     },
                //     {
                //         title: "What Construction Insurance Covers - Common Exclusions You Should Know",
                //         href: "#",
                //     },
                //     {
                //         title: "Immediate Steps to Take After Discovering Construction in Your Home",
                //         href: "#",
                //     },
                //     {
                //         title: "How Long You Have to File a Construction Claim",
                //         href: "#",
                //     },
                //     {
                //         title: "Actual Cash Value vs. Replacement Cost in Construction Policies",
                //         href: "#",
                //     },
                //     {
                //         title: "Public Adjuster vs. Insurance Adjuster - Who to Trust for Construction Claims",
                //         href: "#",
                //     },
                //     {
                //         title: "5 Red Flags You Need a Public Adjuster for Construction Claims",
                //         href: "#",
                //     },
                //     {
                //         title: "How Much Does a Public Adjuster Cost - Breaking Down Fees",
                //         href: "#",
                //     },
                //     {
                //         title: "Success Stories of Public Adjusters Winning 6-Figure Construction Payouts",
                //         href: "#",
                //     },
                //     {
                //         title: "How to Negotiate Fair Compensation for Construction with Insurers",
                //         href: "#",
                //     },
                //     {
                //         title: "10 Common Mistakes to Avoid When Filing a Construction Claim",
                //         href: "#",
                //     },
                //     {
                //         title: "What to Do If Your Construction Claim is Denied - An Appeal Guide",
                //         href: "#",
                //     },
                //     {
                //         title: "Can You Sue Your Insurance Company Over a Construction Claim - Legal Insights",
                //         href: "#",
                //     },
                //     {
                //         title: "How Home Maintenance Boosts Your Construction Insurance Claim",
                //         href: "#",
                //     },
                //     {
                //         title: "Documenting Construction Like a Pro - Tools and Checklists",
                //         href: "#",
                //     },
                //     {
                //         title: "Preventing Mold After Construction - What Insurers Expect",
                //         href: "#",
                //     },
                //     {
                //         title: "Commercial vs. Residential Construction Claims - Coverage Differences",
                //         href: "#",
                //     },
                //     {
                //         title: "Slow Leaks vs. Burst Pipes - How Insurance Handles Construction Types",
                //         href: "#",
                //     },
                //     {
                //         title: "State-Specific Construction Laws and Their Impact on Your Claim",
                //         href: "#",
                //     },
                //     {
                //         title: "Using Drones and Apps for Construction Documentation - Tech Tips",
                //         href: "#",
                //     },
                //     {
                //         title: "How Climate Change is Reshaping Construction Insurance Policies",
                //         href: "#",
                //     },
                // ]}
                relevantArticles={posts.map((post) => ({
                    title: post.title,
                    href: `/construction/${post.slug}`,
                }))}
            />
        </div>
    );
}
