import Icon from "./icon";

export function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex ">
            {Array.from({ length: rating }).map((_, i) => (
                <Icon
                    key={i}
                    icon="solar:star-bold"
                    className="text-yellow-500 inline"
                    fill="currentColor"
                />
            ))}
        </div>
    );
}
