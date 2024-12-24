import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, BlogPost } from "@/app/blog-data"; // Import blog data

// Generate Metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return undefined; // Return undefined for not found pages
  }
  return {
    title: `${post.title} | Chrome Double Glazing`,
    description: `Read more about ${post.title} at Chrome Double Glazing.`,
  };
}

// Dynamic page component which uses the slug parameter
const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound(); // Handle 404 page
  }

  return (
    <div className="mt-32 mb-10">
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-10">
        {/* Breadcrumbs */}
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blogs" className="text-blue-600 hover:underline">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span>{post.title}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center md:text-left">
          {post.title}
        </h1>

        {/* Author and Date  */}
        <div className="text-gray-600 text-sm mb-2 text-center md:text-left">
          <span className="font-medium">By {post.author}</span> |{" "}
          <time>{post.time}</time>
        </div>

        <div className="text-gray-700 leading-relaxed">
          {/* Use dangerouslySetInnerHTML */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
