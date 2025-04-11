import Link from "next/link";
import React from "react";
import tranningDetails from "../../../assets/images/tranning-details.png";
import shareIcon from "../../../assets/images/share-icon.svg";
import meetingrRoom from "../../../assets/images/meetingroom.svg";
import commonArea from "../../../assets/images/commonarea.svg";
import businesslounge from "../../../assets/images/businesslounge.svg";
import elevator from "../../../assets/images/elevator.svg";
import cafe from "../../../assets/images/cafe.svg";

import Image from "next/image";
import { getFacilityById } from "@/app/features/trainer/facilities/facilitiesService";
import { getS3ImageUrl } from "@/app/utils/helper";
const fetchFacility = async (id, lang) => {
  try {
    const res = await getFacilityById(id, lang);
    return res.success ? res?.data?.result : [];
  } catch (error) {
    console.error("Error fetching facility:", error);
    return [];
  }
};
const page = async ({ params }) => {
  const { _id } = params;
  const facility = await fetchFacility(_id, "en");
  return (
    <>
      <div className="breadcrumbs-wrap">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Start booking</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Choose Room
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="facilityDetails">
        <div className="container">
          <div className="row">
            <div className="roomHeader">
              <h3 className="roomTitle">{facility?.title}</h3>
              <Link
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#share-modal"
                className="shareBtn"
              >
                <Image src={shareIcon} alt="share" /> Share
              </Link>
            </div>
            <div className="col-lg-7 col-md-5 col-12">
              <div className="facilityDetail">
                <div className="facilityDetailImg">
                  <Image
                    width={640}
                    height={391}
                    src={
                      facility?.banner_img
                        ? getS3ImageUrl("facility", facility?.banner_img)
                        : tranningDetails
                    }
                    unoptimized
                    style={{
                      width: "100%",
                      height: "391px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                    priority
                    className="img-fluid"
                    alt="course-img"
                  />
                </div>
                <div className="facilityContant">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: facility?.long_description || "",
                    }}
                  />
                </div>
              </div>

              <div className="amenitiesList ContantLeft">
                <h4 className="amenities">Amenities at SHAMS</h4>
                <ul className="list">
                  {facility?.amenities?.map((amenity) => {
                    return (
                      <li key={amenity?._id}>
                        <Image
                          width={24}
                          height={24}
                          src={
                            amenity?.icon_img
                              ? getS3ImageUrl("amenity", amenity?.icon_img)
                              : meetingrRoom
                          }
                          unoptimized
                          alt={amenity?.name}
                        />
                        {amenity?.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-12">
              <div className="roomBooking">
                <div className="productPrice">
                  AED {facility?.price}/ <span>Per Hour</span>
                </div>

                <div className="bookingForm">
                  <div className="dateDuration">
                    <div className="duration form-group">
                      <label>Date</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Insert"
                      />
                    </div>
                    <div className="duration form-group">
                      <label>Duration</label>
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Insert"
                      />
                    </div>
                  </div>
                  <div className="maxCapicity">
                    <span>Max capacity</span>{" "}
                    <span className="maxUser">10</span>
                  </div>
                  <div className="maxCapicity catering">
                    <span>Catering Services</span>
                    <ul className="list-check">
                      <li className="lms-check-group">
                        <input type="checkbox" id="1" />
                        <label for="1"></label>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="mb-4">
                  {" "}
                  aliquet odio mattis.Sorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nunc vulputate libero et velit interdum, ac{" "}
                </p>

                <Link href="" className="btnGradient">
                  Check availability
                </Link>
              </div>

              {/* availabitySlot start here */}
              <div className="availabitySlot">
                <h4 className="subHeading">Availabity Slot:</h4>
                <ul className="slot">
                  <li className="active">12:00 to 02:00 pM</li>
                  <li>12:00 to 02:00 pM</li>
                  <li>12:00 to 02:00 pM</li>
                </ul>

                <Link href="" className="btnGradient">
                  Check availability
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="classDetails">
            <form>
              <div className="row">
                <div className="classDetailsTop">
                  <h4>Class Details</h4>
                  <p>Tell us about your class in detail to help students find it on understand what to expect. </p>
                </div>

                <div className="form-group col-12">
                  <label>Course title*</label>
                  <span>Your title should be a mix of attention-grabbing, informative, and optimized for search</span>
                  <input type="text" className="form-control" placeholder="Insert" />
                </div>

                <div className="form-group col-12">
                  <label>Course Description*</label>
                  <span>Use 1 or 2 related keywords, and mention 3-4 of the most important areas that you've covered during your course.</span>
                  <input type="text" className="form-control" placeholder="Insert" />
                </div>

                <div className="form-group col-12">
                  <label>Course Outcome*</label>
                  <span>Use 1 or 2 related keywords, and mention 3-4 of the most important areas that you've covered during your course.</span>
                  <input type="text" className="form-control" placeholder="Insert" />
                </div>

              </div>
            </form>
          </div> */}

          {/* <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className='cateringService'>
                <div className='cateringContant'>
                  <h3>catering Service</h3>
                  <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac </p>
                </div>
                <Link href='' className='btnGradient'>Book Now</Link>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default page;
