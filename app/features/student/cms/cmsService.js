import { handleRequest } from "@/app/utils/requestHelper";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_STUDENT_API_URL;

// get cms
export const getCmsPages = async (slug, lang) => {
  return await handleRequest(() =>
    axios.get(`${API_BASE_URL}/cms/${slug}/${lang}`)
  );
};
