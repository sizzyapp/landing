import {
  Alert,
  Anchor,
  Avatar,
  Badge,
  Button,
  Card,
  Stack,
  Title,
} from "@mantine/core";
import BadassTitle, { Highlight } from "components/BadassTitle";
import DownloadButton from "components/DownloadButton";
import { GradientButton } from "components/GradientButton";
import MagicGrid from "components/MagicGrid";
import Text from "components/mantine/Text";
import Shell from "components/Shell";
import Tooltip from "components/Tooltip";
import { allTeamMembers } from "contentlayer/generated";
import CompanyLogos from "pages/customers/CompanyLogos";
import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import GraphSection from "sections/GraphSection";
import { Horizontal, Vertical } from "styles/layout-components";
import { RealReactFC } from "types";
import NextLink from "next/link";

const annualMonthlyPrice = "$5";
const monthlyPrice = "$7";
const lifetimePrice = "$199";

const Subtitle: RealReactFC<{}> = ({ children }) => (
  <Text align="center" color="gray.7" fontSize={[22, 10]}>
    {children}
  </Text>
);

const PricingCard: RealReactFC<{ subtitle: string; showMonth?: boolean }> = ({
  children,
  subtitle,
  showMonth = true,
}) => {
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
        <Text weight="bold" fontSize={40}>
          {children}
          {showMonth && (
            <Text span color="gray.6" fontSize={13}>
              /month
            </Text>
          )}
        </Text>
        <Text align="center" color="gray.6" fontSize={19}>
          {subtitle}
        </Text>
      </Vertical>
    </Card>
  );
};
const PricingPage = () => {
  return (
    <Shell
      wrapperProps={{
        center: true,
        padding: true,
        maxWidth: 1000,
      }}
    >
      <Vertical spacing={100} fullW center>
        <Vertical center fullW spacing="lg">
          <BadassTitle>
            Completely <Highlight>free</Highlight> for 14 days
          </BadassTitle>
          <Subtitle>
            Take Sizzy for a free spin for 14 days - no payment information
            required.
          </Subtitle>
          <DownloadButton />
        </Vertical>

        <Vertical spacing="xl" sx={{ maxWidth: 700 }} center fullW>
          <Vertical spacing="lg">
            <BadassTitle>
              Super <Highlight>affordable</Highlight> pricing afterwards
            </BadassTitle>
            <Subtitle>
              We didn't want to overwhelm you with complex pricing plans and
              tons of options to choose from, so we kept our pricing pretty
              straightforward.
            </Subtitle>
          </Vertical>
          <MagicGrid width={200}>
            <PricingCard subtitle="if paid annually">
              {annualMonthlyPrice}
            </PricingCard>
            <PricingCard subtitle="if paid monthly">{monthlyPrice}</PricingCard>
            <PricingCard
              showMonth={false}
              subtitle="one-time lifetime purchase"
            >
              {lifetimePrice}
            </PricingCard>
          </MagicGrid>
          <Vertical center spacing="md">
            <Vertical center spacing={3}>
              <Title sx={(t) => ({ color: t.colors.gray[7] })} order={5}>
                Part of a team? We got you!
              </Title>
              <Text align="center" color="gray.8" fontSize={[15, 7]}>
                The more seats you add, the bigger discount you get 🥳
                <br /> You can check the final pricing in the calculator below
                👇
              </Text>
            </Vertical>
            <GradientButton href="https://portal.sizzy.co/pricing">
              Calculate pricing
            </GradientButton>
          </Vertical>
          <Alert title="#PRO TIP" icon={<FaRegLightbulb />} variant="outline">
            <Title order={3}>Ask your company to pay for this.</Title>
            <Stack
              align="start"
              spacing="sm"
              sx={(t) => ({ fontSize: t.fontSizes.lg })}
            >
              <Text>
                Most companies don't mind buying a Sizzy subscription since it's
                more than worth the {annualMonthlyPrice}/mo to save several
                hours of development time.
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
                    <Text>{t.description}</Text>
                  </Vertical>
                }
              >
                <Avatar size="xl" radius={9999} src={t.image} />
              </Tooltip>
            ))}
          </Avatar.Group>
          <Text color="gray.7" size="xl" align="center">
            We're a bootstrapped team of four and we plan to develop and support
            Sizzy for years to come. We have many exciting ideas for the ensuing
            years. To fulfill our vision of creating the development workflow of
            the future, we want to pay the bills using our customers' money and
            not some VC money that doesn't care about the users. <br /> <br />
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
