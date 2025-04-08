import React from "react";
import timeIcon from "../../assets/images/time-icon.svg";
import callIcon from "../../assets/images/call-icon.svg";
import addressIcon from "../../assets/images/address-icon.svg";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
import { getCmsPages } from "@/app/features/student/cms/cmsService";
const GoogleMapComponent = dynamic(() => import("./GoogleMapComponent"), {
  ssr: !!false,
});
const ContactUsForm = dynamic(() => import("./ContactUsForm"), {
  ssr: !!false,
});
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
  const CMS = await fetchCMS("contact-us", "en");

  return (
    <>
      <section className="ContactBanner">
        <div className="container">
          <div className="sectionTitle">
            <h2 className="title">
              {CMS?.contact_us_section1_title || "Contact Us"}
            </h2>
            {(
              <div
                dangerouslySetInnerHTML={{
                  __html: CMS?.contact_us_section1_description,
                }}
              />
            ) || (
              <p>
                Get in touch with our friendly team for any queries you may
                have. We look forward to hearing from you.
              </p>
            )}
          </div>
          <ContactUsForm />
        </div>
      </section>
      <section className="contactDetails">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="contactInfo">
                <div className="icon">
                  <Image src={addressIcon} alt="" />
                </div>
                {(
                  <div
                    dangerouslySetInnerHTML={{
                      __html: CMS?.contact_us_section1_address,
                    }}
                  />
                ) || (
                  <p>
                    Sharjah Media City (Shams), Al
                    <span> Messaned, Al Bataeh, Sharjah,</span>
                    United Arab Emirates.
                  </p>
                )}
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="contactInfo">
                <div className="icon">
                  <Image src={callIcon} alt="" />
                </div>
                {(
                  <div
                    dangerouslySetInnerHTML={{
                      __html: CMS?.contact_us_section1_contact_details,
                    }}
                  />
                ) || (
                  <p>
                    In the UAE: 800 Shams (74267)
                    <span> Outside UAE: +971 800 Shams (74267) </span>
                    Email: info@shams.ae
                  </p>
                )}
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="contactInfo">
                <div className="icon">
                  <Image src={timeIcon} alt="" />
                </div>
                {(
                  <div
                    dangerouslySetInnerHTML={{
                      __html: CMS?.contact_us_section1_available_time,
                    }}
                  />
                ) || (
                  <p>
                    Monday - Friday: 8AM - 8PM
                    <span> For more details, please Contact </span>
                    us on 800 Shams (74267).
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contactMap">
        {/* <Image src={contactMap} alt="" className="img-fluid"></Image> */}
        <GoogleMapComponent contact={CMS} />
      </section>
    </>
  );
};

export default page;
