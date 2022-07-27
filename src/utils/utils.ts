import { useEffect, useState } from "react";

export const isProd = process.env.NODE_ENV === "production";
export const isDev = !isProd;

export const useOnPageLoad = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    window.onload = () => setLoaded(true);
  }, []);
  return loaded;
};

export const useGoogleAnalytics = ({
  id,
  startLoading,
  delay = 0,
}: {
  id: string;
  startLoading: boolean;
  delay: number;
}) => {
  useEffect(() => {
    if (startLoading) {
      if (isDev) {
        return;
      }
      if (!id) {
        throw new Error("Must provide id");
      }
      setTimeout(() => {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
        document.body.appendChild(script);
        //@ts-ignore
        window.dataLayer = window.dataLayer || [];

        function gtag() {
          //@ts-ignore
          window.dataLayer.push(arguments);
        }

        //@ts-ignore
        window.gtag = gtag;

        //@ts-ignore
        gtag("js", new Date());
        //@ts-ignore
        gtag("config", id, {
          anonymize_ip: true,
          cookie_expires: 0,
        });
      }, delay);
    }
  }, [startLoading]);
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label: string;
  value?: number;
}) => {
  // @ts-ignore
  window.gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const trackButtonClick = (label: string) => {
  event({
    action: "buton_click",
    label,
  });
};
