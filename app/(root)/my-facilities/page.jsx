import Link from 'next/link'
import React from 'react'
import googleIcon from '../../assets/images/google-icon.svg';
import facebookIcon from '../../assets/images/facebook-icon.svg';
import appleIcon from '../../assets/images/apple-icon.svg';
import searchIcon from '../../assets/images/search-icon.svg';
import facProductImg from '../../assets/images/facility-product.png';
import meetingrRoom from '../../assets/images/meetingroom.svg';
import commonArea from '../../assets/images/commonarea.svg';
import businesslounge from '../../assets/images/businesslounge.svg';
import elevator from '../../assets/images/elevator.svg';
import cafe from '../../assets/images/cafe.svg';
import myFacility from '../../assets/images/my-facility.png';


import Image from "next/image";

const page = () => {
  return (

    <>
      <section className="facilitySection">
        <div className="container">
          <div className="row">
            <div className="myFaciHeader">
              <h2 className="myBooking">My Facilities Booking</h2>
              <Link href='' className='btnGradient'>Add New Facility</Link>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className='facilityProduct'>
                <div className='facProductImg'>
                  <Image src={myFacility} className="img-fluid" alt="course-img" />
                </div>
                <div className='facProductContant'>
                  <div className='ContantLeft'>
                    <h3>Training Room</h3>
                    <p>SBorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molesm sollicitudin lacus, </p>

                    <div className="bookingWrap">
                      <div className="bookingDate">
                        <span> Date:</span> 14 Jan 2024
                      </div>
                      <div className="bookingDate">
                        <span> Time:</span>  12:00 PM - 02:00 pM
                      </div>
                      <div className="bookingDate">
                        <span> Venue: </span> Training Room
                      </div>
                    </div>

                  </div>

                </div>
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

            </ul>

          </div>

        </div>

      </section>
    </>
  )
}

export default page