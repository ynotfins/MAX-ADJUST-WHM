import { Link } from "next-view-transitions";
import branding from "~/branding";
import cn from "~/lib/cn";
import Icon from "./icon";

export type PhoneNumberButtonProps = {
    className?: string;
    label?: React.ReactNode;
    labelClassName?: string;
    disableIcon?: boolean;
};

export default function PhoneNumberButton({
    className,
    label = "24/7 Hotline",
    labelClassName,
    disableIcon,
}: PhoneNumberButtonProps) {
    return (
        <Link
            className={cn("flex flex-row items-center gap-sm", className)}
            href={cn("tel:", branding.phoneNumber)}
        >
            {!disableIcon && (
                <div className="bg-primary rounded-full p-2 lg:p-3">
                    <Icon
                        icon="solar:phone-calling-bold"
                        className="size-6 lg:size-7 text-foreground"
                    />
                </div>
            )}

            <div className="flex flex-col gap-0">
                <span
                    className={cn(
                        "text-xs leading-[20px] text-black text-center text-nowrap",
                        labelClassName
                    )}
                >
                    {label}
                </span>
                <span className="text-lg lg:text-xl leading-[20px] text-nowrap">
                    {branding.phoneNumber}
                </span>
            </div>
        </Link>
    );
}
