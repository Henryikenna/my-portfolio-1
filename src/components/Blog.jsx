import React from "react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      excerpt: "Learn how to use React Hooks to manage state and lifecycle in functional components.",
      link: "#",
    },
    {
      id: 2,
      title: "CSS Grid vs. Flexbox",
      excerpt: "A comprehensive guide to choosing between CSS Grid and Flexbox for layout design.",
      link: "#",
    },
  ];

  return (
    <div
      name="blog"
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-950 to-gray-800 py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="text-white">
          <h2 className="text-4xl font-bold inline border-b-4 border-[#7F1F9A]">
            Blog
          </h2>
          <p className="py-6">Latest articles and tutorials</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map(({ id, title, excerpt, link }) => (
            <div
              key={id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-white"
            >
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="mb-4">{excerpt}</p>
              <a href={link} className="text-[#7F1F9A] hover:underline">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 