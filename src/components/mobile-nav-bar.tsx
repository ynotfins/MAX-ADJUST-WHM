"use client";

import { Home, FileText, MessageSquare, Phone } from "lucide-react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import cn from "~/lib/cn";

const navItems = [
    {
        label: "Home",
        href: "/",
        icon: Home,
    },
    {
        label: "Services",
        href: "/services",
        icon: FileText,
    },
    {
        label: "Contact",
        href: "/contact",
        icon: MessageSquare,
    },
    {
        label: "Call",
        href: "tel:8889995740",
        icon: Phone,
        isExternal: true,
    },
];

export default function MobileNavBar() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-50">
            <div className="grid grid-cols-4 h-16">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    if (item.isExternal) {
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                className="flex flex-col items-center justify-center gap-1 text-gray-600"
                            >
                                <Icon className="w-5 h-5" />
                                <span className="text-xs">{item.label}</span>
                            </a>
                        );
                    }

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center gap-1 transition-colors",
                                isActive
                                    ? "text-primary"
                                    : "text-gray-600 hover:text-primary"
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="text-xs font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
