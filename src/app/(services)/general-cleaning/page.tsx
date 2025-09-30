import { allPosts } from "content-collections";
import { Link } from "next-view-transitions";
import branding from "~/branding";
import cn from "~/lib/cn";
import ServicePageHero from "~/templates/service-page-hero";

export default function CleaningService() {
    const posts = allPosts.filter(
        (post) => post.service === "general-cleaning"
    );

    return (
        <div>
            <ServicePageHero
                title="General Cleaning Services"
                description="Our general cleaning services provide comprehensive solutions for residential and commercial properties. We use eco-friendly products and professional techniques to ensure a thorough clean every time."
                image="/assets/images/services/general-cleaning.jpg"
                activeTab="general-cleaning"
                serviceId="general-cleaning"
                checklists={{
                    do: [
                        "Sweep, mop, and vacuum floors regularly for a dust-free environment.",
                        "Wipe down surfaces to remove dust, dirt, and bacteria.",
                        "Take out the trash daily to maintain cleanliness and hygiene.",
                        "Keep bathrooms and kitchens sanitized for a healthier space.",
                        "Organize and declutter regularly for a neat and tidy home.",
                        <p key="cleaning-contact">
                            <Link href={cn("tel:", branding.phoneNumber)}>
                                Contact {branding.name}{" "}
                            </Link>
                            today for a cleaner, fresher space.
                        </p>,
                    ],
                    dont: [
                        "Leave spills and stains unattended, as they can be harder to clean later.",
                        "Let dust and clutter build up, making cleaning more difficult.",
                        "Use harsh cleaning chemicals without proper ventilation.",
                        "Ignore neglected areas like under furniture and behind appliances.",
                        "Overlook daily tasks that help maintain a clean environment.",
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
                    href: `/general-cleaning/${post.slug}`,
                }))}
                // relevantArticles={[
                //     {
                //         title: "10 Easy Tips to Keep Your Home Clean Every Day",
                //         href: "#",
                //     },
                //     {
                //         title: "How Often Should You Clean Different Areas of Your Home?",
                //         href: "#",
                //     },
                //     {
                //         title: "The Benefits of Regular Home Cleaning for Your Health",
                //         href: "#",
                //     },
                //     {
                //         title: "How to Maintain a Clutter-Free Living Space",
                //         href: "#",
                //     },
                //     {
                //         title: "The Best Cleaning Routines for Busy Homeowners",
                //         href: "#",
                //     },
                //     {
                //         title: "Why a Clean Home Boosts Your Mood and Productivity",
                //         href: "#",
                //     },
                //     {
                //         title: "Common Household Cleaning Mistakes to Avoid",
                //         href: "#",
                //     },
                //     {
                //         title: "How to Keep Your Home Smelling Fresh Naturally",
                //         href: "#",
                //     },
                //     {
                //         title: "The Importance of Deep Cleaning Your Home Periodically",
                //         href: "#",
                //     },
                //     {
                //         title: "Quick and Simple Cleaning Hacks for Every Room",
                //         href: "#",
                //     },
                // ]}
            />
        </div>
    );
}
