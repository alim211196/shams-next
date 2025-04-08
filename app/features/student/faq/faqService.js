import { handleRequest } from "@/app/utils/requestHelper";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_STUDENT_API_URL;

// Fetch FAQs by Category (Using GET)
export const getFaqsByCategory = async (user_type, lang) => {
  return await handleRequest(() =>
    axios.get(
      `${API_BASE_URL}/faq/categories?user_type=${user_type}&lang=${lang}`
    )
  );
};
