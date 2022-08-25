import { useEffect, useState } from "react";

//@ts-ignore
export const isInSizzy = typeof window !== "undefined" && !!window.__sizzy;

export const useInSizzy = () => {
  const [isInSizzy, setThingie] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      //@ts-ignore
      setThingie(window.__sizzy);
    }
  }, []);

  return isInSizzy;
};
