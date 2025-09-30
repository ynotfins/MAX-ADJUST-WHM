import { Link } from "next-view-transitions";
import Image from "next/image";

export default function Logo() {
    return (
        <Link
            href="/"
            aria-label="Branding Section"
            aria-labelledby="Branding Section"
            aria-description="Branding of the website"
        >
            <Image
                src="/assets/logo/Max Adjust-Logo.png"
                className="w-auto h-10 lg:h-12"
                alt="Max Adjust Logo"
                width={200}
                height={60}
                priority
            />
        </Link>
    );
}
