import { allPosts } from "content-collections";
import { Link } from "next-view-transitions";
import branding from "~/branding";
import cn from "~/lib/cn";
import ServicePageHero from "~/templates/service-page-hero";

export default function CommercialRestorationService() {
    const posts = allPosts.filter((post) => post.service === "commercial");

    return (
        <div>
            <ServicePageHero
                title="Expert Commercial Restoration Services"
                description={`At ${branding.name}, we specialize in commercial restoration services to bring your business space back to its best condition. Whether it's water damage, fire restoration, or mold remediation, our expert team ensures a safe and efficient recovery process.`}
                image="/assets/images/services/commercial-restoration.jpg"
                activeTab="commercial"
                serviceId="commercial"
                checklists={{
                    do: [
                        "Assess damage and create a customized restoration plan.",
                        "Remove water, mold, and hazardous materials safely.",
                        "Restore interiors, including walls, ceilings, and flooring.",
                        "Ensure proper air quality and odor removal.",
                        "Work efficiently to minimize business downtime.",
                        <p key="restoration-contact">
                            <Link href={cn("tel:", branding.phoneNumber)}>
                                Contact {branding.name}{" "}
                            </Link>
                            today for professional commercial restoration
                            services.
                        </p>,
                    ],
                    dont: [
                        "Ignore water or fire damage, as it can lead to long-term structural issues.",
                        "Attempt DIY restoration without proper equipment and expertise.",
                        "Neglect mold growth, which can impact indoor air quality.",
                        "Delay professional intervention, leading to higher repair costs.",
                        "Overlook safety protocols during the restoration process.",
                    ],
                }}
                testimonials={[
                    {
                        profileImage: "/avatars/karen_d.jpg",
                        name: "Karen D.",
                        rating: 5,
                        text: `Our office suffered severe water damage, but ${branding.name} restored it to perfection. Highly recommend their services!`,
                    },
                    {
                        profileImage: "/avatars/thomas_r.jpg",
                        name: "Thomas R.",
                        rating: 5,
                        text: `Thanks to ${branding.name}, we were able to get back to business quickly after fire damage. Professional and efficient team!`,
                    },
                    {
                        profileImage: "/avatars/linda_s.jpg",
                        name: "Linda S.",
                        rating: 5,
                        text: `They handled our mold remediation seamlessly. Our workspace is now safe and fresh. Highly reliable company!`,
                    },
                    {
                        profileImage: "/avatars/mark_j.jpg",
                        name: "Mark J.",
                        rating: 5,
                        text: `We had severe storm damage, and ${branding.name} took care of everything. The best restoration team in town!`,
                    },
                ]}
                // relevantArticles={[
                //     {
                //         title: "How to Handle Water Damage in Commercial Spaces",
                //         href: "#",
                //     },
                //     {
                //         title: "The Importance of Fire Damage Restoration for Businesses",
                //         href: "#",
                //     },
                //     {
                //         title: "Mold Remediation: Why It's Crucial for Your Workplace",
                //         href: "#",
                //     },
                //     {
                //         title: "Best Practices for Quick and Efficient Commercial Restoration",
                //         href: "#",
                //     },
                //     {
                //         title: "How to Prevent Structural Damage After a Disaster",
                //         href: "#",
                //     },
                //     {
                //         title: "Signs Your Business Needs Immediate Restoration Services",
                //         href: "#",
                //     },
                //     {
                //         title: "Choosing the Right Restoration Team for Your Business",
                //         href: "#",
                //     },
                //     {
                //         title: "The Long-Term Benefits of Professional Restoration Services",
                //         href: "#",
                //     },
                //     {
                //         title: "Emergency Response: What to Do After a Disaster Strikes",
                //         href: "#",
                //     },
                //     {
                //         title: "How to Maintain a Safe and Restored Commercial Space",
                //         href: "#",
                //     },
                // ]}
                relevantArticles={posts.map((post) => ({
                    title: post.title,
                    href: `/commercial/${post.slug}`,
                }))}
            />
        </div>
    );
}
