import Icon from "./icon";
import React, { useEffect, useState, useCallback, useRef } from "react";

interface TableOfContentsProps {
    containerRef: React.RefObject<HTMLElement | null>;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
    containerRef,
}) => {
    // const [activeId, setActiveId] = useState<string>("");
    const [headings, setHeadings] = useState<HTMLElement[]>([]);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const headingMapRef = useRef<Map<string, number>>(new Map());

    const handleSmoothScroll = useCallback(
        (e: React.MouseEvent, id: string) => {
            e.preventDefault();
            const element = document.getElementById(id);
            element?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        },
        []
    );

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const headingMap = headingMapRef.current;

        // Get all h2 elements regardless of ID
        const h2Elements = Array.from(container.querySelectorAll("h2"));

        // Generate IDs for headings that don't have them
        h2Elements.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = `heading-${index}-${
                    heading.textContent?.slice(0, 20).replace(/\s+/g, "-") || ""
                }`;
            }
        });

        setHeadings(h2Elements);

        // Cleanup previous observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        // Create intersection observer with container as root
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target.id) {
                        headingMap.set(
                            entry.target.id,
                            entry.intersectionRatio
                        );
                    }
                });

                // Find the most visible heading
                let maxRatio = 0;
                // let mostVisibleId = "";

                headingMap.forEach((ratio) => {
                    if (ratio > maxRatio) {
                        maxRatio = ratio;
                        // mostVisibleId = id;
                    }
                });

                // if (maxRatio > 0.1) {
                //     setActiveId(mostVisibleId);
                // }
            },
            {
                root: container,
                rootMargin: "0px 0px -50% 0px",
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            }
        );

        // Observe all headings
        h2Elements.forEach((element) => {
            if (element.id) {
                observerRef.current?.observe(element);
                headingMap.set(element.id, 0);
            }
        });

        // Cleanup function with local reference
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }

            // This is safe because headingMapRef is not a React ref to a DOM node,
            // but a ref to a Map object that we created
            if (headingMap) {
                headingMap.clear();
            }
        };
    }, [containerRef]);

    return (
        <div className="flex flex-col gap-sm">
            {headings.map((heading) => (
                <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={(e) => handleSmoothScroll(e, heading.id)}
                    className="flex flex-row items-start gap-x-2 text-gray-400 hover:text-foreground"
                >
                    <Icon
                        icon="solar:double-alt-arrow-right-linear"
                        className="w-4 h-4 flex-shrink-0 relative top-0.5"
                    />
                    <span className="text-sm leading-tight">
                        {heading.textContent}
                    </span>
                </a>
            ))}
        </div>
    );
};
