"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { useRouter, useSearchParams } from "next/navigation";
import { submitAnswerStudent } from "@/app/features/student/auth/authService";
import { toast } from "react-toastify";
import { getS3ImageUrl } from "@/app/utils/helper";
import Image from "next/image";
const QuestionSection = ({ questions }) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState([]);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  if (questions?.length === 0) return null;

  const handleNext = () => {
    if (selectedOption) {
      const updatedAnswers = [...answers];
      updatedAnswers[currentStep] = {
        quest_id: questions[currentStep]._id, // Store question ID
        opt_id: selectedOption, // Store selected option ID
      };
      setAnswers(updatedAnswers);

      if (currentStep < questions.length - 1) {
        setCurrentStep((prev) => prev + 1);
        setSelectedOption(""); // Reset selection for next question
      }
    } else {
      toast.error("Please select an option before proceeding.");
    }
  };

  const handleSkip = () => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep] = {
      quest_id: questions[currentStep]._id,
      opt_id: null, // Mark as skipped
    };
    setAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setSelectedOption("");
    }
  };

  const handleContinue = async () => {
    // Ensure the last selection is properly updated in answers array
    const latestAnswers = [...answers];
    latestAnswers[currentStep] = {
      quest_id: questions[currentStep]._id,
      opt_id: selectedOption || null, // Ensure opt_id is set correctly
    };

    // Fully populate answers array
    const updatedAnswers = questions.map((question, index) => ({
      quest_id: question._id,
      opt_id: latestAnswers[index]?.opt_id || null, // Preserve previous selections
    }));

    // Check if any valid answer exists
    const hasValidAnswers = updatedAnswers.some(
      (answer) => answer.opt_id !== null
    );

    // If all answers are skipped, redirect without calling API
    if (!hasValidAnswers) {
      setTimeout(() => {
        router.push(`/`);
      }, 2000);
      return;
    }

    const data = {
      user_id: id,
      answers: updatedAnswers,
    };

    try {
      const response = await submitAnswerStudent(data);
      if (response.success) {
        toast.success(response.data.message);
        setTimeout(() => {
          router.push(`/`);
        }, 2000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const progressPercentage = ((currentStep + 1) / questions?.length) * 100; // Calculate progress %

  return (
    <>
      {/* Progress Bar */}
      <div className="progressContainer">
        <div
          className="progressBar"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <section className="studentQuestion">
        <div className="container">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="row"
          >
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="findYou">
                <h2 className="headingTitle">{questions[currentStep].title}</h2>
                <p>{questions[currentStep].subtitle}</p>
              </div>

              <div className="learnAbout">
                <h4 className="subTitle">{questions[currentStep].question}</h4>

                <div
                  className={
                    currentStep == 0 ? "radio-buttons" : "student-radio"
                  }
                >
                  {questions[currentStep].options.map((option, index) => (
                    <label key={index} className="custom-radio">
                      <input
                        type="radio"
                        name="radio"
                        value={option.opt_id}
                        checked={selectedOption === option.opt_id}
                        onChange={(e) => setSelectedOption(e.target.value)}
                      />
                      <span className="radio-btn">
                        {!option.icon && <i></i>}
                        <div className="hobbies-icon">
                          {option.icon && (
                            <Image
                              src={getS3ImageUrl(
                                "student_question/options",
                                option.icon
                              )}
                              width={32} // Set a numeric width for static images
                              height={32}
                            />
                          )}
                          {option.text}
                        </div>
                      </span>
                    </label>
                  ))}
                </div>

                <div className="questionBtn">
                  {currentStep < questions.length - 1 ? (
                    <>
                      <Link href="#" onClick={handleNext} className="btnBorder">
                        Next
                      </Link>
                      <Link
                        href="#"
                        onClick={handleSkip}
                        className="btnGradient"
                      >
                        Skip
                      </Link>
                    </>
                  ) : (
                    <Link
                      href="#"
                      onClick={handleContinue}
                      className="btnGradient"
                    >
                      Continue
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="questionImg">
                <Image
                  src={getS3ImageUrl(
                    "student_question",
                    questions[currentStep]?.ques_img
                  )}
                  width={560} // Set a numeric width for static images
                  height={560}
                  className="img-fluid"
                  alt="question-img"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default QuestionSection;
