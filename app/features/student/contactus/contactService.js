import { handleRequest } from "@/app/utils/requestHelper";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_STUDENT_API_URL;

// Submit Student Contact Inquiries Form
export const postContactUs = async (formData) => {
  return await handleRequest(() =>
    axios.post(`${API_BASE_URL}/contact/submit`, formData)
  );
};
