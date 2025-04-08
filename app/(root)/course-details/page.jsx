import Link from 'next/link'
import React from 'react'
import whatNeed1 from '../../assets/images/need-1.svg';
import whatNeed2 from '../../assets/images/need-2.svg';
import whatNeed3 from '../../assets/images/need-3.svg';
import whatNeed4 from '../../assets/images/need-4.svg';
import whatNeed5 from '../../assets/images/need-5.svg';
import shareIcon from '../../assets/images/share-icon.svg';
import courseDetails from '../../assets/images/course-details.svg';
import starIcon from '../../assets/images/stars.svg';
import certificateImg from '../../assets/images/certificate.svg';
import instuImg from '../../assets/images/instruter.png';
import threeDot from '../../assets/images/threeDot.svg';
import ratingStar from '../../assets/images/rating-star.svg';
import shareIcon1 from '../../assets/images/share-icon1.svg';
import shareIcon2 from '../../assets/images/share-icon2.svg';
import shareIcon3 from '../../assets/images/share-icon3.svg';
import shareIcon4 from '../../assets/images/share-icon4.svg';
import heartIcon from '../../assets/images/heart-icon.svg';
import playIcon from '../../assets/images/play-icon.svg';
import pauseIcon from '../../assets/images/pause.svg';


import Image from "next/image";

const page = () => {
  return (
    <>
      {/* rating modal start here */}
      <div className="modal fade"
        id="rating-modal"
        aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centere">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <div className="ratingTop">
                <Image src={ratingStar} alt="star" width={140} /> <h2>4.0 course rating <span>61 Ratings , 49 Reviews</span></h2>
              </div>
              <div className="ratingCard">
                <div className="ratingHead">
                  <div className="ratingLeft">
                    <div className="userImg">
                      <Image src={instuImg} alt="instuImg" />
                    </div>
                    <div className="userContant">
                      <h3>John Desuza.</h3>
                      <div className="weekAgo">
                        <Image src={ratingStar} alt="star" width={100} /> 1 Week ago
                      </div>
                    </div>
                  </div>
                  <div className="ratingRight">
                    <Image src={threeDot} alt="star" />
                  </div>
                </div>
                <p>I am really enjoying the course. well curated and presented with life in all the slides assembled.</p>
              </div>

              <div className="ratingCard">
                <div className="ratingHead">
                  <div className="ratingLeft">
                    <div className="userImg">
                      <Image src={instuImg} alt="instuImg" />
                    </div>
                    <div className="userContant">
                      <h3>John Desuza.</h3>
                      <div className="weekAgo">
                        <Image src={ratingStar} alt="star" width={100} /> 1 Week ago
                      </div>
                    </div>
                  </div>
                  <div className="ratingRight">
                    <Image src={threeDot} alt="star" />
                  </div>
                </div>
                <p>I am really enjoying the course. well curated and presented with life in all the slides assembled.</p>
              </div>


              <div className="ratingCard">
                <div className="ratingHead">
                  <div className="ratingLeft">
                    <div className="userImg">
                      <Image src={instuImg} alt="instuImg" />
                    </div>
                    <div className="userContant">
                      <h3>John Desuza.</h3>
                      <div className="weekAgo">
                        <Image src={ratingStar} alt="star" width={100} /> 1 Week ago
                      </div>
                    </div>
                  </div>
                  <div className="ratingRight">
                    <Image src={threeDot} alt="star" />
                  </div>
                </div>
                <p>I am really enjoying the course. well curated and presented with life in all the slides assembled.</p>
              </div>

              <div className="ratingCard">
                <div className="ratingHead">
                  <div className="ratingLeft">
                    <div className="userImg">
                      <Image src={instuImg} alt="instuImg" />
                    </div>
                    <div className="userContant">
                      <h3>John Desuza.</h3>
                      <div className="weekAgo">
                        <Image src={ratingStar} alt="star" width={100} /> 1 Week ago
                      </div>
                    </div>
                  </div>
                  <div className="ratingRight">
                    <Image src={threeDot} alt="star" />
                  </div>
                </div>
                <p>I am really enjoying the course. well curated and presented with life in all the slides assembled.</p>
              </div>


              <a href="#" className="showMoreReview">
                Show More Reviews
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* share modal start here */}
      <div className="modal fade"
        id="share-modal">
        <div className="modal-dialog modal-md modal-dialog-centere">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <div className="socialShare">
                <h3>Share Course</h3>
                <form className="sup-form">
                  <input type="email" className="form-control sigmup-me" placeholder="http://www.shamstraing.com/share" required="required" />
                  <button type="submit" className="">Copy</button>
                </form>
                <ul className='shareIcon'>
                  <li><Image src={shareIcon1} alt='shareIcon' /></li>
                  <li><Image src={shareIcon2} alt='shareIcon' /></li>
                  <li><Image src={shareIcon3} alt='shareIcon' /></li>
                  <li><Image src={shareIcon4} alt='shareIcon' /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="courseDetailsTop">
        <div className="container">
          <div className='courseDetailWrap'>
            <div className='courseImg'>
              <Image src={courseDetails} alt='' className='img-fluid' />
              <a href="#" className="playPauseBtn">
                  <Image src={playIcon} alt="Play" />
                  {/* <Image src={pauseIcon} alt="Pause" style="display:none;" /> */}
                </a>
            </div>
            <div className='courseConatnt'>
              <h2>Public Speaking Course</h2>
              <span className='courseAuthor'>A Course By JOHN. D</span>
              <p className='coursetext'>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate. </p>

              <ul className="course-review">
                <li><span className="hour-min">1 Hr 22 Min</span></li>

                <li>
                  <span className="cstar">
                    4.0 <Image src={starIcon} alt="star" width={15} height={15} />
                  </span>
                </li>
                <li>
                  <span className="cview">100+ learners</span>
                </li>
              </ul>

              <ul className="course-review">
                <li><span className="lang">English</span></li>
                <li>
                  <span className="diffi">Difficulty: <span className=''> Advance</span></span>
                </li>
              </ul>

              <div className="startSubscribe">
                <div className="startLeft">
                  <p>Subscribe to SHAMS top courses</p>
                  <h4>Starting at AED 85 per month</h4>
                </div>
                <Link href="#" className="btnGradient">Start Subscribtion</Link>
              </div>

              <span className="dividers">OR</span>

              <div className="course-card-bottom">
                <div className="course-price">
                  <span className="current-price">AED 40</span>
                  <span className="off-price">
                    <span>AED 50</span> 10% off
                  </span>
                </div>
              </div>
              <div className='courseBtn'>
                <Link href="#" className="btnBorder">
                  Enroll Now
                </Link>
                <Link href="#" className="btnGradient">
                  Add To Cart
                </Link>
                <Link href="#" className="btnBorder heartIcon">
                 <Image src={heartIcon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section><section className="courseDetailTabs">
        <div className="container">
          <div className='courseTabs'>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="course-tab" data-bs-toggle="tab" href="#course" role="tab">Course Overview</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="schedule-tab" data-bs-toggle="tab" href="#schedule" role="tab">Schedule</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="instructor-tab" data-bs-toggle="tab" href="#instructor" role="tab">Instructor</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="ratings-tab" data-bs-toggle="tab" href="#ratings" role="tab">Ratings and Reviews</a>
              </li>
            </ul>


            <div className="tab-content">
              <div className="tab-pane fade show active" id="course" role="tabpanel" aria-labelledby="course-tab">
                <div className='tabInner'>
                  <div className='courseOverview'>
                    <h3 className='courseTitle'>About This Class</h3>
                    <ul className='aboutList'>
                      <li>Engage with live webinars led by industry experts to enhance your copywriting skills.</li>
                      <li>Gain practical experience through real-world projects and case studies.</li>
                      <li>Receive personalized feedback from instructors to improve your writing techniques.</li>
                      <li>Access a library of resources including e-books, templates, and tools for copywriters.</li>
                      <li>Network with fellow students and professionals in the copywriting field.</li>
                      <li>Participate in group discussions and workshops to refine your copywriting abilities.</li>
                    </ul>
                    <Link href="#" data-bs-toggle="modal" data-bs-target="#share-modal" className='shareBtn'><Image src={shareIcon} alt='share' />  Share</Link>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="schedule" role="tabpanel" aria-labelledby="schedule-tab">
                <div className='tabInner'>
                  <div className="courseShedule">
                    <div className="courseCards active">
                      <div className="courseHead">
                        <div className="courseIntro"> <span>Section 1:</span><span>Introduction to Course</span></div>
                        <div className="courseTime">22.22</div>
                      </div>
                      <div className="courseBody">
                      <div className="courseLession">
                        <div className="courseName videoIcon">Welcome To The Course</div>
                        <div className="courseTime">22.22</div>
                      </div>
                      <div className="courseLession">
                        <div className="courseName videoIcon">Thank You Message from Chris</div>
                        <div className="courseTime">22.22</div>
                      </div>
                      <div className="courseLession">
                        <div className="courseName fileIcon">Course Manuall</div>
                        <div className="courseTime">Private</div>
                      </div>
                      </div>
                    </div>


                    <div className="courseCards">
                      <div className="courseHead">
                        <div className="courseIntro"> <span>Section 2:</span><span>Torem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>
                        <div className="courseTime">22.22</div>
                      </div>
                    </div>


                    <div className="courseCards">
                      <div className="courseHead">
                        <div className="courseIntro"> <span>Section 3:</span><span>Torem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>
                        <div className="courseTime">22.22</div>
                      </div>
                    </div>


                    <div className="courseCards">
                      <div className="courseHead">
                        <div className="courseIntro"> <span>Section 4:</span><span>Torem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>
                        <div className="courseTime">22.22</div>
                      </div>
                    </div>

                    <div className="courseCards">
                      <div className="courseHead">
                        <div className="courseIntro"> <span>Section 5:</span><span>Torem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>
                        <div className="courseTime">22.22</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                <div className='tabInner'>
                  <div className='instructorOverview'>
                    <div className="instructorTop">
                      <div className="instuImg">
                        <Image src={instuImg} alt="" />
                      </div>
                      <div className="instuContant">
                        <ul>
                          <li className="instReview">250 Reviews</li>
                          <li className="instRating">4.5 Instructor Rating</li>
                          <li className="instStudent">451 Students</li>
                          <li className="instCourse">Courses offered: 10</li>
                        </ul>
                      </div>
                    </div>

                    <div className="instDetails">
                      <h2>John .d | <span>  Engineer | AI Enthusiast</span></h2>
                      <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate</p>
                    </div>

                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="ratings" role="tabpanel" aria-labelledby="ratings-tab">
                <div className='tabInner'>
                  <div className='ratingOverview'>
                    <ul>
                      <li>
                        100+
                        <span>Views</span>
                      </li>
                      <li>
                        199
                        <span>enrollment</span>
                      </li>

                      <li>
                        <div className="ratingStar"> 4.0 <Image src={starIcon} alt="star" width={200} height={30} /> </div>
                        <span className="text-left">61 Ratings , 49 Reviews </span>
                      </li>
                    </ul>

                    <a href="#" className="showAllReview" data-bs-toggle="modal" data-bs-target="#rating-modal">Show All Review</a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><section className="whatNeed">
        <div className="container">
          <div className="row align-items-center">
            <div className="sectionTitle">
              <h2 className="title">“What You Need to Get Started”</h2>
            </div>

            <div className="need-wrapper">
              <div className="need-item">
                <div className="needImg">
                  <Image src={whatNeed1} alt="" />
                </div>
                <p>A basic understanding of English communication.</p>
              </div>

              <div className="need-item">
                <div className="needImg">
                  <Image src={whatNeed2} alt="" />
                </div>
                <p>Access to a computer, tablet, or smartphone.</p>
              </div>

              <div className="need-item">
                <div className="needImg">
                  <Image src={whatNeed3} alt="" />
                </div>
                <p>A stable internet connection for live sessions.</p>
              </div>

              <div className="need-item">
                <div className="needImg">
                  <Image src={whatNeed4} alt="" />
                </div>
                <p>A notebook or digital tool for taking notes .</p>
              </div>

              <div className="need-item">
                <div className="needImg">
                  <Image src={whatNeed5} alt="" />
                </div>
                <p>A few hours per week to dedicate to learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section><section className="beCertificate">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <Image src={certificateImg} alt='certificateImg' className='becomeImg' />
            </div>

            <div className="col-xl-8 col-lg-8 col-md-6">
              <div className='becomeText'>
                <h3>Become a certified public Speaker</h3>
                <p>Earn your certificate upon course completion and feedback submission.</p>
              </div>
            </div>
          </div>
        </div>
      </section><section className="faqSection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="faq__content">
                <div className="sectionTitle">
                  <h2 className="title">Fequently asked questions</h2>
                </div>
                <div className="faq__wrap">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Morem ipsum dolor sit amet, consectetur adipiscing elit.Morem ipsum dolor sit amet, consectetur adipiscing elit.Morem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                          Why choose us for your education?
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseTwo">
                          Why choose us for your education?
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapseTwo">
                          Why choose us for your education?
                        </button>
                      </h2>
                      <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>

  )
}

export default page