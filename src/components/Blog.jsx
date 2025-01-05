import React from "react";
import { useParams, Link } from "react-router-dom";
import  blogData  from "../assets/BlogData";
import ReactMarkdown from "react-markdown";

const Blog = () => {
  const { bikeId } = useParams();
    const blog = blogData.filter(b => b.id === bikeId)[0];
    
    console.log({blog});
    

  if (!blog) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl text-red-500">Blog not found</h1>
        <Link to="/" className="text-blue-500">
          Return home
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="text-gray-500 mb-4">Published on: {blog.publishDate}</div>

      <div className="prose prose-lg">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>

      <div className="grid grid-cols-2 gap-4 my-8">
        {blog.images?.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${blog.title} - Image ${idx + 1}`}
            className="rounded-lg shadow-lg"
          />
        ))}
      </div>

      <Link
        to="/"
        className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        ← Back to Bikes
      </Link>
    </article>
  );
};

export default Blog;
