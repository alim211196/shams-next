"use client";
import Image from "next/image";
import React, { useState } from "react";
import testimonialProfile from "../../assets/images/testimonial-profile.png";
import quote from "../../assets/images/quote.png";
import { motion } from "framer-motion";
import { getS3ImageUrl } from "@/app/utils/helper";

const TestimonialSection = ({ testimonials }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) =>
      prev < testimonials.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const currentTestimonial = testimonials[currentStep];

  return (
    <section className="getStarted">
      <div className="container">
        <div className="row align-items-center">
          <div className="row align-items-center">
            <div className="testimonial-container">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="testimonial-card"
              >
                <div className="testimonial-content">
                  <Image src={quote} alt="quote-icon" className="quote-icon" />
                  <p>
                    {currentTestimonial.message?.length > 200
                      ? `${currentTestimonial.message.substring(0, 200)}...`
                      : currentTestimonial.message}
                  </p>
                  <div className="author">{currentTestimonial.name}</div>
                  <div className="designation">
                    {currentTestimonial.designation}
                  </div>
                </div>
                <div className="testimonial-image">
                  <Image
                    src={getS3ImageUrl(
                      "testimonial",
                      currentTestimonial.profile_img
                    )}
                    alt="testimonial-profile"
                    width={300} // Keep width and height fixed
                    height={400}
                  />
                </div>
              </motion.div>
              <div className="nav-buttons">
                <button
                  disabled={currentStep === 0}
                  onClick={handlePrevious}
                  className="left-btn"
                >
                  &#8592;
                </button>
                <button
                  disabled={currentStep === testimonials.length - 1}
                  onClick={handleNext}
                  className="right-btn"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
