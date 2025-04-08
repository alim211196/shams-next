"use client";
import Link from 'next/link'
import Image from "next/image";
import React from 'react'
import TrendingSection from '@/app/components/Common/Home/TrendingSection';
import dummyData from '../../dummyJson/trendingCard.json';
import FilterSlider from "../../components/Filterslider/index";
import CourseSlider from '@/app/components/Slider/Slider';
import starRating from '../../assets/images/ratingstar.svg';

const page = () => {
  return (
    <>
      <section className="courseSearchTop">
        <div className='searchWarap'>
          <form action="#" className="menu-search-form">
            <div className="customSearch">
              <div className="input-grp">
                <input type="text" placeholder="Search For Course . . ." />
                <button type="submit" className='searchIcon'></button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <FilterSlider />
      {/* courseFilter start here */}
      <section className="courseFilter">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <aside className="lms-sidebar">

                <div className='filterHeading'>
                  <h2 className='filterIcon'>Filter</h2>
                </div>

                <div className="lmst-single-widget">
                  <div className="inner">
                    <h4 className="lms-widget-title">Categories <span className='arrow'></span> </h4>
                    <ul className="lms-list-wrapper list-check">
                      <li className="lms-check-group">
                        <input type="checkbox" id="1" />
                        <label for="1">Lorem ipsum</label>
                      </li>

                      <li className="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">Lorem ipsum</label>
                      </li>

                      <li className="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">Lorem ipsum</label>
                      </li>

                      <li className="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">Lorem ipsum</label>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lmst-single-widget">
                  <div className="inner">
                    <h4 className="lms-widget-title">Rating <span className='arrow'></span> </h4>
                    <ul className="lms-list-wrapper list-check">
                      <li className="lms-check-group">
                        <input type="checkbox" id="r1" />
                        <label for="r1">
                         <span className='filterRating'>
                             <Image src={starRating} alt="star" /> 
                             <Image src={starRating} alt="star" /> 
                             <Image src={starRating} alt="star" /> 
                             <Image src={starRating} alt="star" /> 
                             <Image src={starRating} alt="star" /> 
                             </span>
                        </label>
                      </li>
                      <li className="lms-check-group">
                        <input type="checkbox" id="r2" />
                        <label for="r2"> <span className='filterRating'>
                             <Image src={starRating} alt="star" /> 
                             <Image src={starRating} alt="star" /> 
                             <Image src={starRating} alt="star" /> 
                             <Image src={starRating} alt="star" /> 
                             
                             </span></label>
                      </li>

                      <li className="lms-check-group">
                        <input type="checkbox" id="r3" />
                        <label for="r3"> <span className='filterRating'>
                             <Image src={starRating} alt="star" /> 
                             <Image src={starRating} alt="star" /> 
                             <Image src={starRating} alt="star" /> 
                             
                             </span></label>
                      </li>

                      <li className="lms-check-group">
                        <input type="checkbox" id="r4" />
                        <label for="r4"> <span className='filterRating'>
                             <Image src={starRating} alt="star" /> 
                             <Image src={starRating} alt="star" /> 
                            
                             </span></label>
                      </li>

                      <li className="lms-check-group">
                        <input type="checkbox" id="r5" />
                        <label for="r5"> <span className='filterRating'>
                             <Image src={starRating} alt="star" /> 
                             
                             </span></label>
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="lmst-single-widget">
                  <div className="inner">
                    <h4 className="lms-widget-title">Price </h4>
                    <ul className="lms-list-wrapper list-check">
                      <li className="lms-check-group">
                        <input type="checkbox" id="1" />
                        <label for="1">Yes</label>
                      </li>

                      <li className="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">No</label>
                      </li>

                    </ul>
                  </div>
                </div>


                <div className="lmst-single-widget">
                  <div className="inner">
                    <h4 className="lms-widget-title">Certifications <span className='arrow'></span> </h4>
                    <ul className="lms-list-wrapper list-check">
                      <li className="lms-check-group">
                        <input type="checkbox" id="1" />
                        <label for="1">Yes</label>
                      </li>

                      <li className="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">No</label>
                      </li>

                    </ul>
                  </div>
                </div>


                <div className="lmst-single-widget">
                  <div className="inner">
                    <h4 className="lms-widget-title">Langauage <span className='arrow'></span> </h4>
                    <ul className="lms-list-wrapper list-check">
                      <li className="lms-check-group">
                        <input type="checkbox" id="1" />
                        <label for="1">English</label>
                      </li>

                      <li className="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">Hindi</label>
                      </li>

                      <li className="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">Arbic</label>
                      </li>

                      <li className="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">China</label>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lmst-single-widget">
                  <div className="inner">
                    <h4 className="lms-widget-title">Duration<span className='arrow'></span> </h4>
                    <ul className="lms-list-wrapper list-check">
                      <li className="lms-check-group">
                        <input type="checkbox" id="1" />
                        <label for="1">1-2 Hours</label>
                      </li>

                      <li className="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">1-4 Hours</label>
                      </li>

                      <li className="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">1-6 Hours</label>
                      </li>

                      <li className="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">1-2 Hours</label>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lmst-single-widget">
                  <div className="inner">
                    <h4 className="lms-widget-title">Difficulty Level<span className='arrow'></span> </h4>
                    <ul className="lms-list-wrapper list-check">
                      <li className="lms-check-group">
                        <input type="checkbox" id="d1" />
                        <label for="d1">Beginner</label>
                      </li>

                      <li className="lms-check-group">
                        <input type="checkbox" id="d2" />
                        <label for="d2">Intermediate</label>
                      </li>

                      <li className="lms-check-group">
                        <input type="checkbox" id="d3" />
                        <label for="d3">Advanced.</label>
                      </li>
                    </ul>
                  </div>
                </div>


              </aside>
            </div>

            <div className="col-lg-9 order-1 order-lg-2">


              <div className="sortRight">
                <div className="sortFilter">
                  Sort By <Link href="#" className="sortIcon">Popular</Link>
                  <ul className="sortDropdown">
                    <li><Link className="" href="#">Popular</Link></li>
                    <li><Link href="#">Most Reviewed</Link></li>
                    <li><Link href="#">Highest Rated</Link></li>
                    <li><Link href="#">Newest</Link></li>
                  </ul>
                </div>
              </div>

              <div className="row">
                {dummyData.map(course => (
                  <TrendingSection key={course.id} course={course} />
                ))}


                {dummyData.map(course => (
                  <TrendingSection key={course.id} course={course} />
                ))}


                {dummyData.map(course => (
                  <TrendingSection key={course.id} course={course} />
                ))}



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

          </div>
        </div>
      </section>

      <CourseSlider title="Related searches"/>

    </>
  )
}

export default page