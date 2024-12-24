import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { blogPosts } from "@/app/blog-data"; // Import blog data
import Image from "next/image"; // Import the Image component

export const metadata: Metadata = {
  title: "Our Blog | Chrome Double Glazing",
  description:
    "Read our latest blog posts about windows, doors, double glazing, and home improvement tips. Learn from our experts at Chrome Double Glazing.",
};

const BlogPage = () => {
  // 1. Convert to date objects and sort.
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.time);
    const dateB = new Date(b.time);
    return dateB.getTime() - dateA.getTime(); // Sort in descending order (latest first)
  });

  return (
    <div className="mt-32 mb-10">
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">
          Our Latest Blog Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 2. Use the sorted posts here */}
          {sortedPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-md shadow-md p-6">
              {/* Thumbnail Image */}
              <div className="mb-4">
                <Image
                  src={post.imagePlaceholder}
                  alt={post.title}
                  className="rounded-md w-full object-cover h-40"
                  width={500} // You may adjust this
                  height={300} // You may adjust this
                  priority={true}
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <div className="text-gray-600 text-sm mb-2">
                <span className="font-medium">By {post.author}</span> |{" "}
                <time>{post.time}</time>
              </div>
              <p className="text-gray-700">{post.excerpt}</p>
              <Link
                href={`/blogs/${post.slug}`}
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
