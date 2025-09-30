import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container py-2xl">
            <div className="prose max-w-none">{children}</div>
        </div>
    );
}
