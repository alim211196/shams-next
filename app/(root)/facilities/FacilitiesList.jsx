"use client";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Image from "next/image";
import { getS3ImageUrl } from "@/app/utils/helper";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
const capacities = ["0-10", "10-20", "20-30", "30-40", "40-50"];
const priceRanges = [
  "AED 0 - AED 99",
  "AED 100 - AED 199",
  "AED 200 - AED 299",
  "AED 300 - AED 499",
];

const FacilitiesList = ({
  facilitiesData,
  amenities,
  spaceTypes,
  searchParams,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  // Local state to track filter selections before search
  const [filters, setFilters] = useState({
    spaceType: searchParams?.spaceType || "",
    capacity: searchParams?.capacity || "",
    priceRange: searchParams?.priceRange || "",
    amenities: searchParams?.amenities?.split(",") || [],
  });

  // // Update local state when initial searchParams change
  // useEffect(() => {
  //   setFilters({
  //     spaceType: searchParams?.spaceType || "",
  //     capacity: searchParams?.capacity || "",
  //     priceRange: searchParams?.priceRange || "",
  //     amenities: searchParams?.amenities?.split(",") || [],
  //   });
  // }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(value)
        ? prev.amenities.filter((item) => item !== value)
        : [...prev.amenities, value],
    }));
  };

  const handleSearch = () => {
    // Create new URLSearchParams
    const params = new URLSearchParams();

    // Add non-empty filters to URL
    if (filters.spaceType) params.set("spaceType", filters.spaceType);
    if (filters.capacity) params.set("capacity", filters.capacity);
    if (filters.priceRange) params.set("priceRange", filters.priceRange);
    if (filters.amenities.length > 0)
      params.set("amenities", filters.amenities.join(","));

    // Reset to first page when filters change
    params.set("offset", "1");

    // Update URL which will trigger new data fetch
    router.push(`${pathname}?${params.toString()}`);
  };

  // Extract facilities and pagination data
  const facilities = facilitiesData?.data || [];
  const pagination = {
    currentPage: facilitiesData?.currentPage || 1,
    totalPages: facilitiesData?.totalPages || 1,
    totalRecords: facilitiesData?.totalRecords || 0,
    pageSize: facilitiesData?.pageSize || 10,
  };

  return (
    <>
      <section className="facilityFilter">
        <div className="container">
          <div className="filter-wrapper">
            <div className="filter-left">
              <div className="select-item">
                <select
                  name="spaceType"
                  className="form-control"
                  value={filters.spaceType}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Space Type
                  </option>
                  {spaceTypes?.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="select-item">
                <select
                  name="capacity"
                  className="form-control"
                  value={filters.capacity}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Capacity
                  </option>
                  {capacities.map((capacity) => (
                    <option key={capacity} value={capacity}>
                      {capacity}
                    </option>
                  ))}
                </select>
              </div>

              <div className="select-item">
                <select
                  multiple
                  name="amenities"
                  className="form-control"
                  value={filters.amenities}
                  onChange={handleMultiSelect}
                >
                  <option value="" disabled>
                    Amenities
                  </option>
                  {amenities?.map((amenity) => (
                    <option key={amenity} value={amenity}>
                      {amenity}
                    </option>
                  ))}
                </select>
              </div>

              <div className="select-item">
                <select
                  name="priceRange"
                  className="form-control"
                  value={filters.priceRange}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Price
                  </option>
                  {priceRanges.map((price) => (
                    <option key={price} value={price}>
                      {price}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              className="facility-filter-btn"
              onClick={handleSearch}
              aria-label="Search"
            >
              <i></i>
            </button>
          </div>
        </div>
      </section>
      <section className="facilitySection">
        <div className="container">
          <div className="row align-items-center">
            <div className="sectionTitle">
              <h2 className="title">Space to meet, share and collaborate</h2>
              <p className="subTitle">
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molesm sollicitudin lacus,{" "}
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            {facilities.length > 0 ? (
              facilities?.map((facility) => {
                return (
                  <div
                    className="col-lg-12 col-md-12 col-12"
                    key={facility?._id}
                  >
                    <div className="facilityProduct">
                      <div className="facProductImg">
                        <Image
                          width={600}
                          height={350}
                          src={
                            facility?.card_img
                              ? getS3ImageUrl("facility", facility?.card_img)
                              : facProductImg
                          }
                          style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "cover",
                            borderRadius: "12px",
                          }}
                          priority
                          className="img-fluid"
                          alt="course-img"
                        />
                      </div>
                      <div className="facProductContant">
                        <div className="ContantLeft">
                          <h3>{facility?.title}</h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                facility?.short_description?.length > 200
                                  ? `${facility?.short_description.substring(
                                      0,
                                      200
                                    )}...`
                                  : facility?.short_description,
                            }}
                          />

                          <div className="capicityWrap top-0">
                            <div className="capicity">
                              capacity: <span>{facility?.capacity}</span>
                            </div>
                            <div className="">
                              <div className="productPrice">
                                AED {facility?.price}/ <span>Per Hour</span>
                              </div>
                              <Link
                                href={`/facilities-details/${facility?._id}`}
                                className="btnGradient"
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>

                          <div className="amenitiesList top-0">
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
                                          ? getS3ImageUrl(
                                              "amenity",
                                              amenity?.icon_img
                                            )
                                          : meetingrRoom
                                      }
                                      alt={amenity?.name}
                                    />
                                    {amenity?.name}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-12 text-center">
                <p>No facilities match the selected filters.</p>
              </div>
            )}

            <Pagination
              currentPage={pagination.currentPage}
              totalRecords={pagination.totalRecords}
              pageSize={pagination.pageSize}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FacilitiesList;
