"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import autharImg from "../../assets/images/authar-img.png";
import blogBanner from "../../assets/images/blog-banner.png";
import { getS3ImageUrl } from "@/app/utils/helper";
import moment from "moment";
import { useRouter } from "next/navigation";

const TopCard = ({ blog }) => {
  const router = useRouter();

  const handleClick = (slug) => {
    router.push(`/blog-details/${slug}`);
  };
  return (
    <div className="blogBannerBordr" onClick={() => handleClick(blog?.slug)}>
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-12">
          <Image
            src={
              blog?.banner_img
                ? getS3ImageUrl("blog", blog?.banner_img)
                : blogBanner
            }
            unoptimized
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
              {blog?.title?.length > 80
                ? `${blog?.title.substring(0, 80)}...`
                : blog?.title}
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  blog?.short_description?.length > 200
                    ? `${blog?.short_description.substring(0, 200)}...`
                    : blog?.short_description,
              }}
            />

            <div className="articleAuthar">
              <div className="autharwrap">
                <div className="autharImg">
                  <Image
                    src={
                      blog?.created_by?.profile_img
                        ? getS3ImageUrl("staff", blog?.created_by?.profile_img)
                        : autharImg
                    }
                    unoptimized
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
  );
};

export default TopCard;
