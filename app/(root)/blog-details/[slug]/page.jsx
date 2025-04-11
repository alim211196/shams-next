import Link from "next/link";
import React from "react";
import autharImg from "../../../assets/images/authar-img.png";
import blogBanner from "../../../assets/images/blog-banner.png";
import shareIcon from "../../../assets/images/share-icon.svg";
import shareIcon1 from "../../../assets/images/share-icon1.svg";
import shareIcon2 from "../../../assets/images/share-icon2.svg";
import shareIcon3 from "../../../assets/images/share-icon3.svg";
import shareIcon4 from "../../../assets/images/share-icon4.svg";

import Image from "next/image";
import {
  getBlogBySlug,
  getRecommendedBlogs,
} from "@/app/features/student/blogs/BlogService";
import { getS3ImageUrl } from "@/app/utils/helper";
import moment from "moment";
import BlogCard from "../../blogs/BlogCard";

const fetchBlog = async (slug, lang) => {
  try {
    const res = await getBlogBySlug(slug, lang);
    return res.success ? res.data.result : [];
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
};
const fetchRecommendedBlogs = async (cat_id, lang, ex_id) => {
  try {
    const res = await getRecommendedBlogs(cat_id, lang, ex_id);
    return res.success ? res.data.result : [];
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
};

const page = async ({ params }) => {
  const { slug } = params;
  const blog = await fetchBlog(slug, "en");
  const recommendedBlogs = await fetchRecommendedBlogs(
    blog?.category?._id,
    "en",
    blog?._id
  );

  const blogTitle = blog?.title;
  const blogUrl = `http://localhost:3000/blog-details/${blog?.slug}`;

  return (
    <>
      <section className="blogBanner">
        <div className="container">
          <div className="blogBannerBordr">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-12">
                <Image
                  src={
                    blog?.banner_img
                      ? getS3ImageUrl("blog", blog?.banner_img)
                      : blogBanner
                  }
                  alt="blogBanner"
                  width={500} // Set a proper width
                  height={200} // Set a proper height
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                  priority // Optional: Optimizes loading
                  //   className="img-fluid"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="blogConatnt">
                  <Link href="#" className="articleBtn">
                    {blog?.category?.name}
                  </Link>
                  <h3>
                    {blog.title?.length > 80
                      ? `${blog.title.substring(0, 80)}...`
                      : blog.title}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        blog.short_description?.length > 200
                          ? `${blog.short_description.substring(0, 200)}...`
                          : blog.short_description,
                    }}
                  />

                  <div className="articleAuthar">
                    <div className="autharwrap">
                      <div className="autharImg">
                        <Image
                          src={
                            blog?.created_by?.profile_img
                              ? getS3ImageUrl(
                                  "staff",
                                  blog?.created_by?.profile_img
                                )
                              : autharImg
                          }
                          alt="autharImg"
                          width={50} // Set a proper width
                          height={50} // Set a proper height
                          style={{
                            width: "100%",
                            height: "50px",
                            objectFit: "cover",
                          }}
                          priority // Optional: Optimizes loading
                          //   className="img-fluid"
                        />
                        <h5> {blog?.created_by?.name}</h5>
                      </div>

                      <div className="createDate">
                        {moment(blog?.createdAt).format("MMM DD, YYYY")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shareBlog">
            <Link href="#" className="shareBtn">
              <Image src={shareIcon} alt="share" /> Share
            </Link>
            <ul className="shareIcon">
              <ul className="shareIcon">
                <li>
                  <a
                    href={`https://www.instagram.com/`} // No direct Instagram sharing, opens Instagram
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={shareIcon1} alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      blogTitle
                    )} - ${encodeURIComponent(blogUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={shareIcon2} alt="WhatsApp" />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      blogUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={shareIcon3} alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      blogUrl
                    )}&text=${encodeURIComponent(blogTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={shareIcon4} alt="X (Twitter)" />
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </section>

      <section className="articleDetails">
        <div className="container">
          <div
            className="detailContant"
            dangerouslySetInnerHTML={{
              __html: blog.description,
            }}
          />
        </div>
      </section>
      <section className="allArticle">
        <div className="container">
          <div className="sectionTitle left">
            <h2 className="title">Recommended Articles </h2>
          </div>

          <div className="row align-items-center">
            {recommendedBlogs.length > 0 ? (
              recommendedBlogs.map((rec_blog, index) => {
                return (
                  <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <BlogCard blog={rec_blog} />
                  </div>
                );
              })
            ) : (
              <p>No more blogs available.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
