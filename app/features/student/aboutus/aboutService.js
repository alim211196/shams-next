import { handleRequest } from "@/app/utils/requestHelper";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_STUDENT_API_URL;

// Fetch details of stats, our partners and achievements
export const getAboutDetails = async (lang) => {
  return await handleRequest(() =>
    axios.get(`${API_BASE_URL}/about/details/${lang}`)
  );
};
