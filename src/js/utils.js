import { API_KEY, API, imgUrl } from "./constants";

export const generateUrl = path => `${API}${path}?api_key=${API_KEY}`;
export const generateImgUrl = path => `${imgUrl}${path}`;
export const generateDate = date => new Date(date).toDateString();
export const generatePopularity = popularity => Math.round(popularity * 10);