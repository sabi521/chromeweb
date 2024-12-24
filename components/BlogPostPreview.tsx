// components/BlogPostPreview.tsx

import React from "react";
import Link from "next/link";
import { BlogPost, blogPosts } from "@/app/blog-data"; // Ensure this path is correct
import Image from "next/image"; // Import the Image component

const BlogPostPreview: React.FC = () => {
  // Sort posts by date
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.time);
    const dateB = new Date(b.time);
    return dateB.getTime() - dateA.getTime(); // Descending order
  });

  // Get the two most recent posts
  const recentPosts = sortedPosts.slice(0, 2);

  if (!recentPosts || recentPosts.length === 0) {
    return <p>No blog posts available.</p>;
  }

  return (
    <div className="mt-8 mb-10 max-w-4xl mx-auto px-4 md:px-6">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
        Recent Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {recentPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-md shadow-md p-6">
            <div className="mb-4">
                <Image
                  src={post.imagePlaceholder}
                  alt={post.title}
                  className="rounded-md w-full object-cover h-40"
                  width={500} // You may adjust this
                  height={300} // You may adjust this
                  priority = {true}
                />
              </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              <Link href={`/blogs/${post.slug}`} className=" hover:underline">
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
    </div>
  );
};

export default BlogPostPreview;