import { Link } from "next-view-transitions";
import branding from "~/branding";
import Icon from "~/components/icon";

export default function Footer() {
    const slides = [
        {
            icon: "material-symbols:bolt-rounded",
            title: "Immediate Response",
            description:
                "If your home needs emergency cleaning, we're available 24/7 to respond to your call.",
        },
        {
            icon: "tabler:award-filled",
            title: "Certified Technicians",
            description:
                "We have 100+ certified cleaning products. All professionals have taken training in a variety of cleaning methods.",
        },
        {
            icon: "streamline:insurance-hand-solid",
            title: "We Work for You",
            description:
                "We will strategically navigate the insurance claims process and coordinate the necessary paperwork for a quicker, easier experience.",
        },
        {
            icon: "solar:dollar-minimalistic-linear",
            title: "Maximize Payment",
            description:
                "We maximize your payment from your insurance company, generally a substantial increase from what they would have offered you.",
        },
    ];

    return (
        <footer
            className="flex flex-col mt-2xl"
            role="contentinfo"
            aria-label="Site footer"
        >
            <section className="relative py-xl" aria-label="Company highlights">
                <div className="absolute inset-0 bg-black/60 z-[2]" />
                <div
                    role="img"
                    className="absolute inset-0 z-[1] bg-[url('/assets/images/fire-bg.avif')] bg-repeat bg-cover lg:bg-contain"
                    aria-label="Background image of fire damage"
                />
                <div className="container relative z-[10]">
                    <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
                        {slides.map((slide, index) => (
                            <article
                                key={index}
                                className="flex items-center gap-md"
                            >
                                <div className="flex flex-col justify-center">
                                    <Icon
                                        icon={slide.icon}
                                        className="text-white size-16"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-white font-semibold text-xl tracking-tighter">
                                        {slide.title}
                                    </h3>
                                    <p className="text-sm text-gray-200">
                                        {slide.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-4xl min-h-[30vh] w-full page-borders !py-24">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2xl">
                    <nav
                        className="flex flex-col gap-lg"
                        aria-label="Services navigation"
                    >
                        <h3 className="text-xl text-primary border-b-2 border-primary pb-2">
                            Services
                        </h3>

                        <ul className="flex flex-col gap-md text-gray-500 text-md">
                            <li>
                                <Link
                                    href="/water-damage"
                                    title="Water Damage Services"
                                >
                                    Water Damage
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/fire-damage"
                                    title="Fire Damage Services"
                                >
                                    Fire Damage
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/mold-damage"
                                    title="Mold Remediation Services"
                                >
                                    Mold Remediation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/storm-damage"
                                    title="Storm and Disaster Services"
                                >
                                    Storm/Disaster
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/construction"
                                    title="Construction Services"
                                >
                                    Construction
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/commercial"
                                    title="Commercial Services"
                                >
                                    Commercial Services
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex flex-col gap-lg">
                        <h3 className="text-xl text-primary border-b-2 border-primary pb-2">
                            Quick Contact
                        </h3>

                        <address className="text-gray-500 text-md not-italic">
                            <div>
                                Email:{" "}
                                <Link
                                    href={`mailto:${branding.email}`}
                                    className="text-primary"
                                    title="Send us an email"
                                >
                                    {branding.email}
                                </Link>
                            </div>
                            <div>
                                Phone:{" "}
                                <Link
                                    href={`tel:${branding.phoneNumber}`}
                                    className="text-primary"
                                    title="Call us"
                                >
                                    {branding.phoneNumber}
                                </Link>
                            </div>
                            <div>
                                Headquarter:{" "}
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: branding.primaryAddress,
                                    }}
                                />
                            </div>
                        </address>
                    </div>

                    <nav
                        className="flex flex-col gap-lg"
                        aria-label="Legal navigation"
                    >
                        <h3 className="text-xl text-primary border-b-2 border-primary pb-2">
                            Legal
                        </h3>

                        <ul className="flex flex-col gap-md text-gray-500 text-md">
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    title="Read our Privacy Policy"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms-conditions"
                                    title="Read our Terms & Conditions"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex flex-col gap-md">
                    <hr className="border-t border-gray-300 my-4" />

                    <div className="flex flex-row justify-between">
                        <p className="text-sm text-gray-500">
                            <small>
                                © {new Date().getFullYear()}{" "}
                                {branding.legalName.short}. License # 1664823.
                                All rights reserved.
                            </small>
                        </p>

                        <nav
                            className="flex flex-row gap-1"
                            aria-label="Social media links"
                        >
                            <Link href="#" aria-label="Visit our Facebook page">
                                <Icon
                                    icon="mdi:facebook"
                                    className="text-gray-500 size-6"
                                    aria-hidden="true"
                                />
                            </Link>
                            <Link href="#" aria-label="Visit our Twitter page">
                                <Icon
                                    icon="mdi:twitter"
                                    className="text-gray-500 size-6"
                                    aria-hidden="true"
                                />
                            </Link>
                            <Link
                                href="#"
                                aria-label="Visit our Instagram page"
                            >
                                <Icon
                                    icon="mdi:instagram"
                                    className="text-gray-500 size-6"
                                    aria-hidden="true"
                                />
                            </Link>
                        </nav>
                    </div>
                </div>
            </section>
        </footer>
    );
}
