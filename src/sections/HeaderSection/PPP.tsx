import React, { useEffect, useState } from "react";
import { Horizontal, Vertical } from "../../styles/layout-components";
import { Text } from "@mantine/core";

export const useDiscountInfo = () => {
  let [pppInfo, setPppInfo] = useState<any>(null);

  const getDiscount = async () => {
    try {
      const ffs = await fetch("http://localhost:3000/api/ppp");
      const countries = await (() => require("config/countries.json"))();
      const discountInfo = await ffs.json();
      const country = countries.find((c: any) => c.code === discountInfo.country);
      setPppInfo({ discountInfo, country });
    } catch (err) {
      console.log("err is", err);
    }
  };

  useEffect(() => {
    getDiscount();
  }, []);

  return pppInfo;
};

export const PPP = () => {
  const pppInfo = useDiscountInfo();
  const hasDiscountInfo = pppInfo?.discountInfo && pppInfo?.country;
  if (!hasDiscountInfo) return null;

  const { discountInfo, country } = pppInfo;

  return (
    <Horizontal
      p="sm"
      center
      fullW
      sx={{ color: "white", maxHeight: 40, fontSize: 15, fontWeight: 400 }}
      bg="violet.5"
    >
      <Horizontal>
        <Text sx={{ fontSize: 30 }}>{country.emoji}</Text>
      </Horizontal>
      <Vertical spacing={5}>
        <Text>
          Special pricing for {country.name} - <b>${discountInfo.discount}%</b> off
        </Text>
      </Vertical>
    </Horizontal>
  );
};
