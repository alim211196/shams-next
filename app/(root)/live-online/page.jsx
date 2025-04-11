// import Link from 'next/link'
import Link from "next/link";
import React from "react";
import Image from "next/image";
// import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min';
import plusIcon from "../../assets/images/plus-circle.svg";

const page = () => {
  return (
    <>
      {/* Create Live Session start here */}
      <div
        className="modal fade customModal"
        id="create-live-session"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centere">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modalHeader">
                <h5 className="modal-title">Create Live Session</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="row">
                <div className="form-group col-12">
                  <label>Add Tittle</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add"
                  />
                </div>

                <div className="form-group col-6">
                  <label>Date</label>
                  <input type="date" className="form-control" placeholder="" />
                </div>

                <div className="form-group col-6">
                  <label>Time</label>
                  <input type="time" className="form-control" placeholder="" />
                </div>

                <div className="form-group col-6">
                  <label>Time Zone</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Gulf Standart Timezone (GST)"
                  />
                </div>

                <div className="form-group col-6">
                  <label>Duration</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="60 Minutes"
                  />
                </div>

                <div className="addFormBtn">
                  <a href="" className="btnGradient">
                    Add Sesson
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                          className="nav-link active"
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
                          className="nav-link"
                          id="password-tab"
                          data-bs-toggle="tab"
                          href="#vision"
                          role="tab"
                        >
                          Curriculum{" "}
                        </a>
                      </li>
                    </ul>
                    <Link href="/submit-review" className="btnGradient">
                      Submit for review
                    </Link>
                  </div>
                </div>

                <div className="col-lg-10 col-md-5 col-sm-12">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
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

                      <div className="profileForm addCourseForm">
                        <form>
                          <div className="row">
                            <div className="addCourseHeading">
                              <h2 className="headingTitle">Course Detail</h2>
                              <p>
                                Tell us about your class in detail to help
                                students find it on understand what to expect.{" "}
                              </p>
                            </div>

                            <div className="courseType mb-4">
                              <p>Course type</p>
                              <select className="form-control">
                                <option value="">Live (Online)</option>
                                <option value="academy">Academy</option>
                              </select>
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
                                placeholder="First Name"
                              />
                            </div>

                            <div className="form-group col-12">
                              <label>Course Description*</label>
                              <span>
                                Your title should be a mix of
                                attention-grabbing, informative, and optimized
                                for search
                              </span>
                              <textarea
                                type="text"
                                className="form-control"
                                placeholder="editor"
                              ></textarea>
                            </div>

                            <div className="form-group col-5">
                              <label>Course Duration*</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="2 Hours"
                              />
                            </div>
                            <div className="form-group col-7">
                              <label>Learning Objectives*</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Learning Objectives"
                              />
                            </div>

                            <div className="addCourseHeading">
                              <h2 className="headingTitle">Trainer Input</h2>
                              <p>
                                Tell us about your class in detail to help
                                students find it on understand what to expect.{" "}
                              </p>
                            </div>

                            <div className="form-group col-12">
                              <label>Core Concepts*</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Core Concepts"
                              />
                            </div>

                            <div className="form-group col-6">
                              <label>Assessment Criteria*</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Assessment Criteria"
                              />
                            </div>

                            <div className="form-group col-6">
                              <label>Suggested Activities*</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Suggested"
                              />
                            </div>

                            <div className="form-group col-4">
                              <label>Class Language*</label>
                              <select className="form-control">
                                <option>Select language</option>
                                <option>English</option>
                              </select>
                            </div>

                            <div className="form-group col-4">
                              <label>Category*</label>
                              <select className="form-control">
                                <option>Select Category</option>
                                <option>English</option>
                              </select>
                            </div>

                            <div className="form-group col-4">
                              <label>Difficulty*</label>
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
                                    <input
                                      type="radio"
                                      id="all"
                                      name="radio-group"
                                    />
                                    <label for="all">Yes</label>
                                  </li>
                                  <li>
                                    <input
                                      type="radio"
                                      id="none"
                                      name="radio-group"
                                    />
                                    <label for="none">No</label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div className="addFormBtn">
                        <a href="" className="btnBorder">
                          Previous
                        </a>
                        <a href="" className="btnGradient">
                          Next
                        </a>
                      </div>
                    </div>
                    {/* password tab start */}
                    <div
                      className="tab-pane fade"
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
                            Save
                          </a>
                        </div>

                        <form>
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
                                <Link
                                  href=""
                                  data-bs-toggle="modal"
                                  data-bs-target="#create-live-session"
                                  className="btnBorder plusAdd"
                                >
                                  {" "}
                                  <Image src={plusIcon} alt="plusIcon" /> Live
                                  session{" "}
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
                              <div className="editDelete">
                                {" "}
                                <label>
                                  Lesson 1:{" "}
                                  <small> Introduction the course</small>
                                </label>{" "}
                                <Link href="" className="editIcon"></Link>{" "}
                                <Link href="" className="deleteIcon"></Link>{" "}
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
                              <a href="" className="btnBorder">
                                Cancel
                              </a>
                              <a href="" className="btnGradient">
                                Confirm
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
                        <a href="" className="btnBorder">
                          Previous
                        </a>
                        <a href="" className="btnGradient">
                          Next
                        </a>
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
