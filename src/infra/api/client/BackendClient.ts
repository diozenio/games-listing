import axios from "axios";

export const BackendClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});
