import { API_KEY, API } from "./constants";

export const generateUrl = path => `${API}${path}?api_key=${API_KEY}`;