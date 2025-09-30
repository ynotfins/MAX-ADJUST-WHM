import React from "react";
import { Check, X } from "lucide-react";

interface CheckListProps {
    items: React.ReactNode[];
    isCross?: boolean;
}

export const CheckList: React.FC<CheckListProps> = ({ items, isCross }) => {
    return (
        <ul className="flex flex-col gap-sm">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="flex items-start gap-3 font-medium text-base lg:text-lg text-gray-700"
                >
                    {/* Icon container */}
                    <div>
                        <div
                            className={`w-6 h-6 flex items-center justify-center rounded-full ${
                                isCross ? "bg-red-500" : "bg-green-500"
                            } text-white`}
                        >
                            {isCross ? (
                                <X className="w-4 h-4" />
                            ) : (
                                <Check className="w-4 h-4" />
                            )}
                        </div>
                    </div>
                    <span className="text-black leading-normal">{item}</span>
                </li>
            ))}
        </ul>
    );
};
