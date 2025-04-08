"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import plusIcon from "../../assets/images/plus-circle.svg";
import gradientCheck from "../../assets/images/gradientCheck.svg";
import videoImg from "../../assets/images/video-img.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { courseSchema } from "@/app/utils/addCourseSchema";
import FAQSection from "@/app/features/Course/FaqSection";
import PrerequisiteSection from "@/app/features/Course/PrerequisiteSection";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveTab,
  updateFormData,
} from "@/app/features/Course/courseFormSlice";

const page = () => {
  const dispatch = useDispatch();
  const { activeTab, formData } = useSelector((state) => state.courseForm);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm({
    resolver: yupResolver(courseSchema),
    defaultValues: {
      faqs: [{ question: "", answer: "" }],
      prerequisites: [{ label: "" }],
      ...formData,
    },
  });

  useEffect(() => {
    reset(formData);
  }, [activeTab, reset]);

  const onSubmit = (data) => {
    dispatch(updateFormData(data));
  };

  const handleNext = async () => {
    let isValid = false;

    switch (activeTab) {
      case "mission":
        isValid = await trigger([
          "courseType",
          "courseTitle",
          "courseDescription",
          "courseDuration",
          "learningObjectives",
          "coreConcepts",
          "assessmentCriteria",
          "suggestedActivities",
          "classLanguage",
          "category",
          "difficulty",
          "certificate",
        ]);
        break;
      case "social":
        isValid = await trigger("faqs");
        break;
      case "teaching":
        isValid = await trigger("prerequisites");
        break;
      default:
        isValid = true;
    }

    if (isValid) {
      const newTab = {
        mission: "vision",
        vision: "social",
        social: "teaching",
      }[activeTab];

      if (newTab) {
        dispatch(setActiveTab(newTab));
      }
    }
  };

  const handlePrevious = () => {
    const prevTab = {
      vision: "mission",
      social: "vision",
      teaching: "social",
    }[activeTab];

    if (prevTab) {
      dispatch(setActiveTab(prevTab));
    }
  };

  const handleTabClick = (tabId) => {
    dispatch(setActiveTab(tabId));
  };

  const handleSubmitReview = async () => {
    // Validate all tabs before submission
    const isMissionValid = await trigger([
      "courseType",
      "courseTitle",
      "courseDescription",
      "courseDuration",
      "learningObjectives",
      "coreConcepts",
      "assessmentCriteria",
      "suggestedActivities",
      "classLanguage",
      "category",
      "difficulty",
      "certificate",
    ]);

    const isFaqValid = await trigger("faqs");
    const isPrerequisiteValid = await trigger("prerequisites");

    const isAllValid = isMissionValid && isFaqValid && isPrerequisiteValid;

    if (isAllValid) {
      handleSubmit(onSubmit)();
      alert("Form submitted for review!");
      dispatch(resetForm());
    } else {
      // Go to the first tab with errors
      if (!isMissionValid) setActiveTab("mission");
      else if (!isFaqValid) setActiveTab("social");
      else if (!isPrerequisiteValid) setActiveTab("teaching");

      alert("Please fill all required fields correctly before submitting.");
    }
  };
  return (
    <>
      <section className="studentProfile">
        <div className="profileWraper">
          <div className="profileSideBar">
            <ul>
              <li>
                {" "}
                <a href="#" className="profileBook"></a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" className="profileWorkshop"></a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" className="profileCal"></a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" className="profileChat"></a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" className="profileFile"></a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" className="profileBell"></a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" className="profileSettings"></a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" className="profileFaq"></a>{" "}
              </li>
            </ul>
          </div>

          <div className="courseRight">
            <div className="couresWrapper">
              <div className="row">
                <div className="col-lg-2 col-md-5 col-sm-12">
                  <h2 className="headingTitle">Create your Course</h2>
                  <div className="courseTab">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "mission" ? "active" : ""
                          }`}
                          onClick={() => handleTabClick("mission")}
                          id="profile-tab"
                          data-bs-toggle="tab"
                          href="#mission"
                          role="tab"
                        >
                          Add/edit courses
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "vision" ? "active" : ""
                          }`}
                          id="password-tab"
                          onClick={() => handleTabClick("vision")}
                          data-bs-toggle="tab"
                          href="#vision"
                          role="tab"
                        >
                          Curriculum{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "social" ? "active" : ""
                          }`}
                          id="social-tab"
                          onClick={() => handleTabClick("social")}
                          data-bs-toggle="tab"
                          href="#social"
                          role="tab"
                        >
                          Faq
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "teaching" ? "active" : ""
                          }`}
                          id="teaching-tab"
                          onClick={() => handleTabClick("teaching")}
                          data-bs-toggle="tab"
                          href="#teaching"
                          role="tab"
                        >
                          Pre-requisite
                        </a>
                      </li>
                    </ul>
                    <button
                      className="btnGradient"
                      onClick={handleSubmitReview}
                    >
                      Submit for review
                    </button>
                  </div>
                </div>

                <div className="col-lg-10 col-md-5 col-sm-12">
                  <div className="tab-content">
                    <div
                      className={`tab-pane fade ${
                        activeTab === "mission" ? "show active" : ""
                      }`}
                      id="mission"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="teacherHelpCenter">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="helpCenterLeft">
                              <h3>Teacher Help Center</h3>
                              <p>
                                Ready to dive into teaching with Shams Training
                                or refresh your knowledge on effective
                                strategies? Explore some of the valuable
                                teaching resources we provide:
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="helpCenterRight">
                              <ul>
                                <li>
                                  <Link href="#">
                                    Start adding courses with our instructor
                                    guide.
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    Learn how instructors can add courses
                                    quickly.
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    Discover how to assist instructors in course
                                    management.
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="helpBtnRight">
                              <Link href="#" className="btnGradient">
                                Go to help Center
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <div className='profileForm addCourseForm'>
                        <form>
                          <div className="row">

                            <div className="addCourseHeading">
                              <h2 className="headingTitle">Course Detail</h2>
                              <p>Tell us about your class in detail to help students find it on understand what to expect. </p>
                            </div>

                            <div className="courseType">
                              <p>Course type</p>
                              <select className='form-control'>
                                <option value="">Pre-recorded Course</option>
                                <option value="live">Live (Online)</option>
                              </select>
                            </div>

                            <div className="coursePreview">
                              <p>Intro/ Preview Video</p>
                              <ul>
                                <li>Include a standalone introduction video that explains what the class is about.</li>
                                <li>Meet our standards for audio & video quality.</li>
                                <li>Limit self-promotion to first and last video lessons.</li>
                              </ul>

                              <input type="file" className="form-control" />

                            </div>

                            <div className="form-group col-12">
                              <label>Course title*</label>
                              <span>Use 1 or 2 related keywords, and mention 3-4 of the most important areas that you've covered during your course.</span>
                              <input type="text" className="form-control" placeholder="First Name" />
                            </div>

                            <div className="form-group col-12">
                              <label>Course Description*</label>
                              <span>Your title should be a mix of attention-grabbing, informative, and optimized for search</span>
                              <textarea type="text" className="form-control" placeholder="editor"></textarea>
                            </div>

                            <div className="form-group col-5">
                              <label>Course Duration*</label>
                              <input type="text" className="form-control" placeholder="2 Hours" />
                            </div>
                            <div className="form-group col-7">
                              <label>Learning Objectives*</label>
                              <input type="text" className="form-control" placeholder="Learning Objectives" />
                            </div>

                            <div className="addCourseHeading">
                              <h2 className="headingTitle">Trainer Input</h2>
                              <p>Tell us about your class in detail to help students find it on understand what to expect.  </p>
                            </div>

                            <div className="form-group col-12"><label>Core Concepts*</label>
                              <input type="text" className="form-control" placeholder="Core Concepts" />
                            </div>

                            <div className="form-group col-6"><label>Assessment Criteria*</label>
                              <input type="text" className="form-control" placeholder="Assessment Criteria" />
                            </div>

                            <div className="form-group col-6"><label>Suggested Activities*</label>
                              <input type="text" className="form-control" placeholder="Suggested" />
                            </div>

                            <div className="form-group col-4"><label>Class Language*</label>
                              <select className="form-control">
                                <option>Select language</option>
                                <option>English</option>
                              </select>
                            </div>

                            <div className="form-group col-4"><label>Category*</label>
                              <select className="form-control">
                                <option>Select Category</option>
                                <option>English</option>
                              </select>
                            </div>

                            <div className="form-group col-4"><label>Difficulty*</label>
                              <select className="form-control">
                                <option>Select Difficulty</option>
                                <option>English</option>
                              </select>
                            </div>

                            <div className="form-group col-4">
                              <label>Certificate*</label>
                              <div className="radioBtn">

                                <ul className="custom-radio">
                                  <li>
                                    <input type="radio" id="all" name="radio-group" />
                                    <label for="all">Yes</label>
                                  </li>
                                  <li>
                                    <input type="radio" id="none" name="radio-group" />
                                    <label for="none">No</label>
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>

                        </form>
                      </div> */}
                      <div className="profileForm addCourseForm">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="row">
                            <div className="addCourseHeading">
                              <h2 className="headingTitle">Course Detail</h2>
                              <p>
                                Tell us about your class in detail to help
                                students find it on understand what to expect.
                              </p>
                            </div>

                            <div className="courseType">
                              <p>Course type</p>
                              <select
                                className="form-control"
                                {...register("courseType")}
                              >
                                <option value="">Pre-recorded Course</option>
                                <option value="live">Live (Online)</option>
                              </select>
                              {errors.courseType && (
                                <p className="error-text">
                                  {errors.courseType.message}
                                </p>
                              )}
                            </div>

                            <div className="form-group col-12">
                              <label>Course title*</label>
                              <span>
                                Use 1 or 2 related keywords, and mention 3-4 of
                                the most important areas that you've covered
                                during your course.
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Course Title"
                                {...register("courseTitle")}
                              />
                              {errors.courseTitle && (
                                <p className="error-text">
                                  {errors.courseTitle.message}
                                </p>
                              )}
                            </div>

                            <div className="form-group col-12">
                              <label>Course Description*</label>
                              <span>
                                Your title should be a mix of
                                attention-grabbing, informative, and optimized
                                for search
                              </span>
                              <textarea
                                className="form-control"
                                placeholder="Course Description"
                                {...register("courseDescription")}
                              />
                              {errors.courseDescription && (
                                <p className="error-text">
                                  {errors.courseDescription.message}
                                </p>
                              )}
                            </div>

                            <div className="form-group col-5">
                              <label>Course Duration*</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="2 Hours"
                                {...register("courseDuration")}
                              />
                              {errors.courseDuration && (
                                <p className="error-text">
                                  {errors.courseDuration.message}
                                </p>
                              )}
                            </div>

                            <div className="form-group col-7">
                              <label>Learning Objectives*</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Learning Objectives"
                                {...register("learningObjectives")}
                              />
                              {errors.learningObjectives && (
                                <p className="error-text">
                                  {errors.learningObjectives.message}
                                </p>
                              )}
                            </div>

                            <div className="addCourseHeading">
                              <h2 className="headingTitle">Trainer Input</h2>
                              <p>
                                Tell us about your class in detail to help
                                students find it on understand what to expect.
                              </p>
                            </div>

                            <div className="form-group col-12">
                              <label>Core Concepts*</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Core Concepts"
                                {...register("coreConcepts")}
                              />
                              {errors.coreConcepts && (
                                <p className="error-text">
                                  {errors.coreConcepts.message}
                                </p>
                              )}
                            </div>

                            <div className="form-group col-6">
                              <label>Assessment Criteria*</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Assessment Criteria"
                                {...register("assessmentCriteria")}
                              />
                              {errors.assessmentCriteria && (
                                <p className="error-text">
                                  {errors.assessmentCriteria.message}
                                </p>
                              )}
                            </div>

                            <div className="form-group col-6">
                              <label>Suggested Activities*</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Suggested Activities"
                                {...register("suggestedActivities")}
                              />
                              {errors.suggestedActivities && (
                                <p className="error-text">
                                  {errors.suggestedActivities.message}
                                </p>
                              )}
                            </div>

                            <div className="form-group col-4">
                              <label>Class Language*</label>
                              <select
                                className="form-control"
                                {...register("classLanguage")}
                              >
                                <option value="">Select language</option>
                                <option value="english">English</option>
                              </select>
                              {errors.classLanguage && (
                                <p className="error-text">
                                  {errors.classLanguage.message}
                                </p>
                              )}
                            </div>

                            <div className="form-group col-4">
                              <label>Category*</label>
                              <select
                                className="form-control"
                                {...register("category")}
                              >
                                <option value="">Select Category</option>
                                <option value="english">English</option>
                              </select>
                              {errors.category && (
                                <p className="error-text">
                                  {errors.category.message}
                                </p>
                              )}
                            </div>

                            <div className="form-group col-4">
                              <label>Difficulty*</label>
                              <select
                                className="form-control"
                                {...register("difficulty")}
                              >
                                <option value="">Select Difficulty</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">
                                  Intermediate
                                </option>
                                <option value="advanced">Advanced</option>
                              </select>
                              {errors.difficulty && (
                                <p className="error-text">
                                  {errors.difficulty.message}
                                </p>
                              )}
                            </div>

                            <div className="form-group col-4">
                              <label>Certificate*</label>
                              <div className="radioBtn">
                                <ul className="custom-radio">
                                  <li>
                                    <input
                                      type="radio"
                                      id="yes"
                                      value="yes"
                                      {...register("certificate")}
                                    />
                                    <label htmlFor="yes">Yes</label>
                                  </li>
                                  <li>
                                    <input
                                      type="radio"
                                      id="no"
                                      value="no"
                                      {...register("certificate")}
                                    />
                                    <label htmlFor="no">No</label>
                                  </li>
                                </ul>
                              </div>
                              {errors.certificate && (
                                <p className="error-text">
                                  {errors.certificate.message}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="addFormBtn">
                            <button
                              type="button"
                              className="btnGradient"
                              onClick={handleNext}
                            >
                              Next
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* password tab start */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "vision" ? "show active" : ""
                      }`}
                      id="vision"
                      role="tabpanel"
                      aria-labelledby="password-tab"
                    >
                      <div className="profileForm addCourseForm">
                        <div className="addFaqHead">
                          <div className="addFaqText">
                            <h2 className="headingTitle">Curriculum</h2>
                            <p>
                              Here’s where you add course content—like lectures,
                              course sections, assignments, and more. Click a +
                              icon on the left to get started
                            </p>
                          </div>
                          <a href="" className="btnGradient">
                            Add New Section
                          </a>
                        </div>

                        <form>
                          {/* Section 1 start here: */}
                          <div className="resumeCard">
                            <div className="form-group col-12">
                              <div className="editDelete">
                                {" "}
                                <label>
                                  Section 1: <small>Introduction</small>
                                </label>{" "}
                                <Link href="" className="editIcon"></Link>{" "}
                                <Link href="" className="deleteIcon"></Link>{" "}
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Tilte "
                              />
                              <div className="newAddDelete">
                                <Link href="" className="closeIcon"></Link>
                                <Link href="" className="btnBorder plusAdd">
                                  {" "}
                                  <Image src={plusIcon} alt="plusIcon" /> Lesson
                                </Link>
                                <Link href="" className="btnBorder plusAdd">
                                  {" "}
                                  <Image src={plusIcon} alt="plusIcon" /> quiz
                                </Link>
                                <Link href="" className="btnBorder plusAdd">
                                  {" "}
                                  <Image src={plusIcon} alt="plusIcon" />{" "}
                                  Additional Materials
                                </Link>
                              </div>
                            </div>

                            <div className="courseQuiz">
                              <div className="addVideoWrap">
                                <div className="editDelete">
                                  {" "}
                                  <label>
                                    Lesson 1:{" "}
                                    <small> Introduction the course</small>
                                  </label>{" "}
                                  <Link href="" className="editIcon"></Link>{" "}
                                  <Link href="" className="deleteIcon"></Link>{" "}
                                </div>
                                <div className="UploadVideo">
                                  {" "}
                                  <Link href="" className="btnBorder plusAdd">
                                    {" "}
                                    <Image src={plusIcon} alt="plusIcon" />
                                    Upload
                                  </Link>{" "}
                                  <Link
                                    href=""
                                    className="arrowBottom"
                                  ></Link>{" "}
                                </div>
                              </div>

                              <div className="uploadVideoBordr">
                                <h4 className="uploadTitle">Upload Video</h4>
                                <div className="uploadVideoWrap">
                                  <div className="noFileSelect">
                                    No File select
                                  </div>
                                  <Link href="" className="btnBorder plusAdd">
                                    {" "}
                                    <Image src={plusIcon} alt="plusIcon" />
                                    Select Video
                                  </Link>
                                </div>

                                <div className="uploadVideoWrap">
                                  <div className="uploadVideoImg">
                                    <Image src={videoImg} alt="videoImg" />
                                  </div>
                                  <Image src={gradientCheck} alt="check" />
                                </div>
                              </div>
                            </div>

                            <div className="courseQuiz">
                              <div className="addVideoWrap">
                                <div className="editDelete">
                                  {" "}
                                  <label>
                                    Quiz 1: <small> lorem ipsum</small>
                                  </label>{" "}
                                  <Link href="" className="editIcon"></Link>{" "}
                                  <Link href="" className="deleteIcon"></Link>{" "}
                                </div>
                                <div className="UploadVideo">
                                  {" "}
                                  <Link
                                    href=""
                                    className="arrowBottom"
                                  ></Link>{" "}
                                </div>
                              </div>
                            </div>

                            <div className="courseQuiz">
                              <div className="editDelete">
                                {" "}
                                <label>
                                  Section 1: <small>Introduction</small>
                                </label>{" "}
                                <Link href="" className="editIcon"></Link>{" "}
                                <Link href="" className="deleteIcon"></Link>{" "}
                              </div>
                              <div className="form-group mt-3 col-12">
                                <label>Question 1:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Write question"
                                />
                              </div>

                              <div className="learnAbout">
                                <label className="subTitle">
                                  Select Answer
                                </label>
                                <div className="student-radio">
                                  <label className="custom-radio">
                                    <input type="radio" name="radio" />
                                    <span className="radio-btn">
                                      <i></i>
                                      <div className="hobbies-icon">
                                        Add Answer
                                      </div>
                                    </span>
                                  </label>
                                  <label className="custom-radio">
                                    <input type="radio" name="radio" />
                                    <span className="radio-btn">
                                      <i></i>
                                      <div className="hobbies-icon">
                                        Add Answer
                                      </div>
                                    </span>
                                  </label>
                                  <label className="custom-radio">
                                    <input type="radio" name="radio" />
                                    <span className="radio-btn">
                                      <i></i>
                                      <div className="hobbies-icon">
                                        Add Answer
                                      </div>
                                    </span>
                                  </label>
                                  <label className="custom-radio">
                                    <input type="radio" name="radio" />
                                    <span className="radio-btn">
                                      <i></i>
                                      <div className="hobbies-icon">
                                        Add Answer
                                      </div>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="formBtn">
                              <a href="" className="btnBorder plusAdd">
                                {" "}
                                <Image src={plusIcon} alt="plusIcon" />
                                Cancel
                              </a>
                              <a href="" className="btnGradient">
                                Confirm
                              </a>
                            </div>
                          </div>
                          {/* Section 2 start here: */}
                          <div className="resumeCard">
                            <div className="form-group col-12">
                              <div className="editDelete">
                                {" "}
                                <label>Section 2: </label>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Tilte "
                              />
                            </div>

                            <div className="formBtn">
                              <a href="" className="btnBorder plusAdd">
                                {" "}
                                <Image src={plusIcon} alt="plusIcon" /> Cancel
                              </a>
                              <a href="" className="btnGradient">
                                Add Section
                              </a>
                            </div>
                          </div>
                          <a href="" className="btnBorder plusAdd">
                            {" "}
                            <Image src={plusIcon} alt="plusIcon" /> Add New
                            Section
                          </a>
                        </form>
                      </div>

                      <div className="addFormBtn">
                        <button
                          type="button"
                          className="btnBorder"
                          onClick={handlePrevious}
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          className="btnGradient"
                          onClick={handleNext}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                    {/* social tab start */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "social" ? "show active" : ""
                      }`}
                      id="social"
                      role="tabpanel"
                      aria-labelledby="social-tab"
                    >
                      <div className="profileForm addCourseForm">
                        <div className="addFaqHead">
                          <div className="addFaqText">
                            <h2 className="headingTitle">Faq</h2>
                            <p>
                              Here’s where you add course content—like lectures,
                              course sections, assignments, and more. Click a +
                              icon on the left to get started
                            </p>
                          </div>
                          <a href="" className="btnGradient">
                            Save
                          </a>
                        </div>

                        <FAQSection register={register} errors={errors} />
                      </div>

                      <div className="addFormBtn">
                        <button
                          type="button"
                          className="btnBorder"
                          onClick={handlePrevious}
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          className="btnGradient"
                          onClick={handleNext}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                    {/* teaching tab start */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "teaching" ? "show active" : ""
                      }`}
                      id="teaching"
                      role="tabpanel"
                      aria-labelledby="teaching-tab"
                    >
                      <div className="profileForm addCourseForm">
                        <div className="addFaqHead">
                          <div className="addFaqText">
                            <h2 className="headingTitle">Pre-requisite</h2>
                            <p>
                              Here’s where you add course content—like lectures,
                              course sections, assignments, and more. Click a +
                              icon on the left to get started
                            </p>
                          </div>
                          <a href="" className="btnGradient">
                            Save
                          </a>
                        </div>

                        <PrerequisiteSection
                          register={register}
                          errors={errors}
                        />
                      </div>
                      <div className="addFormBtn">
                        <button
                          type="button"
                          className="btnBorder"
                          onClick={handlePrevious}
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          className="btnGradient"
                          onClick={handleSubmitReview}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
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

export default page;
