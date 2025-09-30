import { allPosts } from "content-collections";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
    return (
        <section className="container flex flex-col gap-4 items-center justify-center py-12">
            <h1 className="text-3xl font-bold">Blogs</h1>
            <div className="w-[80%] grid grid-cols-1 lg:grid-cols-3 gap-4">
                {allPosts
                    .sort((a, b) => {
                        const dateA = new Date(a.updatedAt || a.publishedAt);
                        const dateB = new Date(b.updatedAt || b.publishedAt);
                        return dateB.getTime() - dateA.getTime();
                    })
                    .map((post, i) => (
                        <Link
                            key={i}
                            href={`${post.service}/${post.slug}`}
                            className="flex flex-col bg-white rounded-xl overflow-hidden"
                        >
                            <div className="flex items-center ">
                                <Image
                                    src={post.thumbnail}
                                    alt={post.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-52 object-cover"
                                />
                            </div>

                            <div className="flex flex-col gap-1 p-md">
                                <h3 className="font-bold text-md line-clamp-4 ">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {post.summary}
                                </p>
                            </div>
                        </Link>
                    ))}
            </div>
        </section>
    );
}
