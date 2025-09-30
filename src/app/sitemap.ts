import { allPosts } from "content-collections";
import type { MetadataRoute } from "next";
import services from "~/constants/services";
import { AREAS } from "~/constants/areas";
import { url } from "~/lib/url";

type SitemapItem = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
    const serviceUrls: SitemapItem[] = services.map((service) => ({
        url: url(service.href),
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
    }));

    // Generate location pages for each service
    const locationUrls: SitemapItem[] = services.flatMap((service) =>
        AREAS.map((area) => ({
            url: url(`${service.href}/location/${area.id}`),
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        }))
    );

    const posts: SitemapItem[] = allPosts.map((post) => ({
        url: url(`/${post.service}/${post.slug}`),
        lastModified: post.updatedAt ? post.updatedAt : post.publishedAt,
        changeFrequency: "weekly",
        priority: 0.5,
    }));

    return [
        {
            url: url("/"),
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        ...serviceUrls,
        ...locationUrls,
        ...posts,
        {
            url: url("/contact"),
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.6,
        },
    ];
}
