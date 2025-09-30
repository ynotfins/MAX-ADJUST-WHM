import "./globals.css";
import cn from "~/lib/cn";
import Header from "~/partials/header";
import Footer from "~/partials/footer";
import branding from "~/branding";
import { HeroUIProvider } from "@heroui/system";
import type { Metadata } from "next";
import WebsiteLDJson from "~/components/website-ld-json";
import { Inter } from "next/font/google";
import { StickyHeader } from "~/partials/sticky-header";
import { IntercomProvider } from "~/components/intercom-provider";
import { Bounce, ToastContainer } from "react-toastify";
import { ViewTransitions } from "next-view-transitions";
import { GoogleAnalytics } from "@next/third-parties/google";
import ServiceWorkerRegistration from "~/components/service-worker";
import MobileNavBar from "~/components/mobile-nav-bar";
import InstallPrompt from "~/components/install-prompt";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        template: `%s - ${branding.name}`,
        default: branding.name,
        absolute: branding.name,
    },
    openGraph: {
        siteName: branding.name,
    },
    description:
        "Max Adjust is a trusted public adjuster specialising in insurance claims for fire, storm, and property damage. We handle the claims process, negotiate with insurers, and fight for the maximum payout you deserve.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewTransitions>
            <html lang="en">
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content="MAX ADJUST" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                </head>
                <body
                    className={cn("antialiased min-h-screen bg-gray-50", inter.className)}
                >
                    <HeroUIProvider>
                        <Header />
                        <main className="pt-16 lg:pt-20 pb-16 lg:pb-0">
                            {children}
                        </main>
                        <Footer />
                        {/* <StickyHeader /> */}
                        <IntercomProvider />
                        <ServiceWorkerRegistration />
                        <MobileNavBar />
                        <InstallPrompt />
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                            transition={Bounce}
                        />
                    </HeroUIProvider>

                    <GoogleAnalytics gaId="G-P02Q7EGQRJ" />

                    <WebsiteLDJson />

                    <script
                        src="https://analytics.ahrefs.com/analytics.js"
                        data-key="L64ilW9QvUH+JV2Fidm8hw"
                        async
                    ></script>
                </body>
            </html>
        </ViewTransitions>
    );
}
