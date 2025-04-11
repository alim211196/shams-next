import Link from "next/link";
import React from "react";
import partnerBanner from "../../assets/images/partner-banner.png";
import miceIcon from "../../assets/images/mice.svg";

import Image from "next/image";
import { getCmsPages } from "@/app/features/student/cms/cmsService";
import { getS3ImageUrl } from "@/app/utils/helper";
import StepperSection from "./StepperSection";
import TestimonialSection from "./TestimonialSection";
import { getLandingDetails } from "@/app/features/trainer/landing/landingService";
import Counter from "./Counter";
const fetchCMS = async (slug, lang) => {
  try {
    const res = await getCmsPages(slug, lang);
    return res.success ? res.data.result : [];
  } catch (error) {
    console.error("Error fetching cms:", error);
    return [];
  }
};

const fetchLandingDetails = async (lang = "en") => {
  try {
    const res = await getLandingDetails("instructor", lang);
    return res.success ? res.data.result : [];
  } catch (error) {
    console.error("Error fetching cms:", error);
    return [];
  }
};

const page = async () => {
  const cms = await fetchCMS("instructor-landing", "en");
  const { faqs, testimonials } = await fetchLandingDetails("en");

  return (
    <>
      <section className="instuTop">
        <div className="container">
          <div className="row align-items-center">
            <div className="instuBanner">
              <Image
                src={
                  cms?.instructor_section1_banner_img
                    ? getS3ImageUrl(
                        "page_content",
                        cms?.instructor_section1_banner_img
                      )
                    : partnerBanner
                }
                unoptimized
                width={cms?.instructor_section1_banner_img ? 900 : 900} // Set a numeric width for static images
                height={cms?.instructor_section1_banner_img ? 650 : 650}
                alt="PartnerBanner"
              />
              <div className="instuContant">
                <h2>
                  {cms?.instructor_section1_heading ||
                    "Share Your Expertise. Empower Learners. Earn with Ease."}
                </h2>

                {(
                  <div
                    dangerouslySetInnerHTML={{
                      __html: cms?.instructor_section1_subheading,
                    }}
                  />
                ) || (
                  <p>
                    Join our platform and start transforming lives with your
                    knowledge today.
                  </p>
                )}

                <Link href="#" className="btnGradient">
                  {cms?.instructor_section1_btn_text || "Get Started"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* becomeBox start here */}

      <section className="becomeTrainer">
        <div className="container">
          <div className="sectionTitle">
            <h2 className="title">
              {cms?.instructor_section2_heading ||
                "Why Become a Trainer with Us?"}
            </h2>
          </div>
          <div className="row align-items-center becomeTrainerRow">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="becomeBox">
                <div className="becomeImg">
                  <Image src={miceIcon} alt="PartnerBanner" />
                </div>
                <div className="becomeContant">
                  <h2>
                    {cms?.instructor_section2_card_title_0 ||
                      "Expand Your Reach"}
                  </h2>
                  {(
                    <div
                      dangerouslySetInnerHTML={{
                        __html: cms?.instructor_section2_card_description_0,
                      }}
                    />
                  ) || (
                    <p>
                      Break barriers and share your expertise with millions of
                      learners worldwide.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="becomeBox">
                <div className="becomeImg">
                  <Image src={miceIcon} alt="PartnerBanner" />
                </div>
                <div className="becomeContant">
                  <h2>
                    {" "}
                    {cms?.instructor_section2_card_title_1 ||
                      "Empower Your Growth'"}
                  </h2>
                  {(
                    <div
                      dangerouslySetInnerHTML={{
                        __html: cms?.instructor_section2_card_description_1,
                      }}
                    />
                  ) || (
                    <p>
                      Access state-of-the-art tools and resources to create,
                      refine.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="becomeBox">
                <div className="becomeImg">
                  <Image src={miceIcon} alt="PartnerBanner" />
                </div>
                <div className="becomeContant">
                  <h2>
                    {" "}
                    {cms?.instructor_section2_card_title_2 ||
                      "Unlock Earning Potential"}
                  </h2>
                  {(
                    <div
                      dangerouslySetInnerHTML={{
                        __html: cms?.instructor_section2_card_description_2,
                      }}
                    />
                  ) || (
                    <p>
                      Earn while doing what you love — create once and profit
                      repeatedly.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="becomeBox">
                <div className="becomeImg">
                  <Image src={miceIcon} alt="PartnerBanner" />
                </div>
                <div className="becomeContant">
                  <h2>
                    {" "}
                    {cms?.instructor_section2_card_title_3 ||
                      "Join a Vibrant Community"}
                  </h2>
                  {(
                    <div
                      dangerouslySetInnerHTML={{
                        __html: cms?.instructor_section2_card_description_3,
                      }}
                    />
                  ) || (
                    <p>
                      Connect with like-minded trainers to share insights,
                      learn, and grow together.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${
            cms?.instructor_section3_background_img
              ? getS3ImageUrl(
                  "page_content",
                  cms?.instructor_section3_background_img
                )
              : "../../assets/images/faq-banner.png"
          })`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="impectSection buildTrust"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="sectionTitle">
              <h2 className="title">
                {cms?.instructor_section3_heading ||
                  "Build trust and credibility with impressive metrics."}
              </h2>
              {(
                <div
                  className="subTitle"
                  dangerouslySetInnerHTML={{
                    __html: cms?.instructor_section3_subheading,
                  }}
                />
              ) || (
                <p className="subTitle">
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              )}
            </div>

            <div className="impect-wrapper">
              <div className="impect-item">
                <Counter
                  value={cms?.instructor_section3_stat_count_0 || 90}
                  type={1}
                />
                <p>
                  {cms?.instructor_section3_stat_title_0 ||
                    "Specialized Mentors"}
                </p>
              </div>
              <div className="impect-item topSpace">
                <Counter
                  value={cms?.instructor_section3_stat_count_1 || 160}
                  type={2}
                />
                <p>
                  {cms?.instructor_section3_stat_title_1 || "Student Community"}
                </p>
              </div>
              <div className="impect-item">
                <Counter
                  value={cms?.instructor_section3_stat_count_2 || 12}
                  type={3}
                />

                <p> {cms?.instructor_section3_stat_title_2 || "Countries"}</p>
              </div>
              <div className="impect-item topSpace">
                <Counter
                  value={cms?.instructor_section3_stat_count_3 || 18}
                  type={4}
                />
                <p> {cms?.instructor_section3_stat_title_3 || "Programs"}</p>
              </div>
              <div className="impect-item">
                <Counter
                  value={cms?.instructor_section3_stat_count_4 || 5}
                  type={5}
                />
                <p> {cms?.instructor_section3_stat_title_4 || "Languages"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StepperSection cms={cms} />
      <TestimonialSection testimonials={testimonials} />

      <section className="faqSection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="faq__content">
                <div className="sectionTitle">
                  <h2 className="title">
                    {cms?.instructor_section5_heading ||
                      "Frequently asked questions"}
                  </h2>
                </div>
                <div className="faq__wrap">
                  <div className="accordion" id="accordionExample">
                    {faqs?.map((item, index) => (
                      <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${
                              index === 0 ? "" : "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded={index === 0 ? "true" : "false"}
                            aria-controls={`collapse${index}`}
                          >
                            {item.title}
                          </button>
                        </h2>
                        <div
                          id={`collapse${index}`}
                          className={`accordion-collapse collapse ${
                            index === 0 ? "show" : ""
                          }`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="becomeToday">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div
                style={{
                  backgroundImage: `url(${
                    cms?.instructor_section6_card_img
                      ? getS3ImageUrl(
                          "page_content",
                          cms?.instructor_section6_card_img
                        )
                      : "../../assets/images/faq-card-bg.png"
                  })`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="cateringService"
              >
                <div className="cateringContant">
                  <h3>
                    {cms?.instructor_section6_title ||
                      "Become an instructor today?"}
                  </h3>
                  {(
                    <div
                      className="subTitle"
                      dangerouslySetInnerHTML={{
                        __html: cms?.instructor_section6_description,
                      }}
                    />
                  ) || (
                    <p>
                      Morem ipsum dolor sit amet, consectetur adipiscing
                      elit.Morem ipsum dolor sit amet, consectetur adipiscing
                      elit.Morem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                  )}
                </div>
                <Link href="" className="btnGradient">
                  {cms?.instructor_section6_btn_text ||
                    "Become a Trainer Today!"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
