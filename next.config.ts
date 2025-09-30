import createMDX from "@next/mdx";
import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({});

export default withContentCollections(withMDX(nextConfig));
