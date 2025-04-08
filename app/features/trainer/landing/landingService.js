import { handleRequest } from "@/app/utils/requestHelper";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_TRAINER_API_URL;

// getLandingDetails
export const getLandingDetails = async (user_type, lang) => {
  return await handleRequest(() =>
    axios.get(
      `${API_BASE_URL}/landing/details?user_type=${user_type}&lang=${lang}`
    )
  );
};
