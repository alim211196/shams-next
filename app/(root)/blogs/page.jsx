import Link from "next/link";
import React from "react";

import Image from "next/image";
import { getBlogs } from "@/app/features/student/blogs/BlogService";
import BlogCard from "./BlogCard";
import TopCard from "./TopCard";
const fetchBlogsDetails = async (count, lang) => {
  try {
    const res = await getBlogs(count, lang);
    return res?.success ? res?.data?.result?.data : [];
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
};
const page = async ({ searchParams }) => {
  const count = searchParams.count ? parseInt(searchParams.count) : 7;

  const blogs = await fetchBlogsDetails(count, "en");
  const firstBlog = blogs[0];
  const otherBlogs = blogs?.slice(1);
  return (
    <>
      <section className="blogBanner">
        <div className="container">
          {firstBlog && <TopCard blog={firstBlog} />}
        </div>
      </section>

      <section className="allArticle">
        <div className="container">
          <div className="blogSort">
            <h2 className="title">Popular Articles </h2>
            <div className="sortRight">
              <div className="sortFilter">
                Choose Category{" "}
                <Link href="#" className="sortIcon">
                  Media
                </Link>
                <ul className="sortDropdown">
                  <li>
                    <Link className="" href="#">
                      Popular
                    </Link>
                  </li>
                  <li>
                    <Link href="#">Most Reviewed</Link>
                  </li>
                  <li>
                    <Link href="#">Highest Rated</Link>
                  </li>
                  <li>
                    <Link href="#">Newest</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            {otherBlogs?.length > 0 ? (
              otherBlogs?.map((blog, index) => {
                return (
                  <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <BlogCard blog={blog} />
                  </div>
                );
              })
            ) : (
              <p>No more blogs available.</p>
            )}
            {blogs?.length >= count && (
              <div className="col-lg-12 col-md-6 col-12">
                <div className="loadMore">
                  <Link
                    className="btnGradient"
                    href={`?count=${count + 7}`}
                    scroll={false}
                  >
                    Load more
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
