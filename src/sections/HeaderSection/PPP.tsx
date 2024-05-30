import React, { useEffect, useState } from "react";
import { Horizontal, Vertical } from "../../styles/layout-components";
import { Text } from "@mantine/core";
import { isEmpty } from "lodash";
import { Flag } from "./Flag";

export const useDiscountInfo = () => {
  let [pppInfo, setPppInfo] = useState<any>({});

  const getDiscount = async () => {
    try {
      let url = `${process.env.NEXT_PUBLIC_PORTAL_URL}/api/ppp`;
      const ffs = await fetch(url);
      const discountInfo = await ffs.json();
      console.log('discountInfo', discountInfo);
      setPppInfo(discountInfo);
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
  if (isEmpty(pppInfo)) return null;

  const { countryName, flag, discount } = pppInfo;

  if (discount <= 0) return null;

  return (
    <Horizontal
      p="sm"
      center
      fullW
      sx={{ color: "white", maxHeight: 40, fontSize: 15, fontWeight: 400 }}
      bg="violet.5"
    >
      <Horizontal>
        <Flag flag={flag} />
      </Horizontal>
      <Vertical spacing={5}>
        <Text>
          Special pricing for {countryName} - <b>{discount}%</b> off
        </Text>
      </Vertical>
    </Horizontal>
  );
};
