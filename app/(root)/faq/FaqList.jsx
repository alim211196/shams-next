"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import faqBanner from "../../assets/images/faq-banner.png";
import { getS3ImageUrl } from "../../utils/helper";

const FaqList = ({ faqs, categories, cms }) => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || ""; // Get search query from URL

  const [input, setInput] = useState("");

  useEffect(() => {
    // Ensure input gets reset on refresh
    setInput(searchQuery);
  }, [searchQuery]);

  const [selectedCategory, setSelectedCategory] = useState(categories[0] || "");

  // Filter FAQs Based on Search Query and Selected Category
  const filteredFaqs = faqs
    .filter((faq) => faq.category === selectedCategory) // Filter by category first
    .filter((faq) =>
      faq?.title
        ? faq.title.toLowerCase().includes(input.toLowerCase())
        : faq?.title.toLowerCase().includes(input.toLowerCase())
    );

  return (
    <>
      <section className="partnerTop">
        <div className="container">
          <div className="row align-items-center">
            <div className="partnerBanner faqBanner">
              <Image
                src={
                  cms?.faq_section1_banner_img
                    ? getS3ImageUrl(
                        "page_content",
                        cms?.faq_section1_banner_img
                      )
                    : faqBanner
                }
                unoptimized
                width={cms?.faq_section1_banner_img ? 500 : 500} // Set a numeric width for static images
                height={cms?.faq_section1_banner_img ? 500 : 500}
                alt="faBanner"
              />

              <div className="partnerContant">
                <h2>{cms?.faq_section1_heading || "How can we help you?"}</h2>
                <form className="sup-form">
                  <input
                    type="text"
                    className="form-control sigmup-me"
                    placeholder="Search Here"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    autoFocus
                    required
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faqSection faqpage">
        <div className="container">
          <div className="row justify-content-center">
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul className="faq-filter-tab text-center">
                  {categories.map((category, index) => (
                    <li key={index} className="nav-item">
                      <Link
                        href="#"
                        className={
                          category === selectedCategory ? "active" : ""
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedCategory(category);
                        }}
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-11">
              <div className="faq__content">
                <div className="sectionTitle left">
                  <h2 className="title">
                    {cms?.faq_section2_title || "Top Questions"}
                  </h2>
                </div>
                <div className="faq__wrap">
                  <div className="accordion" id="accordionExample">
                    {filteredFaqs.length > 0 ? (
                      filteredFaqs.map((faq, index) => (
                        <div className="accordion-item" key={faq._id}>
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${index}`}
                              aria-expanded="false"
                              aria-controls={`collapse${index}`}
                            >
                              {faq?.title}
                            </button>
                          </h2>
                          <div
                            id={`collapse${index}`}
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p> {faq?.description}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No FAQs available for this category.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqList;
