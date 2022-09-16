import { useEffect, useRef } from "react";

import { useCookies } from "hooks/useCookies";
import { isDev } from "utils/utils";

const ENDPOINT = isDev
  ? "http://localhost:3001/api/affiliate"
  : "https://portal.sizzy.co/api/affiliate";

const sendAffiliateTrackingData = async (args: Record<string, string>) => {
  const url = new URL(ENDPOINT);
  Object.keys(args).forEach((key) => url.searchParams.set(key, args[key]));

  try {
    const res = await fetch(url, { credentials: "include" });
    await res.json();
  } catch (err) {
    console.error(err);
  }
};

export const useAffiliateTracking = () => {
  const cookies = useCookies();
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) return;
    if (!cookies.canUse) return;

    // f**k useEffect running twice in dev :)
    ref.current = true;

    const searchParams = new URLSearchParams(window.location.search);

    const urlQueryEntries = [...searchParams.entries()];
    if (urlQueryEntries.length) {
      const value = Object.fromEntries(urlQueryEntries);
      const tmp = { value, date: new Date().toJSON() };

      cookies.set("sizzy-ref-obj", JSON.stringify(tmp));
      const refId = searchParams.get("ref");

      if (refId) {
        cookies.set("sizzy-ref-id", refId);
        sendAffiliateTrackingData({
          ref: refId,
          page: `${window.location.pathname}`,
          source: searchParams.get("umt_source") || searchParams.get("source"),
        });
      }
    }
  }, [cookies.canUse, cookies.set]);
};
