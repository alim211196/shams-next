"use client";
import Link from "next/link";
import React from "react";
import logoWhite from "../../assets/images/logo-white.svg";
import socialIcon1 from "../../assets/images/social-icon1.svg";
import socialIcon2 from "../../assets/images/social-icon2.svg";
import socialIcon3 from "../../assets/images/social-icon3.svg";
import socialIcon4 from "../../assets/images/social-icon4.svg";
import visaIcon from "../../assets/images/visa.svg";
import masterCard from "../../assets/images/mastercard.svg";
import Image from "next/image";
import { getS3ImageUrl, hideHeaderFooterPaths } from "@/app/utils/helper";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

const Footer = () => {
  const { globalSettings } = useSelector((state) => state.settings);

  const pathname = usePathname();

  const shouldHideHeaderFooter = hideHeaderFooterPaths.includes(pathname);

  const getSetting = (key) => {
    const setting = globalSettings.find((item) => item.key === key);
    return setting ? setting.value : null;
  };
  return shouldHideHeaderFooter ? null : (
    <footer className="footerSection">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="cta-wrapper">
              <h3>Subscribe to Our Newsletter For Weekly Update </h3>
              <p>
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <form className="sup-form">
                <input
                  type="email"
                  className="form-control sigmup-me"
                  placeholder="Enter Your email"
                  required="required"
                />
                <button type="submit" className="">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__top">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="logo">
                  <Image
                    src={
                      getSetting("about_logo_img")
                        ? getS3ImageUrl(
                            "settings",
                            getSetting("about_logo_img")
                          )
                        : logoWhite
                    }
                    width={198}
                    height={112}
                    alt="logo white"
                  />
                </div>
                <div className="footer-content">
                  {(
                    <div
                      dangerouslySetInnerHTML={{
                        __html: getSetting("about_description"),
                      }}
                    />
                  ) || (
                    <p>
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </p>
                  )}
                  {getSetting("show_social_links") === "true" ? (
                    <ul className="list-wrap footer-social">
                      {getSetting("social_instagram") && (
                        <li>
                          <a
                            href={getSetting("social_instagram")}
                            target="_blank"
                          >
                            <Image src={socialIcon1} alt="" />
                          </a>
                        </li>
                      )}
                      {getSetting("social_youtube") && (
                        <li>
                          <a
                            href={getSetting("social_youtube")}
                            target="_blank"
                          >
                            <Image src={socialIcon2} alt="" />
                          </a>
                        </li>
                      )}
                      {getSetting("social_facebook") && (
                        <li>
                          <a
                            href={getSetting("social_facebook")}
                            target="_blank"
                          >
                            <Image src={socialIcon3} alt="" />
                          </a>
                        </li>
                      )}
                      {getSetting("social_twitter") && (
                        <li>
                          <a
                            href={getSetting("social_twitter")}
                            target="_blank"
                          >
                            <Image src={socialIcon4} alt="" />
                          </a>
                        </li>
                      )}
                    </ul>
                  ) : (
                    <ul className="list-wrap footer-social">
                      <li>
                        <a
                          href={getSetting("social_instagram")}
                          target="_blank"
                        >
                          <Image src={socialIcon1} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href={getSetting("social_youtube")} target="_blank">
                          <Image src={socialIcon2} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href={getSetting("social_facebook")} target="_blank">
                          <Image src={socialIcon3} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href={getSetting("social_twitter")} target="_blank">
                          <Image src={socialIcon4} alt="" />
                        </a>
                      </li>
                      <li></li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h4 className="footer-title">
                  {getSetting("link1_title") || "Quick links"}
                </h4>
                <div className="footer-link">
                  <ul className="list-wrap">
                    {getSetting("link_list1_label") ? (
                      getSetting("link_list1_label")?.map((label, index) => (
                        <li key={index}>
                          <Link href={getSetting("link_list1_url")[index]}>
                            {label}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <>
                        <li>
                          <Link href="#">About Us</Link>
                        </li>
                        <li>
                          <Link href="#">Carrers</Link>
                        </li>
                        <li>
                          <Link href="#">Facilities</Link>
                        </li>
                        <li>
                          <Link href="#">Blogs</Link>
                        </li>
                        <li>
                          <Link href="#">Contact Us</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h4 className="footer-title">
                  {getSetting("link2_title") || "Certifications"}
                </h4>
                <div className="footer-link">
                  <ul className="list-wrap">
                    {getSetting("link_list2_label") ? (
                      getSetting("link_list2_label")?.map((label, index) => (
                        <li key={index}>
                          <Link href={getSetting("link_list2_url")[index]}>
                            {label}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <>
                        <li>
                          <Link href="#">Communication Skills</Link>
                        </li>
                        <li>
                          <Link href="#">Public Speaking</Link>
                        </li>
                        <li>
                          <Link href="">Media Handling</Link>
                        </li>
                        <li>
                          <Link href="">Presentation Skill</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h4 className="footer-title">
                  {getSetting("link3_title") || "Legal & Accessibility"}
                </h4>
                <div className="footer-link">
                  <ul className="list-wrap">
                    {getSetting("link_list3_label") ? (
                      getSetting("link_list3_label")?.map((label, index) => (
                        <li key={index}>
                          <Link href={getSetting("link_list3_url")[index]}>
                            {label}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <>
                        <li>
                          <Link href="#">Cookie Policy</Link>
                        </li>
                        <li>
                          <Link href="#">Terms and Conditions</Link>
                        </li>
                        <li>
                          <Link href="">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="">Rules and Regulations</Link>
                        </li>
                        <li>
                          <Link href="">Accessibility statement</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="copy-right-text">
                {(
                  <div
                    dangerouslySetInnerHTML={{
                      __html: getSetting("copyright_text"),
                    }}
                  />
                ) || <p>2024 SHAMS TRAINING All Rights Reserved</p>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-menu">
                <ul className="list-wrap">
                  <li>
                    <p>
                      {getSetting("payment_acceptance_message") ||
                        "We Accept Online Payments"}
                    </p>
                  </li>

                  <li className="paymentImg">
                    <Image
                      src={
                        getSetting("payment_visa_img")
                          ? getS3ImageUrl(
                              "settings",
                              getSetting("payment_visa_img")
                            )
                          : visaIcon
                      }
                      width={85}
                      height={86}
                      alt="Visa"
                    />
                    <Image
                      src={
                        getSetting("payment_mastercard_img")
                          ? getS3ImageUrl(
                              "settings",
                              getSetting("payment_mastercard_img")
                            )
                          : masterCard
                      }
                      width={85}
                      height={86}
                      alt="Mastercard"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
