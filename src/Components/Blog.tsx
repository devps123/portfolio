import React from "react";

interface BlogProps {
  title: string;
  description: string;
}

/**
 * A Blog component.
 * Used to show a blog
 * @component
 * @param {BlogProps} props - The props for the Blog component.
 * @returns {JSX.Element} The rendered component.
 */
const Blog: React.FC<BlogProps> = ({ title, description }: BlogProps): JSX.Element => {
  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
      <div className="dark:bg-dark-card p-4">
        <h1 className="dark:text-light-heading font-semibold text-lg pt-1">{title}</h1>
        <p className="text-content pt-4 font-light">{description}</p>
      </div>
    </article>
  );
}

export default Blog;
