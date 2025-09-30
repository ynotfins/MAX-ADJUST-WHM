import React from "react";
import { allPosts } from "content-collections";
import { notFound } from "next/navigation";
import BlogPage from "~/templates/blog-page";
import { MDXContent } from "@content-collections/mdx/react";
import { Metadata } from "next";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = allPosts.filter(
        (post) => post.service === "specialty-cleaning" && post.slug === slug
    )[0];
    const relevantPosts = allPosts
        .filter(
            (post) =>
                post.service === "specialty-cleaning" && post.slug !== slug
        )
        .slice(0, 3);

    if (!post) {
        return notFound();
    }

    return (
        <BlogPage
            title={post.title}
            thumbnail={post.thumbnail}
            publishedAt={post.publishedAt}
            updatedAt={post.updatedAt}
            author={post.author}
            summary={post.summary}
            relevantPosts={relevantPosts}
        >
            <MDXContent code={post.mdx} />
        </BlogPage>
    );
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = allPosts.filter(
        (post) => post.service === "specialty-cleaning" && post.slug === slug
    )[0];

    return {
        title: post.title,
        description: post.summary,
    };
}
