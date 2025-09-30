import type { MetadataRoute } from "next";
import branding from "~/branding";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: branding.name,
        short_name: branding.name,
        description:
            "Max Adjust is a public adjuster company that can handle all the troubles that come with an insurance claim while ensuring you get the best possible coverage. You only pay after you get paid.",
        start_url: "/",
        icons: [
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
    };
}
