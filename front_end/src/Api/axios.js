import axios from "axios";
import { baseUrl } from "./Api";
import { Cookie } from "@mui/icons-material";

const cookie = Cookie;
const token = cookie.get("CuberWeb");

export const Axios = axios.create({
  baseUrl: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
