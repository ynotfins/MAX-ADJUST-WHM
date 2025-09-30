"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface AnimateProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    delay?: number;
}

export function FadeIn({ children, delay = 0, ...props }: AnimateProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function FadeInStagger({ children, delay = 0, ...props }: AnimateProps) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            transition={{
                staggerChildren: 0.1,
                delayChildren: delay,
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function FadeInStaggerItem({ children, ...props }: AnimateProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.25, 0.1, 0.25, 1],
                    }
                },
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function ScaleIn({ children, delay = 0, ...props }: AnimateProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function SlideIn({ 
    children, 
    delay = 0, 
    direction = "left",
    ...props 
}: AnimateProps & { direction?: "left" | "right" | "up" | "down" }) {
    const getInitialPosition = () => {
        switch (direction) {
            case "left": return { x: -50, y: 0 };
            case "right": return { x: 50, y: 0 };
            case "up": return { x: 0, y: -50 };
            case "down": return { x: 0, y: 50 };
        }
    };

    const { x, y } = getInitialPosition();

    return (
        <motion.div
            initial={{ opacity: 0, x, y }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
