import React from "react";

import {
  getAmenities,
  getFacilities,
  getSpaceTypes,
} from "@/app/features/trainer/facilities/facilitiesService";
import FacilitiesList from "./FacilitiesList";

const fetchFacilities = async (
  offset,
  lang,
  spaceType,
  capacity,
  priceRange,
  amenities
) => {
  try {
    const res = await getFacilities(
      offset,
      lang,
      spaceType,
      capacity,
      priceRange,
      amenities
    );
    return res?.success ? res?.data?.result : null;
  } catch (error) {
    console.error("Error fetching facilities:", error);
    return null;
  }
};

const fetchAmenities = async (lang) => {
  try {
    const res = await getAmenities(lang);
    return res?.success ? res?.data?.result : [];
  } catch (error) {
    console.error("Error fetching amenities:", error);
    return [];
  }
};

const fetchSpaceTypes = async (lang) => {
  try {
    const res = await getSpaceTypes(lang);
    return res?.success ? res?.data?.result : [];
  } catch (error) {
    console.error("Error fetching space types:", error);
    return [];
  }
};
const page = async ({ searchParams }) => {
  const offset = searchParams.offset ? parseInt(searchParams.offset) : 1;
  const lang = searchParams?.lang || "en";
  const spaceType = searchParams?.spaceType || "";
  const capacity = searchParams?.capacity || "";
  const priceRange = searchParams?.priceRange || "";
  const amenities = searchParams?.amenities || "";

  const facilitiesData = await fetchFacilities(
    offset,
    lang,
    spaceType,
    capacity,
    priceRange,
    amenities
  );
  console.log(offset, lang, spaceType, capacity, priceRange, amenities);
  const amenitiesData = await fetchAmenities("en");
  const spaceTypesData = await fetchSpaceTypes("en");
  return (
    <FacilitiesList
      facilitiesData={facilitiesData}
      amenities={amenitiesData}
      spaceTypes={spaceTypesData}
      searchParams={searchParams}
    />
  );
};

export default page;
