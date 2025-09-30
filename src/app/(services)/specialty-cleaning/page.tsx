import { allPosts } from "content-collections";
import { Link } from "next-view-transitions";
import branding from "~/branding";
import cn from "~/lib/cn";
import ServicePageHero from "~/templates/service-page-hero";

export default function SpecialtyCleaningService() {
    const posts = allPosts.filter(
        (post) => post.service === "specialty-cleaning"
    );

    return (
        <div>
            <ServicePageHero
                title="Specialty Cleaning Services"
                description="Our specialty cleaning services address unique and challenging cleaning needs. From biohazard cleanup to post-construction cleaning, our trained specialists use specialized equipment and techniques to handle even the most difficult situations."
                image="/assets/images/services/specialty-cleaning.jpg"
                activeTab="specialty-cleaning"
                serviceId="specialty-cleaning"
                checklists={{
                    do: [
                        "Perform deep cleaning to remove hidden dirt, grime, and allergens.",
                        "Sanitize and disinfect high-touch surfaces for a germ-free space.",
                        "Use eco-friendly products for a safe and effective clean.",
                        "Provide post-renovation and post-construction cleanup.",
                        "Handle delicate materials with specialized care.",
                        <p key="cleaning-contact">
                            <Link href={cn("tel:", branding.phoneNumber)}>
                                Contact {branding.name}{" "}
                            </Link>
                            today for premium specialty cleaning services.
                        </p>,
                    ],
                    dont: [
                        "Ignore deep-seated stains and grime, which can damage surfaces.",
                        "Use incorrect cleaning agents that may harm delicate materials.",
                        "Neglect sanitization, especially in high-traffic areas.",
                        "Overlook hard-to-reach areas like vents and baseboards.",
                        "Skip professional deep cleaning, leading to long-term hygiene issues.",
                    ],
                }}
                testimonials={[
                    {
                        profileImage: "/avatars/samantha_l.jpg",
                        name: "Samantha L.",
                        rating: 5,
                        text: `After our home renovation, ${branding.name} transformed our space. Every corner was spotless and dust-free! Highly recommended.`,
                    },
                    {
                        profileImage: "/avatars/michael_t.jpg",
                        name: "Michael T.",
                        rating: 5,
                        text: `I hired ${branding.name} for a deep cleaning before moving in. They did an amazing job, making my home feel brand new!`,
                    },
                    {
                        profileImage: "/avatars/lisa_m.jpg",
                        name: "Lisa M.",
                        rating: 5,
                        text: `Their specialty cleaning service is truly outstanding. I use them regularly to keep my office space clean and sanitized!`,
                    },
                    {
                        profileImage: "/avatars/robert_k.jpg",
                        name: "Robert K.",
                        rating: 5,
                        text: `I needed a deep clean before hosting an event, and ${branding.name} exceeded my expectations. Worth every penny!`,
                    },
                ]}
                relevantArticles={posts.map((post) => ({
                    title: post.title,
                    href: `/specialty-cleaning/${post.slug}`,
                }))}
                // relevantArticles={[
                //     {
                //         title: "Why Deep Cleaning is Essential for Your Home and Office",
                //         href: "#",
                //     },
                //     {
                //         title: "The Benefits of Professional Disinfection Services",
                //         href: "#",
                //     },
                //     {
                //         title: "Post-Construction Cleaning: What You Need to Know",
                //         href: "#",
                //     },
                //     {
                //         title: "Eco-Friendly Cleaning Solutions for a Healthier Home",
                //         href: "#",
                //     },
                //     {
                //         title: "How to Keep Your Space Allergen-Free with Specialty Cleaning",
                //         href: "#",
                //     },
                //     {
                //         title: "The Importance of Cleaning Hard-to-Reach Areas",
                //         href: "#",
                //     },
                //     {
                //         title: "Signs Your Home or Office Needs a Deep Clean",
                //         href: "#",
                //     },
                //     {
                //         title: "The Best Practices for Cleaning Delicate Materials",
                //         href: "#",
                //     },
                //     {
                //         title: "How to Maintain Cleanliness After a Deep Cleaning Service",
                //         href: "#",
                //     },
                //     {
                //         title: "The Difference Between Regular and Specialty Cleaning Services",
                //         href: "#",
                //     },
                // ]}
            />
        </div>
    );
}
