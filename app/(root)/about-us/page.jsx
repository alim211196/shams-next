import Link from "next/link";
import React from "react";
import featureIcon1 from "../../assets/images/feature-icon1.svg";
import aboutShams from "../../assets/images/about-shams.png";
import Image from "next/image";
import PopoverComponent from "./PopoverComponent";
import { getS3ImageUrl } from "@/app/utils/helper";
import { getAboutDetails } from "@/app/features/student/aboutus/aboutService";
import { getCmsPages } from "@/app/features/student/cms/cmsService";
import Counter from "./Counter";
const fetchAboutUsDetails = async (lang) => {
  try {
    const res = await getAboutDetails(lang);
    return res.success ? res.data.result : [];
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
};

const fetchCMS = async (slug, lang) => {
  try {
    const res = await getCmsPages(slug, lang);
    return res.success ? res.data.result : [];
  } catch (error) {
    console.error("Error fetching cms:", error);
    return [];
  }
};

const page = async () => {
  const details = await fetchAboutUsDetails("en");
  const cms = await fetchCMS("about-us", "en");
  const { achievements, partners, stats } = details;
  const firstRow = [...partners, ...partners, ...partners, ...partners];
  const secondRow = [...partners, ...partners, ...partners, ...partners];
  const remainingCount = partners?.length - 10;

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${
            cms?.about_us_section1_banner_img
              ? getS3ImageUrl("page_content", cms?.about_us_section1_banner_img)
              : "../../assets/images/about-top-banner.png"
          })`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="aboutTopBanner"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="aboutConatnt">
              <h2>
                {cms?.about_us_section1_heading ||
                  "Empowering Media Minds for a Brighter Tomorrow"}
              </h2>
              {(
                <div
                  dangerouslySetInnerHTML={{
                    __html: cms?.about_us_section1_subheading,
                  }}
                />
              ) || (
                <p>
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="aboutShams">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 col-12">
              <div className="shamsConatnt">
                <h3 className="headingTitle">
                  {cms?.about_us_section2_title || "About Shams"}
                </h3>
                {(
                  <div
                    dangerouslySetInnerHTML={{
                      __html: cms?.about_us_section2_description,
                    }}
                  />
                ) || (
                  <>
                    <p className="globalFont">
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.Sorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Nunc vulputate libero et velit interdum, ac
                    </p>
                    <p className="globalFont">
                      aliquet odio mattis.Sorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nunc vulputate libero et
                      velit interdum, ac aliquet odio mattis.
                    </p>
                    <p className="globalFont">
                      aliquet odio mattis.Sorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nunc vulputate libero et
                      velit interdum, ac aliquet odio mattis.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-12">
              <Image
                src={
                  cms?.about_us_section2_img
                    ? getS3ImageUrl("page_content", cms?.about_us_section2_img)
                    : aboutShams
                }
                width={cms?.about_us_section2_img ? 900 : 900} // Set a numeric width for static images
                height={cms?.about_us_section2_img ? 650 : 650}
                alt="aboutShams"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="MissionSection">
        <div className="container">
          <div
            style={{
              backgroundImage: `url(${
                cms?.about_us_section2_tab_img
                  ? getS3ImageUrl(
                      "page_content",
                      cms?.about_us_section2_tab_img
                    )
                  : "../../assets/images/our-mission-bg.png"
              })`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="ourMissionBg"
          >
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 col-12"> </div>
              <div className="col-lg-7 col-md-6 col-12">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="mission-tab"
                      data-bs-toggle="tab"
                      href="#mission"
                      role="tab"
                    >
                      {cms?.about_us_section2_tab1 || "Our Mission"}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="vision-tab"
                      data-bs-toggle="tab"
                      href="#vision"
                      role="tab"
                    >
                      {cms?.about_us_section2_tab2 || "Our Vision"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="mission"
                role="tabpanel"
                aria-labelledby="mission-tab"
              >
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-6 col-12">
                    <div className="vissionLeft">
                      <h2> {cms?.about_us_section2_tab1 || "Our Mission"}</h2>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6 col-12">
                    <div className="vissionRight">
                      {(
                        <div
                          dangerouslySetInnerHTML={{
                            __html: cms?.about_us_section2_tab1_description,
                          }}
                        />
                      ) || (
                        <>
                          <p>
                            To provide comprehensive and accessible media
                            training that empowers individuals to excel in the
                            ever-evolving media landscape.
                          </p>
                          <p>
                            Sorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc vulputate libero et velit interdum, ac
                            aliquet odio mattis.To provide comprehensive and
                            accessible media training that empowers individuals
                            to excel in the ever-evolving media landscape. Sorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc vulputate libero et velit interdum, ac aliquet
                            odio mattis.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="vision"
                role="tabpanel"
                aria-labelledby="vision-tab"
              >
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-6 col-12">
                    <div className="vissionLeft">
                      <h2> {cms?.about_us_section2_tab2 || "Our Vision"}</h2>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6 col-12">
                    <div className="vissionRight">
                      {(
                        <div
                          dangerouslySetInnerHTML={{
                            __html: cms?.about_us_section2_tab2_description,
                          }}
                        />
                      ) || (
                        <>
                          <p>
                            To provide comprehensive and accessible media
                            training that empowers individuals to excel in the
                            ever-evolving media landscape.
                          </p>
                          <p>
                            Sorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc vulputate libero et velit interdum, ac
                            aliquet odio mattis.To provide comprehensive and
                            accessible media training that empowers individuals
                            to excel in the ever-evolving media landscape. Sorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc vulputate libero et velit interdum, ac aliquet
                            odio mattis.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {achievements?.length > 0 && (
        <section className="container text-center my-5">
          <div className="sectionTitle">
            <h2 className="title">
              {cms?.about_us_Section3_achievement_title ||
                "How it all Began - Our History"}
            </h2>
          </div>
          <PopoverComponent achievements={achievements} />
        </section>
      )}

      <section className="workWithUs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4 col-12">
              <div
                className="WorkConatnt bg-1"
                style={{
                  borderTop: `15px solid ${
                    cms?.about_us_section3_card_color_0 || "#b0398d"
                  }`,
                }}
              >
                <h3 className="headingTitle">
                  {cms?.about_us_section3_card_title_0 || "Work with us"}
                </h3>
                {(
                  <div
                    className="globalFont"
                    dangerouslySetInnerHTML={{
                      __html: cms?.about_us_section3_card_description_0,
                    }}
                  />
                ) || (
                  <p className="globalFont">
                    Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.Sorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nunc vulputate libero et velit interdum, ac aliquet
                    odio mattis.
                  </p>
                )}

                <Link
                  href={cms?.about_us_section3_linkname_0 || "#"}
                  style={{
                    color: cms?.about_us_section3_card_color_0 || "#b0398d",
                  }}
                >
                  {cms?.about_us_section3_linkname_0 || "Join our team"}
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div
                className="WorkConatnt bg-2"
                style={{
                  borderTop: `15px solid ${
                    cms?.about_us_section3_card_color_1 ||
                    "rgba(150, 86, 187, 1)"
                  }`,
                }}
              >
                <h3 className="headingTitle">
                  {cms?.about_us_section3_card_title_1 || "See our research"}
                </h3>
                {(
                  <div
                    className="globalFont"
                    dangerouslySetInnerHTML={{
                      __html: cms?.about_us_section3_card_description_1,
                    }}
                  />
                ) || (
                  <p className="globalFont">
                    Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.Sorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nunc vulputate libero et velit interdum, ac aliquet
                    odio mattis.
                  </p>
                )}
                <Link
                  href={cms?.about_us_section3_linkname_1 || "#"}
                  style={{
                    color:
                      cms?.about_us_section3_card_color_1 ||
                      "rgba(150, 86, 187, 1)",
                  }}
                >
                  {cms?.about_us_section3_linkname_1 || "Learn more"}
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div
                className="WorkConatnt bg-3"
                style={{
                  borderTop: `15px solid ${
                    cms?.about_us_section3_card_color_2 ||
                    "rgba(133, 123, 134, 1)"
                  }`,
                }}
              >
                <h3 className="headingTitle">
                  {cms?.about_us_section3_card_title_2 || "Read our blog"}
                </h3>
                {(
                  <div
                    className="globalFont"
                    dangerouslySetInnerHTML={{
                      __html: cms?.about_us_section3_card_description_2,
                    }}
                  />
                ) || (
                  <p className="globalFont">
                    Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.Sorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nunc vulputate libero et velit interdum, ac aliquet
                    odio mattis.
                  </p>
                )}
                <Link
                  href={cms?.about_us_section3_linkname_2 || "#"}
                  style={{
                    color:
                      cms?.about_us_section3_card_color_2 ||
                      "rgba(133, 123, 134, 1)",
                  }}
                >
                  {cms?.about_us_section3_linkname_2 || "Read now"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-partner">
        <div className="container-fluid">
          <div className="row">
            <div className="sectionTitle">
              <h2 className="title">
                {cms?.about_us_Section4_partner_title || "Our Partners"}
              </h2>
            </div>
            <div className="col-lg-12">
              <div className="partnerWrapper">
                <ul className="ul1">
                  {firstRow?.map((partner, index) => (
                    <li key={index}>
                      <Image
                        src={getS3ImageUrl("partner", partner.partner_img)}
                        alt="partnerImg"
                        width={120}
                        height={40}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="partnerWrapper">
                <ul className="ul2">
                  {secondRow?.map((partner, index) => (
                    <li key={index}>
                      <Image
                        src={getS3ImageUrl("partner", partner.partner_img)}
                        alt="partnerImg"
                        width={120}
                        height={40}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* {remainingCount > 0 && ( */}
        <div className="container">
          <div className="moreCompany">
            <a>60+ more companies</a>
            {/* <a>{remainingCount}+ more companies</a> */}
          </div>
        </div>
        {/* )} */}
      </section>
      <section className="platFeatSection">
        <div className="container">
          <div className="topRated">
            <div className="sectionTitle left">
              <h2 className="title">
                {cms?.about_us_section4_title || "Platform Features"}
              </h2>
            </div>
            <div className="topRated-right">
              {(
                <div
                  dangerouslySetInnerHTML={{
                    __html: cms?.about_us_section4_description,
                  }}
                />
              ) || (
                <p>
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-12">
              <div className="platformFeature">
                <div className="imgwrap">
                  <Image
                    src={
                      cms?.about_us_section4_card_0_img
                        ? getS3ImageUrl(
                            "page_content",
                            cms?.about_us_section4_card_0_img
                          )
                        : featureIcon1
                    }
                    width={cms?.about_us_section4_card_0_img ? 500 : 500} // Set a numeric width for static images
                    height={cms?.about_us_section4_card_0_img ? 400 : 500}
                    alt="featureIcon1"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  {cms?.about_us_section4_card_title_0 || "Expert Trainers"}
                </h3>
                {(
                  <div
                    dangerouslySetInnerHTML={{
                      __html: cms?.about_us_section4_card_description_0,
                    }}
                  />
                ) || (
                  <p>
                    Access to top media professionals with years of experience.
                  </p>
                )}
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="platformFeature">
                <div className="imgwrap">
                  <Image
                    src={
                      cms?.about_us_section4_card_1_img
                        ? getS3ImageUrl(
                            "page_content",
                            cms?.about_us_section4_card_1_img
                          )
                        : featureIcon1
                    }
                    width={cms?.about_us_section4_card_1_img ? 500 : 500} // Set a numeric width for static images
                    height={cms?.about_us_section4_card_1_img ? 400 : 500}
                    alt="featureIcon1"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  {cms?.about_us_section4_card_title_1 || "Real-World Training"}
                </h3>
                {(
                  <div
                    dangerouslySetInnerHTML={{
                      __html: cms?.about_us_section4_card_description_1,
                    }}
                  />
                ) || (
                  <p>
                    Access to top media professionals with years of experience.
                  </p>
                )}
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <div className="platformFeature">
                <div className="imgwrap">
                  <Image
                    src={
                      cms?.about_us_section4_card_2_img
                        ? getS3ImageUrl(
                            "page_content",
                            cms?.about_us_section4_card_2_img
                          )
                        : featureIcon1
                    }
                    width={cms?.about_us_section4_card_2_img ? 500 : 500} // Set a numeric width for static images
                    height={cms?.about_us_section4_card_2_img ? 400 : 500}
                    alt="featureIcon1"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  {cms?.about_us_section4_card_title_2 ||
                    "Flexible Learning Options"}
                </h3>
                {(
                  <div
                    dangerouslySetInnerHTML={{
                      __html: cms?.about_us_section4_card_description_2,
                    }}
                  />
                ) || (
                  <p>
                    Access to top media professionals with years of experience.
                  </p>
                )}
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <div className="platformFeature">
                <div className="imgwrap">
                  <Image
                    src={
                      cms?.about_us_section4_card_3_img
                        ? getS3ImageUrl(
                            "page_content",
                            cms?.about_us_section4_card_3_img
                          )
                        : featureIcon1
                    }
                    width={cms?.about_us_section4_card_3_img ? 500 : 500} // Set a numeric width for static images
                    height={cms?.about_us_section4_card_3_img ? 400 : 500}
                    alt="featureIcon1"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  {cms?.about_us_section4_card_title_3 || "Community Support"}
                </h3>
                {(
                  <div
                    dangerouslySetInnerHTML={{
                      __html: cms?.about_us_section4_card_description_3,
                    }}
                  />
                ) || (
                  <p>
                    Access to top media professionals with years of experience.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="impectSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="sectionTitle">
              <h2 className="title">
                {cms?.about_us_section5_title ||
                  "Creating impact around the world"}
              </h2>

              {(
                <div
                  className="subTitle"
                  dangerouslySetInnerHTML={{
                    __html: cms?.about_us_section5_description,
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
              {stats?.map((stat, index) => (
                <div
                  key={index}
                  className={`impect-item ${
                    index === 1 || index === 3 ? "topSpace" : ""
                  }`}
                >
                  <div className="impectImg">
                    <Image
                      src={getS3ImageUrl("stat", stat.stat_icon)}
                      alt="partnerImg"
                      width={80}
                      height={80}
                    />
                  </div>
                  <Counter value={stat.stat_count} type={stat.stat_type} />
                  <p>{stat.stat_title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <button className='btn btn-added' data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Brand
      </button><ModalComponent /> */}
    </>
  );
};

export default page;
