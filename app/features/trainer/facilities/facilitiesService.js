import { handleRequest } from "@/app/utils/requestHelper";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_TRAINER_API_URL;

export const getAmenities = async (lang) => {
  return await handleRequest(() =>
    axios.get(`${API_BASE_URL}/amenities?lang=${lang}`)
  );
};

export const getSpaceTypes = async (lang) => {
  return await handleRequest(() =>
    axios.get(`${API_BASE_URL}/space_types?lang=${lang}`)
  );
};

export const getFacilities = async (
  offset,
  lang,
  spaceType,
  capacity,
  priceRange,
  amenities
) => {
  return await handleRequest(() =>
    axios.get(
      `${API_BASE_URL}/facilities/limited?offset=${offset}&lang=${lang}&spaceType=${spaceType}&capacity=${capacity}&priceRange=${priceRange}&amenities=${amenities}`
    )
  );
};

export const getFacilityById = async (id, lang) => {
  return await handleRequest(() =>
    axios.get(`${API_BASE_URL}/facilities?id=${id}&lang=${lang}`)
  );
};
