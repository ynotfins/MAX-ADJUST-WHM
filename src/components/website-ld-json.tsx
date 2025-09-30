import { WebSite, WithContext } from "schema-dts";
import branding from "~/branding";
import { url } from "~/lib/url";

export default function WebsiteLDJson() {
    const schemaData: WithContext<WebSite> = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: branding.name,
        url: url("/"),
        potentialAction: {
            "@type": "QuoteAction",
            target: url("/get-a-quote"),
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schemaData),
            }}
        />
    );
}
