import { useEffect, useState, useRef, useCallback } from "react";

export function useHeadsObserver() {
    const observer = useRef<IntersectionObserver | null>(null);
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const handleObserver: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    setActiveId(id);
                }
            });
        };

        observer.current = new IntersectionObserver(handleObserver, {
            rootMargin: "-20% 0% -35% 0px",
        });

        return () => observer.current?.disconnect();
    }, []);

    const observeElements = useCallback((elements: HTMLElement[]) => {
        elements.forEach((element) => observer.current?.observe(element));
        return () => {
            elements.forEach((element) => observer.current?.unobserve(element));
        };
    }, []);

    return { activeId, observeElements };
}
