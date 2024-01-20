import axios from "axios";
import { userAPI } from "../Constants/UserApi";

axios.defaults.withCredentials = true
export const userAxios = axios.create({baseURL:userAPI})