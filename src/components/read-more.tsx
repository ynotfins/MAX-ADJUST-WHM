"use client";
import React, { useState } from "react";

type ReadMoreProps = {
    text: React.ReactNode;
    readMoreText?: React.ReactNode;
};

const ReadMore: React.FC<ReadMoreProps> = ({ text, readMoreText }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div>
            <p>
                {isExpanded ? (
                    <>
                        {text} {readMoreText}
                    </>
                ) : (
                    text
                )}{" "}
                <button
                    onClick={toggleExpanded}
                    className="underline text-blue-500"
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
            </p>
        </div>
    );
};

export default ReadMore;
