"use client";
import React from 'react';
import CourseSlider from "../components/Slider/Slider";
import Faq from "../components/Common/Home/Faq";
import ImpactSection from "../components/Common/Home/ImpactSection";
import LearnerSuccessStroy from "../components/Common/Home/LearnerSuccessStroy";
import WhyShams from "../components/Common/Home/WhyShams";
import OurPartner from "../components/Common/Home/OurPartner";
import TrendingSection from "../components/Common/Home/TrendingSection";
import FactArtSection from "../components/Common/Home/FactArtSection";
import HeroSection from "../components/Common/Home/HeroSection";
import FilterTab from "../components/Common/Home/FilterTab";
import dummyData from '../dummyJson/trendingCard.json';
import trainerOne from "../assets/images/trainer-1.png";
import trainerTwo from "../assets/images/trainer-2.png";
import trainerThree from "../assets/images/trainer-3.png";
import trainerFour from "../assets/images/trainer-4.png";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="courseSection">
        <div className="container">
          <div className="sectionTitle broadTitle  left">
            <h2 className="title">A broad selection of courses. <span> Our powerful Masterclasses to unlock your Potential!</span></h2>
          </div>
          <FilterTab />
          <div className="row">
            {dummyData.map(course => (
              <TrendingSection key={course.id} course={course} />
            ))}
          </div>
          <div className="col-lg-12 col-md-6 col-12">
              <div className='loadMore'>
                <a href="#" className='btnGradient'>View All</a>
              </div>
            </div>
        </div>
      </section>
      <CourseSlider 
       title="Top Trending"
        subTitle=" Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
        isHomePage={true}
        />
      <CourseSlider 
       title=" Top-Rated"
        subTitle=" Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
        isHomePage={true}
        isTopRated={true}
       />

      <section className="courseSection">
        <div className="container">
          <div className="topRated">
            <div className="sectionTitle left">
              <h2 className="title">
                Classes Taught by
                <span> Our Trainers</span>
              </h2>
            </div>
            <div className="topRated-right">
              <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className='row'>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="card">
                <Image src={trainerFour} alt="Profile Image" />
                <div className="card-content">
                  <div className="title">John Mign</div>
                  <div className="subtitle">Instructor</div>
                  <p className="description">
                    Sorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum, Ac Aliquet Odio Mattis.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="card">
                <Image src={trainerOne} alt="Profile Image" />
                <div className="card-content">
                  <div className="title">John Mign</div>
                  <div className="subtitle">Instructor</div>
                  <p className="description">
                    Sorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum, Ac Aliquet Odio Mattis.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="card">
                <Image src={trainerTwo} alt="Profile Image" />
                <div className="card-content">
                  <div className="title">John Mign</div>
                  <div className="subtitle">Instructor</div>
                  <p className="description">
                    Sorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum, Ac Aliquet Odio Mattis.
                  </p>
                </div>
              </div>
            </div>


            <div className="col-lg-3 col-md-6 col-12">
              <div className="card">
                <Image src={trainerThree} alt="Profile Image" />
                <div className="card-content">
                  <div className="title">John Mign</div>
                  <div className="subtitle">Instructor</div>
                  <p className="description">
                    Sorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum, Ac Aliquet Odio Mattis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <FactArtSection />
      <OurPartner />
      <WhyShams />
      <LearnerSuccessStroy />
      <ImpactSection />
      <Faq />
    </main>
  );
}