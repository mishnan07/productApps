import axios from "axios";
import { userAPI } from "../Constants/UserApi";

export const userAxios = axios.create({baseURL:userAPI})