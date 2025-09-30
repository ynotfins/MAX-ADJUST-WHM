"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Props = { children: ReactNode };

export const DiffContent = ({ children }: Props) => (
    <div className="relative flex flex-col items-center justify-center py-12 w-full">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300" />
        {children}
    </div>
);

const Item = ({ children }: Props) => (
    <div className="flex flex-row justify-center gap-16 lg:gap-[150px] w-full">
        {children}
    </div>
);

const LeftSide = ({ children }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
    const [variant, setVariant] = useState({
        hidden: { x: "-100%", opacity: 0 },
        show: { x: "0%", opacity: 1 },
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            setVariant({
                hidden: {
                    x: window.innerWidth < 768 ? "-100%" : "-160%",
                    opacity: 0,
                },
                show: { x: "0%", opacity: 1 },
            });
        }
    }, []);

    return (
        <motion.div
            ref={ref}
            variants={variant}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex flex-col justify-center py-lg w-full max-w-md items-end pr-4 text-right"
        >
            {children}
        </motion.div>
    );
};

const RightSide = ({ children }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
    const [variant, setVariant] = useState({
        hidden: { x: "100%", opacity: 0 },
        show: { x: "0%", opacity: 1 },
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            setVariant({
                hidden: {
                    x: window.innerWidth < 768 ? "100%" : "160%",
                    opacity: 0,
                },
                show: { x: "0%", opacity: 1 },
            });
        }
    }, []);

    return (
        <motion.div
            ref={ref}
            variants={variant}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex flex-col justify-center py-lg w-full max-w-md pl-4 items-start"
        >
            {children}
        </motion.div>
    );
};

const Center = ({ children }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const variant = {
        hidden: { y: "160%", opacity: 0 },
        show: { y: "0%", opacity: 1 },
    };

    return (
        <div
            ref={ref}
            className="absolute left-1/2 transform -translate-x-1/2 bg-gray-100 px-2"
        >
            <motion.div
                variants={variant}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="flex items-center justify-center">
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

DiffContent.Item = Item;
DiffContent.LeftSide = LeftSide;
DiffContent.RightSide = RightSide;
DiffContent.Center = Center;

export default DiffContent;
