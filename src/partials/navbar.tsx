"use client";

import Link from "next/link";
import Logo from "./logo";
import { services } from "~/constants/services";
import PhoneNumberButton from "~/components/phone-number-button";
import { useDisclosure } from "@heroui/use-disclosure";
import { Drawer, DrawerBody, DrawerContent } from "@heroui/drawer";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@heroui/dropdown";
import { ChevronDownIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const { isOpen, onOpenChange } = useDisclosure();
    const router = useRouter();

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={onOpenChange}
                className="md:hidden flex flex-col items-center justify-center text-gray-400 gap-0"
                aria-label="Toggle navigation menu"
            >
                <svg width="48" height="29" viewBox="0 0 48 29" fill="none">
                    {[27.7, 18.3, 9].map((y, i) => (
                        <path
                            key={i}
                            d={`M47.2 ${y}L23.7 ${y - 7.3}L0.3 ${y}`}
                            stroke="#291700"
                            strokeWidth="2"
                        />
                    ))}
                </svg>
                <span className="text-sm">Menu</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex items-center space-x-8">
                    <li>
                        <Link
                            href="/"
                            className="hover:text-primary transition-colors"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Dropdown>
                            <DropdownTrigger>
                                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                                    Services{" "}
                                    <ChevronDownIcon className="h-4 w-4" />
                                </button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Services navigation">
                                {services.map((service) => (
                                    <DropdownItem
                                        key={service.id || service.label}
                                        onPress={() =>
                                            router.push(service.href)
                                        }
                                        className="hover:text-primary transition-colors"
                                    >
                                        {service.label}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                    <li>
                        <Link
                            href="/blogs"
                            className="hover:text-primary transition-colors"
                        >
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="hover:text-primary transition-colors"
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Drawer */}
            <Drawer
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{ base: "w-[80%] sm:w-full z-[9999] md:hidden" }}
            >
                <DrawerContent>
                    <DrawerBody>
                        <div className="flex flex-col h-full justify-center gap-xl md:px-xl pb-md">
                            <Logo />
                            <div className="flex flex-col text-md">
                                <Link
                                    href="/"
                                    className="transition-all duration-300"
                                >
                                    Home
                                </Link>
                                {services.map((service) => (
                                    <Link
                                        key={service.id || service.label}
                                        href={service.href}
                                        className="transition-all duration-300"
                                    >
                                        {service.label}
                                    </Link>
                                ))}
                                <Link
                                    href="/blogs"
                                    className="transition-all duration-300"
                                >
                                    Blogs
                                </Link>
                            </div>
                            <PhoneNumberButton
                                className="mt-md"
                                labelClassName="text-start"
                            />
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
