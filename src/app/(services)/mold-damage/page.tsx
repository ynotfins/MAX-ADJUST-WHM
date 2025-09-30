import { allPosts } from "content-collections";
import { Metadata } from "next";
import { Link } from "next-view-transitions";
import branding from "~/branding";
import cn from "~/lib/cn";
import ServicePageHero from "~/templates/service-page-hero";

export const metadata: Metadata = {
    title: "Double your Mold Damage Insurance Claims",
    description:
        "Max Adjust will maximize your mold damage insurance claims and restore your property quickly and effectively. Pay us only after you get paid.",
};

export default function MoldDamage() {
    const posts = allPosts.filter((post) => post.service === "mold-damage");

    return (
        <div>
            <ServicePageHero
                title="Maximize Mold Damage Insurance Claims"
                description={`Don't let Mold Damage claims overwhelm you. At ${branding.name}, our licensed public adjusters specialize in Mold Damage insurance claims. We turn your stress into maximum compensation, ensuring you get the settlement you deserve.`}
                image="/assets/images/services/mold-damage.webp"
                activeTab="mold-damage"
                serviceId="mold-damage"
                checklists={{
                    do: [
                        "Document all visible Mold Damage with photos and videos as soon as possible.",
                        "Contact your insurance company to report the Mold Damage immediately.",
                        "Hire a public adjuster to review your policy and maximize your claim potential.",
                        "Address the source of mold, such as leaks, and mitigate further damage promptly.",
                        "Keep detailed records of any expenses, including temporary repairs and mitigation efforts.",
                        <p key="12345">
                            <Link href={cn("tel:", branding.phoneNumber)}>
                                Consult {branding.name}{" "}
                            </Link>
                            for expert guidance and support throughout the
                            claims process.
                        </p>,
                    ],
                    dont: [
                        "Delay reporting the Mold Damage to your insurance company.",
                        "Dispose of damaged items before documenting them properly.",
                        "Attempt to clean or repair the mold damage without consulting your insurance or adjuster.",
                        "Sign settlement agreements without fully understanding the policy coverage.",
                        "Overlook hidden mold or structural issues that could worsen over time.",
                        "Rely solely on your insurance company's adjuster without an independent assessment.",
                    ],
                }}
                testimonials={[
                    {
                        profileImage: "/avatars/jessica_r.jpg",
                        name: "Jessica R.",
                        rating: 5,
                        text: `I love how fresh and tidy my home feels after every visit from ${branding.name}. They are efficient, friendly, and always do an amazing job!`,
                    },
                    {
                        profileImage: "/avatars/david_w.jpg",
                        name: "David W.",
                        rating: 5,
                        text: `Best cleaning service I've ever used! ${branding.name} keeps my apartment spotless, and their team is always professional and on time.`,
                    },
                    {
                        profileImage: "/avatars/emily_k.jpg",
                        name: "Emily K.",
                        rating: 5,
                        text: `I booked a one-time cleaning, and I was so impressed that I signed up for regular service. ${branding.name} makes keeping my home clean effortless!`,
                    },
                    {
                        profileImage: "/avatars/james_p.jpg",
                        name: "James P.",
                        rating: 5,
                        text: `I highly recommend ${branding.name} for anyone who wants a hassle-free cleaning service. My house has never looked better!`,
                    },
                ]}
                relevantArticles={posts.map((post) => ({
                    title: post.title,
                    href: `/mold-damage/${post.slug}`,
                }))}
                // relevantArticles={[
                //     {
                //         title: "What is a Mold Damage Insurance Claim and Why It Matters",
                //         href: "#",
                //     },
                //     {
                //         title: "How to File an Insurance Claim for Mold Damage Successfully",
                //         href: "#",
                //     },
                //     {
                //         title: "Understanding the Role of a Public Adjuster in Mold Damage Insurance Claims",
                //         href: "#",
                //     },
                //     {
                //         title: "How to Maximize Your Mold Damage Insurance Claim Payout",
                //         href: "#",
                //     },
                //     {
                //         title: "10 Ways to Avoid Being Underpaid for Mold Damage Insurance Claims",
                //         href: "#",
                //     },
                //     {
                //         title: "What Mold Damage Insurance Covers - Common Exclusions You Should Know",
                //         href: "#",
                //     },
                //     {
                //         title: "Immediate Steps to Take After Discovering Mold Damage in Your Home",
                //         href: "#",
                //     },
                //     {
                //         title: "How Long You Have to File a Mold Damage Claim",
                //         href: "#",
                //     },
                //     {
                //         title: "Actual Cash Value vs. Replacement Cost in Mold Damage Policies",
                //         href: "#",
                //     },
                //     {
                //         title: "Public Adjuster vs. Insurance Adjuster - Who to Trust for Mold Damage Claims",
                //         href: "#",
                //     },
                //     {
                //         title: "5 Red Flags You Need a Public Adjuster for Mold Damage Claims",
                //         href: "#",
                //     },
                //     {
                //         title: "How Much Does a Public Adjuster Cost - Breaking Down Fees",
                //         href: "#",
                //     },
                //     {
                //         title: "Success Stories of Public Adjusters Winning 6-Figure Mold Damage Payouts",
                //         href: "#",
                //     },
                //     {
                //         title: "How to Negotiate Fair Compensation for Mold Damage with Insurers",
                //         href: "#",
                //     },
                //     {
                //         title: "10 Common Mistakes to Avoid When Filing a Mold Damage Claim",
                //         href: "#",
                //     },
                //     {
                //         title: "What to Do If Your Mold Damage Claim is Denied - An Appeal Guide",
                //         href: "#",
                //     },
                //     {
                //         title: "Can You Sue Your Insurance Company Over a Mold Damage Claim - Legal Insights",
                //         href: "#",
                //     },
                //     {
                //         title: "How Home Maintenance Boosts Your Mold Damage Insurance Claim",
                //         href: "#",
                //     },
                //     {
                //         title: "Documenting Mold Damage Like a Pro - Tools and Checklists",
                //         href: "#",
                //     },
                //     {
                //         title: "Preventing Mold After Mold Damage - What Insurers Expect",
                //         href: "#",
                //     },
                //     {
                //         title: "Commercial vs. Residential Mold Damage Claims - Coverage Differences",
                //         href: "#",
                //     },
                //     {
                //         title: "Slow Leaks vs. Burst Pipes - How Insurance Handles Mold Damage Types",
                //         href: "#",
                //     },
                //     {
                //         title: "State-Specific Mold Damage Laws and Their Impact on Your Claim",
                //         href: "#",
                //     },
                //     {
                //         title: "Using Drones and Apps for Mold Damage Documentation - Tech Tips",
                //         href: "#",
                //     },
                //     {
                //         title: "How Climate Change is Reshaping Mold Damage Insurance Policies",
                //         href: "#",
                //     },
                // ]}
            />
        </div>
    );
}
