"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import getStarted from "../../assets/images/get-started.svg";
import { getS3ImageUrl } from "@/app/utils/helper";

// Function to extract bullet points dynamically
const extractBulletPoints = (cmsData, stepNumber) => {
  return Object.keys(cmsData)
    .filter((key) =>
      key.startsWith(`instructor_section4_step${stepNumber}_bullet_list`)
    )
    .map((key) => cmsData[key]);
};

const StepperSection = ({ cms }) => {
  const steps = [
    {
      id: 1,
      title: cms.instructor_section4_step1,
      content: cms.instructor_section4_step1_list_heading,
      bulletPoints: extractBulletPoints(cms, 1),
      img: cms.instructor_section4_step1_img,
    },
    {
      id: 2,
      title: cms.instructor_section4_step2,
      content: cms.instructor_section4_step2_list_heading,
      bulletPoints: extractBulletPoints(cms, 2),
      img: cms.instructor_section4_step2_img,
    },
    {
      id: 3,
      title: cms.instructor_section4_step3,
      content: cms.instructor_section4_step3_list_heading,
      bulletPoints: extractBulletPoints(cms, 3),
      img: cms.instructor_section4_step3_img,
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <section className="getStarted">
      <div className="container">
        <div className="row align-items-center">
          <div className="sectionTitle">
            <h2 className="title">
              {cms.instructor_section4_heading || "How to Get Started"}
            </h2>
          </div>
          <div className="row">
            <div className="startprocess">
              <ul className="getprocess">
                {steps.map((step, index) => (
                  <li
                    key={index}
                    className={index <= currentStep ? "active" : ""}
                    onClick={() => handleStepClick(index)}
                  >
                    <i>{step.id}</i> {step.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="row align-items-center"
          >
            <div
              className="col-lg-6 col-md-6 col-12"
              style={{ textAlign: "center" }}
            >
              <Image
                src={
                  steps[currentStep].img
                    ? getS3ImageUrl("page_content", steps[currentStep].img)
                    : getStarted
                }
                unoptimized
                width={steps[currentStep].img ? 400 : 400} // Set a numeric width for static images
                height={steps[currentStep].img ? 400 : 400}
                alt="getStarted"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="startedContent">
                <p>
                  {steps[currentStep].content ||
                    "Define your course topics, structure your lessons, and set clear learning objectives to create a roadmap for success."}
                </p>
                <ul className="aboutList">
                  {steps[currentStep].bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StepperSection;
