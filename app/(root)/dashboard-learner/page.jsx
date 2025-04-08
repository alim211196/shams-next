// import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import Link from 'next/link'
// import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min';
import courseIcon from '../../assets/images/svg/course-icon.svg';
import workShopIcon from '../../assets/images/svg/workshop-icon.svg';
import chatIcon from '../../assets/images/svg/chat-icon.svg';
import reportIcon from '../../assets/images/svg/report-icon.svg';
import bellIcon from '../../assets/images/svg/bell-icon.svg';
import settingIcon from '../../assets/images/svg/setting-icon.svg';
import infoIcon from '../../assets/images/svg/info-icon.svg';
import tutorIcon from '../../assets/images/svg/tutor-icon.svg';
import courseImg from '../../assets/images/course-img.png';
import starIcon from '../../assets/images/stars.svg';
import trashIcon from '../../assets/images/trash.svg';

const page = () => {
  return (
    <>
      <section className="studentProfile">
        <div className="profileWraper">
          <div className='dashBoardSideBar'>
            <ul>
              <li><a href="#" className="active"> <Image src={courseIcon} alt="" /> <span>Course Management</span></a> </li>
              <li> <a href="#"><Image src={workShopIcon} alt="" /> <span>Workshop</span></a> </li>
              <li> <a href="#"><Image src={chatIcon} alt="" /><span>Communication</span></a> </li>
              <li> <a href="#"><Image src={reportIcon} alt="" /> <span>Reports</span></a> </li>
              <li> <a href="#"><Image src={bellIcon} alt="" /><span>Notification</span></a> </li>
              <li> <a href="#"><Image src={settingIcon} alt="" /><span>Revenue Tracking</span></a> </li>
              <li> <a href="#"><Image src={infoIcon} alt="" /> <span>Resources</span></a> </li>
            </ul>
          </div>

          <div className="profileRight">
            <div className="dashTitle">
              <h2 className="headingTitle">Course Management</h2>
              <a href="#" className="btnGradient">Add New Course</a>
            </div>

            <div className="courseWrapper">
              <div className="courseDashCard">
                <Image src={tutorIcon} alt="" />
                <h3>10</h3>
                <p>Active Course</p>
              </div>
              <div className="courseDashCard">
                <Image src={tutorIcon} alt="" />
                <h3>1</h3>
                <p>Pending Course</p>
              </div>
              <div className="courseDashCard">
                <Image src={tutorIcon} alt="" />
                <h3>4</h3>
                <p>Draft Courses</p>
              </div>
              <div className="courseDashCard">
                <Image src={tutorIcon} alt="" />
                <h3>10</h3>
                <p>Certification Provide</p>
              </div>
            </div>
            {/* dashboard Filter */}
            <div className="dashboardFilter">

              <div className="menu-search-form">
                <div className="input-grp">
                  <input type="text" placeholder="Search Course Here" />
                  <button type="submit" className='searchIcon'></button>
                </div>
              </div>

              <div className="select-item sessionType">
                <select className='form-control'>
                  <option value="">Session Type</option>
                  <option value="academy">Academy</option>
                </select>
              </div>
              <div className="select-item">
                <select className='form-control'>
                  <option value="">All</option>
                  <option value="academy">Academy</option>
                </select>
              </div>
              <div className="select-item">
                <select className='form-control'>
                  <option value="">Newest</option>
                  <option value="academy">Academy</option>
                </select>
              </div>
            </div>


            <div className="courseCard">
              <div className="courseDeleteIcon">
                <a href="" className="btnBorder removeBtn"> <Image src={trashIcon} alt='remove' /> Remove </a>
              </div>
              <div className="courseImg">
                <Image src={courseImg} alt="courseImg" />
              </div>
              <div className="courseContant">
                <ul>
                  <li>
                    <div className="contantText">
                      <h3>Public Speaking Course</h3>
                      <p>Sorem ipsum dolor sit amet, </p>
                      <a href="" className="status active"><span></span>Active</a>
                    </div>
                  </li>
                  <li>
                    <div className="contantText">
                      <h3>AED 250</h3>
                      <p>Earned in month</p>
                    </div>
                  </li>
                  <li>
                    <div className="contantText">
                      <h3>12</h3>
                      <p>Enrollment</p>
                    </div>
                  </li>
                  <li>
                    <div className="contantText">
                      <h3>4.0 <Image src={starIcon} alt /></h3>
                      <p>Rating</p>
                    </div>
                  </li>
                </ul>

              </div>
            </div>

            <div className="courseCard">
            <div className="courseDeleteIcon">
                <a href="" className="btnBorder removeBtn"> <Image src={trashIcon} /> Remove </a>
              </div>
              <div className="courseImg">
                <Image src={courseImg} alt="courseImg" />
              </div>
              <div className="courseContant">
                <ul>
                  <li>
                    <div className="contantText">
                      <h3>Public Speaking Course</h3>
                      <p>Sorem ipsum dolor sit amet, </p>
                      <a href="" className="status draft"><span></span>Draft</a>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#" className="btnGradient">Complete your Course</a>
                  </li>
                </ul>

              </div>
            </div>

            <div className="courseCard">
            <div className="courseDeleteIcon">
                <a href="" className="btnBorder removeBtn"> <Image src={trashIcon} /> Remove </a>
              </div>
              <div className="courseImg">
                <Image src={courseImg} alt="courseImg" />
              </div>
              <div className="courseContant">
                <ul>
                  <li>
                    <div className="contantText">
                      <h3>Public Speaking Course</h3>
                      <p>Sorem ipsum dolor sit amet, </p>
                      <a href="" className="status pending"><span></span>Pending approval</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="courseCard">
            <div className="courseDeleteIcon">
                <a href="" className="btnBorder removeBtn"> <Image src={trashIcon} /> Remove </a>
              </div>
              <div className="courseImg">
                <Image src={courseImg} alt="courseImg" />
              </div>
              <div className="courseContant">
                <ul>
                  <li>
                    <div className="contantText">
                      <h3>Public Speaking Course</h3>
                      <p>Sorem ipsum dolor sit amet, </p>
                      <a href="" className="status reject"><span></span>Declined</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <ul className="pagination lab-ul">
              <li>
                <Link href="#">01</Link>
              </li>
              <li>
                <Link href="#" className="active">02</Link>
              </li>
              <li>
                <Link href="#">03</Link>
              </li>
              <li>
                <Link href="#">04</Link>
              </li>
            </ul>

          </div>
        </div>
      </section>
    </>

  )
}

export default page