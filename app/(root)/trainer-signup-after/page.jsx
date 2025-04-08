"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import headerLogo from "../../assets/images/shams-logo.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalDetailsSchema } from "@/app/utils/validationSchemas";
import {
  getCategories,
  getTrainerStatus,
  takeTrainerDetails,
} from "@/app/features/trainer/auth/authService";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const page = () => {
  const [categories, setCategories] = useState([]);
  const [currentStep, setCurrentStep] = useState(null);
  const [visitedSteps, setVisitedSteps] = useState([]);
  const [status, setStatus] = useState("pending");
  const [fileName, setFileName] = useState("Upload");
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(personalDetailsSchema),
  });
  const router = useRouter();

  useEffect(() => {
    if (!id) return;

    const checkTrainerStatus = async () => {
      try {
        const response = await getTrainerStatus(id);
        if (response?.data?.result?.status) {
          const newStatus = response.data.result.status;
          setStatus(newStatus);
          updateStepBasedOnStatus(newStatus);
        }
      } catch (error) {
        console.error("Error fetching trainer status", error);
      }
    };

    checkTrainerStatus();
  }, [id]);

  const updateStepBasedOnStatus = (status) => {
    const stepMapping = {
      pending: [1],
      under_review: [1, 2],
      approved: [1, 2, 3],
      rejected: [1],
    };
    setVisitedSteps(stepMapping[status] || [1]);
    setCurrentStep(stepMapping[status]?.slice(-1)[0] || 1);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data.result);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Update UI with filename
      setValue("certification", file.name); // Store only the filename
    } else {
      setFileName("Upload"); // Reset if no file is selected
      setValue("certification", ""); // Clear the field
    }
  };

  const onSubmit = async (data) => {
    const updatedData = {
      ...data,
      status: "under_review",
    };
    try {
      await takeTrainerDetails(id, updatedData); // Replace "trainerId" dynamically
      setVisitedSteps([...new Set([...visitedSteps, currentStep + 1])]);
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  const GoToLogin = () => {
    const timer = setTimeout(() => {
      router.push(`/trainer-login`);
    }, 2000);
    return () => clearTimeout(timer);
  };

  const steps = [
    { id: 1, label: "Personal Details", iconClass: "personalIcon" },
    { id: 2, label: "Teaching Details", iconClass: "detailIcon" },
    {
      id: 3,
      label: status === "approved" ? "Approved" : "Status",
      iconClass: status === "approved" ? "approvedIcon" : "statusIcon",
    },
  ];

  return (
    <>
      <div className="trainerHeader">
        <div className="container">
          <div className="headerWrap">
            <div className="logo">
              <Link href="#">
                <Image src={headerLogo} alt="Logo" />
              </Link>
            </div>
            {/* <Link className="CancelBtn" href="#">
              Cancel{" "}
            </Link> */}
          </div>
        </div>
      </div>
      <section className="design-process signupDetails">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <ul
                className="nav nav-tabs process-model more-icon-preocess"
                role="tablist"
              >
                {steps.map((step) => (
                  <li
                    key={step.id}
                    role="presentation"
                    className={visitedSteps.includes(step.id) ? "visited" : ""}
                  >
                    <Link
                      href="#"
                      aria-controls="tab"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i className={step.iconClass}></i>
                      <p>{step.label}</p>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="tab-content">
                {currentStep === 1 && (
                  <div
                    role="tabpanel"
                    className="tab-pane active"
                    id="personal-details"
                  >
                    <div className="process-content">
                      <div className="aboutDestail">
                        <h3>Teaching Details</h3>
                        <p>
                          Korem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </p>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                          <label>Company or Individual*</label>
                          <select
                            className="form-control"
                            {...register("tutorType")}
                          >
                            <option value="" disabled>
                              Select
                            </option>
                            <option value="company">Company</option>
                            <option value="individual">Individual</option>
                          </select>
                          {errors.tutorType && (
                            <p className="error-text">
                              {errors.tutorType.message}
                            </p>
                          )}
                        </div>
                        <div className="form-group">
                          <label>Trade license/Emirates ID*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="EMD566769969"
                            {...register("license")}
                          />
                          {errors.license && (
                            <p className="error-text">
                              {errors.license.message}
                            </p>
                          )}
                        </div>

                        <div className="form-group">
                          <label>Certifications*</label>
                          <div
                            className="file-upload-wrapper"
                            data-text={fileName}
                          >
                            <input
                              type="file"
                              className="file-upload-field"
                              onChange={onFileChange}
                            />
                          </div>
                          <input type="hidden" {...register("certification")} />
                          {errors.certification && (
                            <p className="error-text">
                              {errors.certification.message}
                            </p>
                          )}
                        </div>

                        <div className="form-group">
                          <label>Expertise*</label>
                          <select
                            className="form-control"
                            {...register("expertise")}
                          >
                            <option value="" disabled>
                              Select Category
                            </option>
                            {categories?.map((category) => (
                              <option key={category?.id} value={category.name}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                          {errors.expertise && (
                            <p className="error-text">
                              {errors.expertise.message}
                            </p>
                          )}
                        </div>
                        <div className="form-group">
                          <div className="remember-password form-group">
                            <div className="checkbox">
                              <input
                                id="terms"
                                type="checkbox"
                                {...register("is_agreed")}
                              />
                              <label htmlFor="terms">
                                i agreed{" "}
                                <Link href="/terms-definitions">
                                  Terms and definitions
                                </Link>{" "}
                                for instructors.
                              </label>
                            </div>
                          </div>
                          {errors.is_agreed && (
                            <p className="error-text">
                              {errors.is_agreed.message}
                            </p>
                          )}
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn-gradient"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Next"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                {currentStep === 2 && (
                  <div
                    role="tabpanel"
                    className="tab-pane active"
                    id="teaching-details"
                  >
                    <div className="process-content">
                      <div className="application-review">
                        <h4>Application under review</h4>
                        <p>
                          Korem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {currentStep === 3 && (
                  <div
                    role="tabpanel"
                    className="tab-pane active"
                    id="teacher-status"
                  >
                    <div className="process-content">
                      <div className="application-review">
                        <h4>Application Approved Successfully!</h4>
                        <p>
                          Korem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </p>

                        <button onClick={GoToLogin} className="btn-gradient">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
