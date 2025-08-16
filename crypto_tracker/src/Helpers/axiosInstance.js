import axios from "axios";
import { COINGECKO_BASE_URL } from "./Constants.js";

export const axiosInstance = axios.create({
    baseURL: COINGECKO_BASE_URL,
})