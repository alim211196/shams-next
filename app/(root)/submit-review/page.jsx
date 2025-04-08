// import Link from 'next/link'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
// import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min';
import plusIcon from '../../assets/images/plus-circle.svg';
import learnReview from '../../assets/images/learnReview.png';


const page = () => {
  return (
    <>
      <section className="studentProfile">
        <div className="profileWraper">
          <div className='profileSideBar'>
            <ul>
              <li> <a href="#" className="profileBook"></a> </li>
              <li> <a href="#" className="profileCal"></a> </li>
              <li> <a href="#" className="profileChat"></a> </li>
              <li> <a href="#" className="profileFile"></a> </li>
              <li> <a href="#" className="profileSettings"></a> </li>
              <li> <a href="#" className="profileFaq"></a> </li>
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
                        <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#mission" role="tab">Add/edit courses</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="password-tab" data-bs-toggle="tab" href="#vision" role="tab">Curriculum </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="social-tab" data-bs-toggle="tab" href="#social" role="tab">Faq</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="teaching-tab" data-bs-toggle="tab" href="#teaching" role="tab">Pre-requisite</a>
                      </li>
                    </ul>
                    <Link href="#" className="btnGradient">Submit for review</Link>
                  </div>
                </div>

                <div className="col-lg-10 col-md-5 col-sm-12">
                  <div className="tab-content">
                    <div className='profileForm addCourseForm'>
                      <form>
                        <div className="row">

                          <div className="addFaqHead">
                            <div className="addFaqText">
                              <h2 className="headingTitle">Submit for review</h2>
                            </div>
                            <a href="" className="btnGradient">Save</a>
                          </div>


                          <div className="addCourseHeading">
                            <h2 className="headingTitle">Course Detail</h2>
                            <p>Tell us about your class in detail to help students find it on understand what to expect. </p>
                          </div>

                          <div className="courseType">
                            <p>Course type</p>
                            <select className='form-control'>
                              <option value="">Pre-recorded Course</option>
                              <option value="academy">Academy</option>
                            </select>
                          </div>

                          <div className="coursePreview">
                            <p>Intro/ Preview Video</p>
                            <ul>
                              <li>Include a standalone introduction video that explains what the class is about.</li>
                              <li>Meet our standards for audio & video quality.</li>
                              <li>Limit self-promotion to first and last video lessons.</li>
                            </ul>
                            <div className="previewImg">
                              <Image src={learnReview} alt="learnReview" />
                            </div>
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
                    </div>

                    <div className='profileForm addCourseForm'>
                      <div className="addFaqHead">
                        <div className="addFaqText">
                          <h2 className="headingTitle">Curriculum</h2>
                          <p>Here’s where you add course content—like lectures, course sections, assignments, and more. Click a + icon on the left to get started</p>
                        </div>
                      </div>

                      <form>
                        <div className="resumeCard">
                          <div className="form-group col-12">
                            <div className="editDelete"> <label>Section 1: <small>Introduction</small></label> <Link href="" className="editIcon"></Link> <Link href="" className="deleteIcon"></Link> </div>
                            <input type="text" className="form-control" placeholder="Enter Your Tilte " />

                          </div>

                          <div className="courseQuiz">
                            <div className="editDelete"> <label>Lesson 1: <small> Introduction the course</small></label> <Link href="" className="editIcon"></Link> <Link href="" className="deleteIcon"></Link> </div>

                          </div>


                        </div>

                      </form>
                    </div>

                    <div className='profileForm addCourseForm'>

                      <div className="addFaqHead">
                        <div className="addFaqText">
                          <h2 className="headingTitle">Faq</h2>
                          <p>Here’s where you add course content—like lectures, course sections, assignments, and more. Click a + icon on the left to get started</p>
                        </div>

                      </div>

                      <form>

                        <div className="form-group col-12 faqSection">
                          <label>1. Question</label>
                          <input type="text" className="form-control" placeholder="Dorem ipsum dolor sit amet, consectetur adipiscing elit." />
                          <textarea type="text" className="form-control" placeholder="Horem ipsum dolor sit amet, consectetur adipiscing elit."></textarea>
                        </div>

                        <div className="form-group col-12 faqSection">
                          <label>2. Question</label>
                          <input type="text" className="form-control" placeholder="Dorem ipsum dolor sit amet, consectetur adipiscing elit." />
                          <textarea type="text" className="form-control" placeholder="Horem ipsum dolor sit amet, consectetur adipiscing elit."></textarea>
                        </div>


                        <div className="col-12 faqSection">
                          <label>3. Question</label>
                          <input type="text" className="form-control" placeholder="Dorem ipsum dolor sit amet, consectetur adipiscing elit." />
                          <textarea type="text" className="form-control" placeholder="Horem ipsum dolor sit amet, consectetur adipiscing elit."></textarea>
                        </div>

                      </form>
                    </div>

                    <div className="addFormBtn">
                        <a href="" className="btnBorder">Previous</a>
                        <a href="" className="btnGradient">Submit Fo review</a>
                      </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default page