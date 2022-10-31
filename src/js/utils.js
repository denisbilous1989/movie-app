import { API_KEY, API, IMG_URL } from "./constants";

export const generateUrl = path => `${API}${path}?api_key=${API_KEY}`;
export const generateImgUrl = path => `${IMG_URL}${path}`;
export const generateDate = date => new Date(date).toDateString();
export const generatePopularity = popularity => Math.round(popularity * 10);