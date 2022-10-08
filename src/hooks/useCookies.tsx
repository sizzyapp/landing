import { parseCookies, setCookie as nookieSetCookie } from "nookies";
import { createContext, useContext, useState } from "react";

const DEFAULT_COOKIE_OPTIONS = {
  domain:
    process.env.NODE_ENV === "development"
      ? "localhost"
      : process.env.NEXT_PUBLIC_COOKIE_DOMAIN || ".sizzy.co",
  maxAge: 11 * 30 * 24 * 60 * 60,
  path: "/",
};

export const CookieCtx = createContext<{
  value: Record<string, string>;
  set: (key: string, value: string, reload?: boolean) => void;
  reload: () => void;
  canUse: boolean;
  accept: () => void;
}>({} as any);

export const COOKIES_ACCEPTED_KEY = "sizzy-cookies-accepted";
export const CookieProvider = ({ children }) => {
  const [value, setValue] = useState(parseCookies());
  const reloadCookies = () => setValue(parseCookies());
  const set = (key: string, value: string, reload = true) => {
    nookieSetCookie(null, key, value, DEFAULT_COOKIE_OPTIONS);
    reload && reloadCookies();
  };

  return (
    <CookieCtx.Provider
      value={{
        set,
        value,
        reload: reloadCookies,
        canUse: value[COOKIES_ACCEPTED_KEY] === "true",
        accept: () => set(COOKIES_ACCEPTED_KEY, "true"),
      }}
      children={children}
    />
  );
};

export const useCookies = () => useContext(CookieCtx);
