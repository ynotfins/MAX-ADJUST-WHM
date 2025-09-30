import type { Config } from "tailwindcss";
import { heroui } from "@heroui/theme";
import typography from "@tailwindcss/typography";

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#3B82F6", // Blue from logo
                secondary: "#EF4444", // Red from logo
                accent: "#F59E0B", // Amber accent
                danger: "#DC2626", // Danger red
                gray: {
                    50: "#FAFAFA",
                    100: "#F5F5F7",
                    200: "#E8E8ED",
                    300: "#D2D2D7",
                    400: "#AEAEB2",
                    500: "#8E8E93",
                    600: "#636366",
                    700: "#48484A",
                    800: "#2C2C2E",
                    900: "#1C1C1E",
                },
            },
            spacing: {
                xs: "4px",
                sm: "8px",
                md: "16px",
                base: "24px",
                lg: "32px",
                xl: "48px",
                "2xl": "64px",
                "3xl": "96px",
                "4xl": "128px",
                "5xl": "160px",
                "6xl": "192px",
                "7xl": "256px",
                "8xl": "384px",
            },
            fontSize: {
                "xs": ["12px", { lineHeight: "16px", letterSpacing: "-0.01em" }],
                "sm": ["14px", { lineHeight: "20px", letterSpacing: "-0.006em" }],
                "base": ["17px", { lineHeight: "24px", letterSpacing: "-0.014em" }],
                "lg": ["20px", { lineHeight: "28px", letterSpacing: "-0.017em" }],
                "xl": ["24px", { lineHeight: "32px", letterSpacing: "-0.019em" }],
                "2xl": ["28px", { lineHeight: "36px", letterSpacing: "-0.021em" }],
                "3xl": ["34px", { lineHeight: "40px", letterSpacing: "-0.022em" }],
                "4xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.024em" }],
                "5xl": ["64px", { lineHeight: "72px", letterSpacing: "-0.025em" }],
                "6xl": ["80px", { lineHeight: "88px", letterSpacing: "-0.026em" }],
            },
            borderRadius: {
                none: "0",
                sm: "6px",
                DEFAULT: "8px",
                md: "12px",
                lg: "16px",
                xl: "20px",
                "2xl": "24px",
                "3xl": "32px",
                full: "9999px",
            },
            boxShadow: {
                "sm": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                "DEFAULT": "0 2px 8px 0 rgba(0, 0, 0, 0.08)",
                "md": "0 4px 12px 0 rgba(0, 0, 0, 0.1)",
                "lg": "0 8px 24px 0 rgba(0, 0, 0, 0.12)",
                "xl": "0 12px 48px 0 rgba(0, 0, 0, 0.15)",
                "2xl": "0 24px 64px 0 rgba(0, 0, 0, 0.18)",
                "card": "0 2px 8px rgba(0, 0, 0, 0.04)",
                "card-hover": "0 8px 24px rgba(0, 0, 0, 0.08)",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1.5rem", // 24px
                    sm: "2rem", // 32px
                    lg: "3rem", // 48px
                    xl: "4rem", // 64px
                    "2xl": "6rem", // 96px
                },
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1440px",
                },
            },
            animation: {
                "fade-in": "fade-in 0.5s ease-out",
                "slide-up": "slide-up 0.5s ease-out",
                "scale-in": "scale-in 0.3s ease-out",
                "infinite-scroll": "infinite-scroll 25s linear infinite",
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "slide-up": {
                    "0%": { transform: "translateY(16px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                "scale-in": {
                    "0%": { transform: "scale(0.95)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
                "infinite-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
            },
            backdropBlur: {
                xs: "2px",
                sm: "8px",
                DEFAULT: "12px",
                md: "16px",
                lg: "24px",
                xl: "40px",
            },
        },
    },
    plugins: [heroui(), typography()],
} satisfies Config;
