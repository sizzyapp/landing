import { Alert, Anchor, Avatar, Badge, Button, Card, Stack, Title } from "@mantine/core";
import BadassTitle, { Highlight } from "components/BadassTitle";
import DownloadButton from "components/DownloadButton";
import MagicGrid from "components/MagicGrid";
import Text from "components/mantine/Text";
import Shell from "components/Shell";
import Tooltip from "components/Tooltip";
import { discountCoupon, discountText, HAS_DISCOUNT } from "config/discount";
import { allTeamMembers } from "contentlayer/generated";
import NextLink from "next/link";
import CompanyLogos from "pages/customers/CompanyLogos";
import React, { ReactNode } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import GraphSection from "sections/GraphSection";
import { Horizontal, Vertical } from "styles/layout-components";
import { RealReactFC } from "types";
import { useDiscountInfo } from "../../sections/HeaderSection/PPP";
import { TeamMemberText } from "../about/TeamMember";

type Price = {
  regular: number;
  discounted: number;
};

const annualPrice: Price = {
  regular: 12,
  discounted: 6,
};

const monthlyPrice: Price = {
  regular: 15,
  discounted: 7.5,
};

const lifetimePrice: Price = {
  regular: 499,
  discounted: 249,
};

const Subtitle: RealReactFC<{}> = ({ children }) => (
  <Text align="center" color="gray.7" fontSize={[22, 10]}>
    {children}
  </Text>
);

const priceWithDiscount = (price: number, discount: number) => {
  let discounted = price - (price * discount) / 100;
  return roundToTwoDecimals(discounted);
};

const roundToTwoDecimals = (num: number) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

const PricingCard: RealReactFC<{
  subtitle: ReactNode;
  price: Price;
  showMonth?: boolean;
}> = ({ price, subtitle, showMonth = true }) => {
  let { discount } = useDiscountInfo();
  let isDiscounted = discount > 0;

  if(HAS_DISCOUNT){
    if(!isDiscounted){
        discount = 50;
        isDiscounted = true;
    }
  }
  const mainPrice = isDiscounted ? priceWithDiscount(price.regular, discount) : price.regular;

  return (
    <Card
      withBorder={true}
      shadow="lg"
      p="lg"
      sx={(t) => ({
        height: 150,
        color: t.colors.gray[7],
      })}
    >
      <Vertical spacing="md" sx={{ height: "100%" }} center>
        <Vertical center spacing={0}>
          {isDiscounted && (
            <Text
              {...(isDiscounted
                ? {
                    sx: { opacity: 0.5, fontSize: 25 },
                  }
                : {})}
              weight="bold"
              fontSize={40}
            >
              <Text
                span
                {...(isDiscounted ? { sx: { textDecoration: "line-through", fontSize: 20 } } : {})}
              >
                ${price.regular}
              </Text>
              {showMonth && (
                <Text
                  span
                  color="gray.6"
                  fontSize={13}
                  {...(isDiscounted
                    ? { sx: { textDecoration: "line-through", fontSize: 11 } }
                    : {})}
                >
                  /month
                </Text>
              )}
            </Text>
          )}
          <Text weight="bold" fontSize={35}>
            ${mainPrice}
            {showMonth && (
              <Text span color="gray.6" fontSize={13}>
                /month
              </Text>
            )}
          </Text>
        </Vertical>
        <Text align="center" color="gray.6" fontSize={19}>
          {subtitle}
        </Text>
      </Vertical>
    </Card>
  );
};

const PricingPage = () => {
  const buyLink = "https://portal.sizzy.co/pricing";

  return (
    <Shell
      wrapperProps={{
        center: true,
        padding: true,
        maxWidth: 1000,
      }}
    >
      <Vertical spacing={100} fullW center>
        <Vertical spacing="xl" sx={{ maxWidth: 700 }} center fullW>
          <Vertical spacing="lg">
            <BadassTitle>
              <Highlight>Free</Highlight> for 14 days <br /> affordable afterwards
            </BadassTitle>
            <Subtitle>
              We didn't want to overwhelm you with complex pricing plans and tons of options to
              choose from, so we kept our pricing pretty straightforward.
            </Subtitle>
          </Vertical>
          {HAS_DISCOUNT && (
            <Vertical fullW center>
              <Text color="violet.400" fontSize={24} weight="bold">
                {discountText}
              </Text>
              <Text fz={11} c="gray.8">
                (the coupon <b>{discountCoupon}</b> will be automatically applied at checkout)
              </Text>
            </Vertical>
          )}
          <MagicGrid width={200}>
            <PricingCard price={annualPrice} subtitle="if paid annually" />
            <PricingCard price={monthlyPrice} subtitle="if paid monthly"  />
            <PricingCard price={lifetimePrice} showMonth={false} subtitle="one-time purchase"  />
          </MagicGrid>
          <Subtitle>
            Start a free 14 days trial so you can see how much time and frustration Sizzy saves you.{" "}
            <br />
          </Subtitle>
          <DownloadButton />
          <Vertical center spacing="md">
            <Vertical center spacing={3}>
              <Title sx={(t) => ({ color: t.colors.gray[7] })} order={5}>
                Part of a team? We got you!
              </Title>
              <Text align="center" color="gray.8" fontSize={[15, 7]}>
                The more seats you add, the bigger discount you get 🥳
                <br /> You can check the final pricing in the{" "}
                <Anchor color="violet" sx={{ fontWeight: "bold" }} href={buyLink}>
                  pricing calculator
                </Anchor>
                .
              </Text>
            </Vertical>
          </Vertical>
          <Alert title="#PRO TIP" icon={<FaRegLightbulb />} variant="outline">
            <Title order={3}>Ask your company to pay for this.</Title>
            <Stack align="start" spacing="sm" sx={(t) => ({ fontSize: t.fontSizes.lg })}>
              <Text>
                Most companies don't mind buying a Sizzy subscription since it's more than worth the
                price to save hundreds of hours of development time.
              </Text>
              <NextLink href="/expense" passHref>
                <Button component="a" variant="light">
                  Use the template
                </Button>
              </NextLink>
            </Stack>
          </Alert>
        </Vertical>

        <Vertical sx={{ maxWidth: 800 }} spacing="lg" center fullW>
          <BadassTitle>
            Our <Highlight>mission</Highlight>
          </BadassTitle>

          <Avatar.Group>
            {allTeamMembers.map((t) => (
              <Tooltip
                label={
                  <Vertical spacing="sm">
                    <Vertical spacing={0}>
                      <Text weight="bold" size="xl">
                        {t.name}
                      </Text>
                      <Horizontal spacing={3}>
                        {t.roles.map((r) => (
                          <Badge>{r}</Badge>
                        ))}
                      </Horizontal>
                    </Vertical>
                    <TeamMemberText>{t.description}</TeamMemberText>
                  </Vertical>
                }
              >
                <Avatar size="xl" radius={9999} src={t.image} />
              </Tooltip>
            ))}
          </Avatar.Group>
          <Text color="gray.7" size="xl" align="center">
            We're a bootstrapped team of four and we plan to develop and support Sizzy for years to
            come. We have many exciting ideas for the ensuing years. To fulfill our vision of
            creating the development workflow of the future, we want to pay the bills using our
            customers' money and not some VC money that doesn't care about the users. <br /> <br />
            Let's make this happen together! 🙌
          </Text>
        </Vertical>

        <GraphSection />
        <CompanyLogos />
      </Vertical>
    </Shell>
  );
};

export default PricingPage;
