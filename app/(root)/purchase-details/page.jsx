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
import saveIcon from '../../assets/images/save-icon.svg';
import earnImg from '../../assets/images/earn-img.svg';


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
      <section className="purchaseDetailsTop">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-7">
              <div className="purchaseVidoo">
                <div className='courseImg'>
                  <Image src={courseDetails} alt='' className='img-fluid' />
                  {/* <a href="#" className="playPauseBtn">
                    <Image src={playIcon} alt="Play" />
                    {/* <Image src={pauseIcon} alt="Pause" style="display:none;" />
                  </a> */}
                </div>
                <div className="courseName">
                  <h2 className="subHeading">Public Speaking Course</h2>
                  <p>A Course By JOHN. D</p>
                </div>

              </div>
            </div>

            <div className="col-sm-12 col-md-5 col-lg-5">
              <div className="purchaseReview">
                <div className="purchaseShedule">

                  <h4 className="newLession">7 Sections (4 h 8m)</h4>

                  <div className="courseCards active">
                    <div className="courseHead">
                      <div className="courseIntro"> <span>Section 1:</span><span>Introduction </span></div>
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
                      <div className="courseIntro"> <span>Section 2:</span><span>Torem ips</span></div>
                      <div className="courseTime">22.22</div>
                    </div>
                  </div>


                  <div className="courseCards">
                    <div className="courseHead">
                      <div className="courseIntro"> <span>Section 3:</span><span>Torem ips.</span></div>
                      <div className="courseTime">22.22</div>
                    </div>
                  </div>


                  <div className="courseCards">
                    <div className="courseHead">
                      <div className="courseIntro"> <span>Section 4:</span><span>Torem ips</span></div>
                      <div className="courseTime">22.22</div>
                    </div>
                  </div>

                  <div className="courseCards">
                    <div className="courseHead">
                      <div className="courseIntro"> <span>Section 5:</span><span>Torem ips</span></div>
                      <div className="courseTime">22.22</div>
                    </div>
                  </div>
                </div>

                <div className="earnComplete">
                  <div className="earnImg">
                    <Image src={earnImg} alt="" className="img-fluid" />
                  </div>
                  <div className="earnContant">
                    <label for="progress-bar-1">Earn a Complete a Class badge by completing all lessons.</label>
                    <progress id="progress-bar-1" value="70" max="100">70 %</progress>
                    <output id="progress-output-1">70%</output>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="courseDetailTabs">
        <div className="container">
          <div className='courseTabs'>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="course-tab" data-bs-toggle="tab" href="#course" role="tab">Course Overview</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="schedule-tab" data-bs-toggle="tab" href="#schedule" role="tab">Course Content</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="instructor-tab" data-bs-toggle="tab" href="#instructor" role="tab">Reviews</a>
              </li>
            </ul>

            <div className="saveShare">
            <Link href="#" data-bs-toggle="modal" data-bs-target="#share-modal" className='shareBtn'><Image src={shareIcon} alt='share' /> Leave a rating</Link>
              <Link href="#" data-bs-toggle="modal" data-bs-target="#share-modal" className='shareBtn'><Image src={saveIcon} alt='share' />  Save</Link>
              <Link href="#" data-bs-toggle="modal" data-bs-target="#share-modal" className='shareBtn'><Image src={shareIcon} alt='share' />  Share</Link>
            </div>

            <div className="tab-content">
              <div className="tab-pane fade show active" id="course" role="tabpanel" aria-labelledby="course-tab">
                <div className='tabInner'>

                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-7">
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

                      </div>

                      <div className='description'>
                        <h3 className='courseTitle'>Description </h3>
                        <ul className='descList'>
                          <li>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </li>
                          <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</li>
                          <li>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </li>
                          <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</li>
                        </ul>

                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-5">
                      <div className="courseOverview">
                        <div className='instructorOverview'>
                          <div className="instructorTop">
                            <div className="instuImg">
                              <Image src={instuImg} alt="" className="img-fluid" />
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

                        <div className="courseItems">
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
                            <li><span className="lang">English</span></li>
                            <li>
                              <span className="diffi">Difficulty: <span className=''> Advance</span></span>
                            </li>
                          </ul>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="schedule" role="tabpanel" aria-labelledby="schedule-tab">
                <div className='tabInner'>
                  <div className="purchaseReview">
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
              </div>

              <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                <div className='tabInner'>
                  <div className="purchaseReview">
                    <h3 className="subHeading">Reviews</h3>

                    <div className="reviewFilter">
                      <div className="searchInput">
                        <input type="text" placeholder="Search Reviews..." />
                        <button type="submit" className='searchIcon'></button>
                      </div>
                      <div className="sortBy">
                        <label>Sort by:</label>
                        <select className="from-control">
                          <option>All Rating</option>
                          <option>All Rating</option>
                          <option>All Rating</option>
                        </select>
                      </div>
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