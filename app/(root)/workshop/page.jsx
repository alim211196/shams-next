// import Link from 'next/link'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
// import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min';
import plusIcon from '../../assets/images/plus-circle.svg';
import facProductImg from '../../assets/images/facility-product.png';
import meetingrRoom from '../../assets/images/meetingroom.svg';
import commonArea from '../../assets/images/commonarea.svg';
import businesslounge from '../../assets/images/businesslounge.svg';
import elevator from '../../assets/images/elevator.svg';
import cafe from '../../assets/images/cafe.svg';




const page = () => {
  return (
    <>


      {/* Create Live Session start here */}
      <div className="modal fade customModal" id="create-live-session" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centere">
          <div className="modal-content">

            <div className="modal-body">
              <div className="modalHeader">
                <h5 className="modal-title">Create Live Session</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="row">
                <div className="form-group col-12">
                  <label>Add Tittle</label>
                  <input type="text" className="form-control" placeholder="Add" />
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
                  <input type="text" className="form-control" placeholder="Gulf Standart Timezone (GST)" />
                </div>

                <div className="form-group col-6">
                  <label>Duration</label>
                  <input type="text" className="form-control" placeholder="60 Minutes" />
                </div>

                <div className="addFormBtn">
                  <a href="" className="btnGradient">Add Sesson</a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

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
                        <a className="nav-link active" id="profile-tab" data-bs-toggle="tab" href="#mission" role="tab">Add Workshop Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="password-tab" data-bs-toggle="tab" href="#vision" role="tab">Book A Facitlity</a>
                      </li>

                    </ul>
                    <Link href="#" className="btnGradient">Submit for review</Link>
                  </div>
                </div>

                <div className="col-lg-10 col-md-5 col-sm-12">
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="mission" role="tabpanel" aria-labelledby="profile-tab">

                      <div className="teacherHelpCenter">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="helpCenterLeft">
                              <h3>Teacher Help Center</h3>
                              <p>Ready to dive into teaching with Shams Training or refresh your knowledge on effective strategies? Explore some of the valuable teaching resources we provide:</p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="helpCenterRight">
                              <ul>
                                <li><Link href="#">Start adding courses with our instructor guide.</Link></li>
                                <li><Link href="#">Learn how instructors can add courses quickly.</Link></li>
                                <li><Link href="#">Discover how to assist instructors in course management.</Link></li>
                              </ul>
                            </div>
                            <div className="helpBtnRight">
                              <Link href="#" className="btnGradient">Go to help Center</Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='profileForm addCourseForm'>
                        <form>
                          <div className="row">

                            <div className="addCourseHeading">
                              <h2 className="headingTitle">Workshop Detail</h2>
                              <p>Tell us about your class in detail to help students find it on understand what to expect.  </p>
                            </div>

                            <div className="form-group col-12">
                              <label>Workshop title*</label>
                              <span>Your title should be a mix of attention-grabbing, informative, and optimized for search</span>
                              <input type="text" className="form-control" placeholder="editor" />
                            </div>

                            <div className="form-group col-12">
                              <label>Workshop Description*</label>
                              <span>Use 1 or 2 related keywords, and mention 3-4 of the most important areas that you've covered during your course.</span>
                              <textarea type="text" className="form-control" placeholder="editor"></textarea>
                            </div>

                            <div className="form-group col-5">
                              <label>Workshop Duration*</label>
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

                      <div className="addFormBtn">
                        <a href="" className="btnBorder">Previous</a>
                        <a href="" className="btnGradient">Submit for review</a>
                      </div>

                    </div>
                    {/* password tab start */}
                    <div className="tab-pane fade" id="vision" role="tabpanel" aria-labelledby="password-tab">
                      <div className='profileForm addCourseForm bookFacility'>

                        <h3 className="bookHeading">Book A Facitlity</h3>

                        <div className="filter-wrapper">
                          <div className="filter-left">

                            <div className="select-item">
                              <select className='form-control'>
                                <option value="">Space Type</option>
                                <option value="academy">Academy</option>
                              </select>
                            </div>

                            <div className="select-item">
                              <select className='form-control'>
                                <option value="">Amenities</option>
                              </select>
                            </div>

                            <div className="select-item">
                              <select className='form-control'>
                                <option value="">Capacity</option>
                              </select>
                            </div>

                            <div className="select-item">
                              <select className='form-control'>
                                <option value="">Price</option>
                                <option value="html">HTML</option>
                              </select>
                            </div>
                          </div>
                          <Link href='#' className='search-btn'> <i></i> </Link>
                        </div>

                        <h2 className="sorryText">Sorry, it seems there are currently no rooms available!</h2>

                      </div>

                      <div className="addFormBtn">
                        <a href="" className="btnBorder">Previous</a>
                        <a href="" className="btnGradient">Next</a>
                      </div>

                      <div className="row align-items-center facilityList">
                        <div className="col-lg-10 col-md-12 col-12">
                          <div className='facilityProduct'>
                            <div className='facProductImg'>
                              <Image src={facProductImg} className="img-fluid" alt="course-img" />
                            </div>
                            <div className='facProductContant'>
                              <div className='ContantLeft'>
                                <h3>Training Room</h3>
                                <p>SBorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu consectetur adipiscing elit. Etiam eu  </p>

                                <div className="capicityWrap">
                                  <div className='productPrice'>AED 40/ <span>Per Hour</span></div>
                                  <div className="capicity">
                                    capacity: <span>10</span>
                                  </div>
                                </div>
                                <div className="amenitiesList">
                                  <h4 className="amenities">Amenities at SHAMS</h4>
                                  <ul className='list'>
                                    <li><Image src={meetingrRoom} alt="meetingrRoom" /> Meeting rooms</li>
                                    <li> <Image src={commonArea} alt="commonArea" /> Common areas</li>
                                    <li><Image src={elevator} alt="elevator" /> Elevator</li>
                                    <li><Image src={businesslounge} alt="businesslounge" /> Business Lounge</li>
                                    <li><Image src={cafe} alt="cafe" /> Cafe</li>
                                  </ul>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="col-lg-10 col-md-12 col-12">
                          <div className='facilityProduct'>
                            <div className='facProductImg'>
                              <Image src={facProductImg} className="img-fluid" alt="course-img" />
                            </div>
                            <div className='facProductContant'>
                              <div className='ContantLeft'>
                                <h3>Training Room</h3>
                                <p>SBorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu consectetur adipiscing elit. Etiam eu  </p>

                                <div className="capicityWrap">
                                  <div className='productPrice'>AED 40/ <span>Per Hour</span></div>
                                  <div className="capicity">
                                    capacity: <span>10</span>
                                  </div>
                                </div>

                                <div className="amenitiesList">
                                  <h4 className="amenities">Amenities at SHAMS</h4>
                                  <ul className='list'>
                                    <li><Image src={meetingrRoom} alt="meetingrRoom" /> Meeting rooms</li>
                                    <li> <Image src={commonArea} alt="commonArea" /> Common areas</li>
                                    <li><Image src={elevator} alt="elevator" /> Elevator</li>
                                    <li><Image src={businesslounge} alt="businesslounge" /> Business Lounge</li>
                                    <li><Image src={cafe} alt="cafe" /> Cafe</li>
                                  </ul>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className='workShopBooking'>

                          <div className="roomHeader">
                            <h3 className="roomTitle">Training Room</h3>
                          </div>

                          <div className='roomBooking'>
                            <div className="productPrice">AED 40/ <span>Per Hour</span></div>

                            <div className='bookingForm'>
                              <div className="dateDuration">
                                <div className="duration form-group">
                                  <label>Date</label>
                                  <input type="date" className="form-control" placeholder="Insert" />
                                </div>
                                <div className="duration form-group">
                                  <label>Duration</label>
                                  <input type="time" className="form-control" placeholder="Insert" />
                                </div>
                              </div>
                              <div className="maxCapicity"><span>Max capacity</span> <span className="maxUser">10</span></div>
                              <div className="maxCapicity catering"><span>Catering Services</span>
                                <ul className="list-check">
                                  <li className="lms-check-group">
                                    <input type="checkbox" id="1" />
                                    <label for="1"></label>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <p className="mb-4"> aliquet odio mattis.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac   </p>

                            <Link href='' className='btnGradient'>Check availability</Link>

                          </div>

                          {/* availabitySlot start here */}
                          <div className="availabitySlot">
                            <h4 className="subHeading">Availabity Slot:</h4>
                            <ul className="slot">
                              <li className="active">12:00 to 02:00 pM</li>
                              <li>12:00 to 02:00 pM</li>
                              <li>12:00 to 02:00 pM</li>
                            </ul>

                            <Link href='' className='btnGradient'>Check availability</Link>
                          </div>
                        </div>


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

  )
}

export default page