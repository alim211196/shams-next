// import Link from 'next/link'
import React from 'react'
// import Image from "next/image";
// import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min';

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

          <div className="profileRight">
            <h2 className="headingTitle">Profile & settings</h2>
            <div className="profileTabs">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="profile-tab" data-bs-toggle="tab" href="#mission" role="tab">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="password-tab" data-bs-toggle="tab" href="#vision" role="tab">Password</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="social-tab" data-bs-toggle="tab" href="#social" role="tab">Social Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="teaching-tab" data-bs-toggle="tab" href="#teaching" role="tab">Teaching details </a>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane fade show active" id="mission" role="tabpanel" aria-labelledby="profile-tab">

                  <div className='profileForm'>
                    <form>

                      <div className="row">
                        <div className="form-group col-12">
                          <div className="avatar-upload">
                            <div className="avatar-edit">
                              <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                              <label htmlFor="imageUpload"></label>
                            </div>
                            <div className="avatar-preview">
                              <div className="imagePreview">
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-group col-6">
                          <label>First Name</label>
                          <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="form-group col-6">
                          <label>Last Name</label>
                          <input type="text" className="form-control" placeholder="Last Name" />
                        </div>
                        <div className="form-group col-4"><label>Email</label>
                          <input type="text" className="form-control" placeholder="Enter Email Address" />
                        </div>

                        <div className="form-group col-4">
                          <label>First Name</label>
                          <input type="text" className="form-control" placeholder="First Name" />
                        </div>

                        <div className="form-group col-4"><label>Phone Number</label>
                          <input type="text" className="form-control" placeholder="Phone Number" />
                        </div>

                        <div className="form-group col-12"><label>Biography</label>
                          <textarea type="text" className="form-control" placeholder="lormipsum"></textarea>
                        </div>

                        <div className="form-group col-6"><label>Language</label>
                          <select className="form-control">
                            <option>Hindi</option>
                            <option>English</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <a href="" className="btnGradient">Save</a>
                        </div>

                      </div>

                    </form>
                  </div>

                </div>
                {/* password tab start */}
                <div className="tab-pane fade" id="vision" role="tabpanel" aria-labelledby="password-tab">
                  <div className='profileForm'>
                    <form>
                      <div className="row">

                        <div className="form-group col-7">
                          <label>Current Password</label>
                          <input type="text" className="form-control socialBox" placeholder="Current Password" />
                        </div>

                        <div className="form-group col-7">
                          <label>New Password</label>
                          <input type="text" className="form-control socialBox" placeholder="New Password" />
                        </div>

                        <div className="form-group col-7">
                          <label>Re-type New Password</label>
                          <input type="text" className="form-control socialBox" placeholder="Re-type New Password" />
                        </div>



                        <div className="form-group">
                          <a href="" className="btnGradient">Reset Password</a>
                        </div>

                      </div>

                    </form>
                  </div>
                </div>
                {/* social tab start */}
                <div className="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">
                  <div className='profileForm'>

                    <h3 className="socialLink">Social Profile Link</h3>
                    <form>
                      <div className="row">

                        <div className="form-group col-7">
                          <div className="socialBox facebook">
                            <input type="text" className="form-control" placeholder="http://www.facebook.com/" />
                          </div>
                        </div>


                        <div className="form-group col-7">
                          <div className="socialBox youtube">
                            <input type="text" className="form-control" placeholder="http://www.youtube.com/" />
                          </div>
                        </div>

                        <div className="form-group col-7">
                          <div className="socialBox twitter">
                            <input type="text" className="form-control" placeholder="http://www.twiter.com/" />
                          </div>
                        </div>

                        <div className="form-group col-7">
                          <div className="socialBox instaram">
                            <input type="text" className="form-control" placeholder="http://www.instagram.com/" />
                          </div>
                        </div>

                        <div className="form-group">
                          <a href="" className="btnGradient">Reset Password</a>
                        </div>

                      </div>

                    </form>
                  </div>
                </div>
                {/* teaching tab start */}
                <div className="tab-pane fade" id="teaching" role="tabpanel" aria-labelledby="teaching-tab">
                  <div className='profileForm'>
                    <form>
                      <div className="row">

                        <div className="form-group col-7">
                          <label>Trade Licence/Emirates ID*</label>
                          <input type="text" className="form-control socialBox" placeholder="Upload" />
                        </div>

                        <div className="form-group col-7">
                          <label>Certifications*</label>
                          <input type="text" className="form-control socialBox" placeholder="Upload" />
                        </div>


                        <div className="form-group">
                          <a href="" className="btnGradient">Save</a>
                        </div>

                      </div>

                    </form>
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