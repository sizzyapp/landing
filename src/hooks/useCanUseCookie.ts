import { parseCookies, setCookie as nookieSetCookie } from "nookies";

const cookieOptions = {
  domain: process.env.NODE_ENV === "development" ? "localhost" : `.${window.location.hostname}`,
  maxAge: 11 * 30 * 24 * 60 * 60,
  path: "/",
};
export const setCookie = (key: string, value: string) => {
  nookieSetCookie(null, key, value, cookieOptions);
};

export const COOKIES_ACCEPTED_KEY = "sizzy-cookies-accepted";
export const useCanUseCookies = () => {
  const cookies = parseCookies();

  return {
    canUseCookies: cookies[COOKIES_ACCEPTED_KEY] === "true",
    acceptCookies: () => setCookie(COOKIES_ACCEPTED_KEY, "true"),
  };
};
