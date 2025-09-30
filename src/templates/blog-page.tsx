"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { Post } from "content-collections";
import { Link } from "next-view-transitions";
import branding from "~/branding";
import { Button } from "@heroui/button";

export type BlogPageProps = {
    thumbnail: string;
    title: React.ReactNode;
    summary: string;
    publishedAt: Date;
    updatedAt?: Date | null;
    author: string;
    children: React.ReactNode;
    relevantPosts: Post[];
};

type TOCItem = {
    id: string;
    text: string;
    level: number;
};

export default function BlogPage({
    thumbnail,
    title,
    summary,
    publishedAt,
    updatedAt,
    author,
    children,
    relevantPosts,
}: BlogPageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [tocItems, setTocItems] = useState<TOCItem[]>([]);

    useEffect(() => {
        if (containerRef.current) {
            const headers = Array.from(
                containerRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6")
            );
            const items: TOCItem[] = headers.map((header, index) => {
                const text = header.textContent || "";
                // If the header doesn't have an id, generate one.
                if (!header.id) {
                    const generatedId =
                        text
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/[^\w-]/g, "") || `header-${index}`;
                    header.id = generatedId;
                }
                return {
                    id: header.id,
                    text,
                    level: Number(header.tagName.substring(1)),
                };
            });
            setTocItems(items);
        }
    }, [children]);

    const handleTOCClick = (id: string) => {
        if (typeof window === "undefined") return;

        const element = document.getElementById(id);
        if (element) {
            const headerHeight = 120; // Adjust this value to match your header height in pixels
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <main>
            <article itemScope itemType="http://schema.org/BlogPosting">
                <meta
                    itemProp="dateModified"
                    content={(updatedAt ?? publishedAt).toISOString()}
                />

                <meta
                    itemProp="datePublished"
                    content={publishedAt.toISOString()}
                />

                <header className="relative w-full h-[80vh] lg:h-[60vh] overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src={thumbnail}
                            alt={`Featured image for ${title}`}
                            width={1200}
                            height={800}
                            className="w-full h-full object-cover"
                            itemProp="image"
                        />
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                    </div>

                    <div className="relative z-10 flex flex-col gap-md items-center justify-center h-full text-center dark px-4">
                        <h1
                            className="text-2xl lg:text-4xl font-bold"
                            itemProp="headline"
                        >
                            {title}
                        </h1>
                        <p
                            className="!text-gray-300 text-sm lg:text-lg max-w-4xl"
                            itemProp="description"
                        >
                            {summary}
                        </p>

                        <div className="flex flex-row items-center gap-4 h-4">
                            <time
                                dateTime={publishedAt.toISOString()}
                                className="flex items-center !text-white"
                            >
                                Published at{" "}
                                {publishedAt.toLocaleDateString("en-US", {
                                    month: "2-digit",
                                    day: "2-digit",
                                    year: "numeric",
                                })}
                                {publishedAt.getHours() !== 0 ||
                                publishedAt.getMinutes() !== 0
                                    ? `  ${publishedAt.toLocaleTimeString(
                                          "en-US",
                                          {
                                              hour: "2-digit",
                                              minute: "2-digit",
                                              hour12: true,
                                          }
                                      )}`
                                    : ""}
                            </time>

                            {updatedAt && (
                                <>
                                    <div
                                        className="w-px h-4 bg-gray-300"
                                        aria-hidden="true"
                                    />

                                    <time
                                        dateTime={updatedAt.toISOString()}
                                        className="flex items-center !text-white"
                                    >
                                        Last Modified at{" "}
                                        {updatedAt.toLocaleDateString("en-US", {
                                            month: "2-digit",
                                            day: "2-digit",
                                            year: "numeric",
                                        })}
                                        {updatedAt.getHours() !== 0 ||
                                        updatedAt.getMinutes() !== 0
                                            ? `  ${updatedAt.toLocaleTimeString(
                                                  "en-US",
                                                  {
                                                      hour: "2-digit",
                                                      minute: "2-digit",
                                                      hour12: true,
                                                  }
                                              )}`
                                            : ""}
                                    </time>
                                </>
                            )}

                            <div
                                className="w-px h-4 bg-gray-300"
                                aria-hidden="true"
                            />
                            <p>
                                Published By{" "}
                                <span
                                    itemProp="author"
                                    itemScope
                                    itemType="http://schema.org/Person"
                                >
                                    <span itemProp="name">{author}</span>
                                </span>
                            </p>
                        </div>
                    </div>
                </header>

                <div className="container flex flex-row justify-center py-2xl gap-xl content-container">
                    <div className="grid grid-cols-[60%_30%] gap-xl">
                        <div
                            className="prose max-w-none"
                            ref={containerRef}
                            itemProp="articleBody"
                        >
                            {children}
                        </div>

                        <aside>
                            <nav
                                className="flex flex-col gap-sm bg-white rounded-xl p-md"
                                aria-label="Table of contents"
                            >
                                <h2 className="text-2xl font-bold">
                                    Table of contents
                                </h2>
                                {tocItems.length > 0 ? (
                                    <ul className="space-y-sm pl-4">
                                        {tocItems.map((item) => (
                                            <li
                                                key={item.id}
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    handleTOCClick(item.id)
                                                }
                                            >
                                                {item.text}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-500">
                                        No headers found.
                                    </p>
                                )}
                            </nav>

                            <div className="flex flex-col items-center gap-sm bg-white rounded-xl p-md mt-md">
                                <h2 className="text-2xl font-bold">
                                    How Can We Help?
                                </h2>
                                <Button
                                    color="danger"
                                    className="w-full bg-red-600"
                                    as={Link}
                                    href={`tel:${branding.phoneNumber}`}
                                >
                                    Call us now at {branding.phoneNumber}
                                </Button>
                            </div>
                        </aside>
                    </div>
                </div>

                <section className="container flex flex-col gap-lg justify-center">
                    <h2 className="text-2xl font-bold">Recent Posts</h2>
                    <div className=" grid grid-cols-4 pb-2xl space-x-md">
                        {relevantPosts.map((post, i) => (
                            <article
                                key={i}
                                itemScope
                                itemType="http://schema.org/BlogPosting"
                            >
                                <Link
                                    href={post.slug}
                                    className="flex flex-col bg-white rounded-xl overflow-hidden"
                                >
                                    <figure className="flex items-center">
                                        <Image
                                            src={post.thumbnail}
                                            alt={post.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-52 object-cover"
                                            itemProp="image"
                                        />
                                    </figure>

                                    <div className="flex flex-col gap-1 p-md">
                                        <h3
                                            className="font-bold text-md line-clamp-4"
                                            itemProp="headline"
                                        >
                                            {post.title}
                                        </h3>
                                        <p
                                            className="text-gray-400 text-sm"
                                            itemProp="description"
                                        >
                                            {post.summary}
                                        </p>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}
