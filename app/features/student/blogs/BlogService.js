import { handleRequest } from "@/app/utils/requestHelper";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_STUDENT_API_URL;
export const getBlogs = async (count = 7, lang) => {
  return await handleRequest(() =>
    axios.get(`${API_BASE_URL}/blogs?count=${count}&lang=${lang}`)
  );
};

export const getBlogBySlug = async (slug, lang) => {
  return await handleRequest(() =>
    axios.get(`${API_BASE_URL}/blog/${slug}?lang=${lang}`)
  );
};

export const getRecommendedBlogs = async (category_id, lang, exclude_id) => {
  return await handleRequest(() =>
    axios.get(
      `${API_BASE_URL}/blogs/recommended?category_id=${category_id}&lang=${lang}&exclude_id=${exclude_id}`
    )
  );
};
