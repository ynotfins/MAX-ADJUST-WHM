export function url(path: string) {
    const host =
        process.env.NODE_ENV === "development"
            ? "http://localhost:3000" // Adjust port if needed
            : "https://maxadjust.com";

    return `${host}${path}`;
}
