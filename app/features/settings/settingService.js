import { handleRequest } from "@/app/utils/requestHelper";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_SETTING_API_URL;

// get cms
export const getSettings = async (lang) => {
  return await handleRequest(() =>
    axios.get(`${API_BASE_URL}/get-settings/${lang}`)
  );
};
