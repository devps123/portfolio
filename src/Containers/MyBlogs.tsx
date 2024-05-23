import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../Actions/blogsActions";
import Blog from "../Components/Blog.tsx";
import Loader from "../Components/Loader.tsx";
import { labels } from "../static/constants.js";
// @ts-ignore
import { RootState } from "../redux/store"; // Assuming RootState is defined in store.ts

const Blogs: React.FC = () => {
  const [pageNum, setPageNum] = useState<number>(1);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchBlogs(pageNum));
  }, [dispatch, pageNum]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; 
      const innerHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      if (innerHeight + scrollTop >= scrollHeight - 50) { 
        setPageNum((prevPageNum) => prevPageNum + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { blogs, loading, hasErrors } = useSelector((state: RootState) => ({
    blogs: state.blogs.myBlogs,
    loading: state.blogs.loading,
    hasErrors: state.blogs.hasErrors
  }));

  return (
    <main className="container mx-auto max-width mt-20 mb-20">
      {loading && <Loader />}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          My Blogs
        </h1>
        {hasErrors && 
          <h5 className="text-1xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-3xl xl:leading-tight font-bold">
            {labels.somethingWentWrong}
          </h5>
        }
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            blogs?.map(({ title, body }) => (
              <Blog
                title={title}
                description={body}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default Blogs;
