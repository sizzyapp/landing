import { NextPage } from "next";
import Shell from "components/Shell";
import { Title, Text, Center, Stack, Button, Box } from "@mantine/core";
import { FaArrowDown, FaCopy, FaMedal } from "react-icons/fa";
import SlackMessage from "components/SlackMessage";
import EmailBox from "components/EmailBox";
import { allEmails, Email } from "contentlayer/generated";
import NextLink from "next/link";

const messageText =
  "Hey 👋! I just found out about a new developer tool, and I think it'll significantly boost my productivity. Can I send you the details?";

const ExpensePage: NextPage<{
  managerEmail: Email;
  managerFollowupEmail: Email;
}> = ({ managerEmail, managerFollowupEmail }) => {
  return (
    <Shell>
      <Center>
        <Stack spacing={50}>
          <Stack align="center">
            <Title
              sx={(theme) => ({
                fontWeight: 900,
                fontSize: 54,
                textAlign: "center",
                [theme.fn.smallerThan("md")]: {
                  fontSize: 42,
                },
              })}
            >
              How to expense Sizzy.
            </Title>
            <Text
              sx={(theme) => ({
                fontSize: theme.fontSizes["xl"],
                color: theme.colors.purple[5],
                maxWidth: 550,
                textAlign: "center",
              })}
            >
              Given that Sizzy helps you be more productive at work, you can ask your company to pay
              for the subscription.
              <br />
            </Text>
            <Text
              sx={(theme) => ({
                fontSize: theme.fontSizes["xl"],
              })}
            >
              Just follow these 3 simple steps
            </Text>
            <FaArrowDown />
          </Stack>
          <Stack align="center">
            <Title order={2}>1. Notify your manager</Title>
            <Text>Find your manager by the water cooler, or shoot them a quick chat message.</Text>

            <SlackMessage text={messageText} avatar="/images/avataaars.png" />
            <Button
              variant="subtle"
              leftIcon={<FaCopy />}
              onClick={() => {
                navigator.clipboard.writeText(messageText);
              }}
            >
              Copy the message
            </Button>
          </Stack>
          <Stack align="center">
            <Title order={2}>2. Email your manager</Title>
            <Text>
              Short emails are the best. Copy the template below and personalise it for yourself.
            </Text>
            <EmailBox subject={managerEmail.subject} recipient={managerEmail.recipient}>
              <Box dangerouslySetInnerHTML={{ __html: managerEmail.body.html }} />
            </EmailBox>
            <Button
              variant="subtle"
              leftIcon={<FaCopy />}
              onClick={() => {
                navigator.clipboard.writeText(managerEmail.body.raw);
              }}
            >
              Copy the email
            </Button>
          </Stack>
          <Stack align="center">
            <Title order={2}>3. Follow-up after 3 days</Title>
            <Text>
              Your manager is a busy person? Reply with this reminder if you haven’t heard back from
              them.
            </Text>
            <EmailBox
              subject={managerFollowupEmail.subject}
              recipient={managerFollowupEmail.recipient}
            >
              <Box
                dangerouslySetInnerHTML={{
                  __html: managerFollowupEmail.body.html,
                }}
              />
            </EmailBox>
            <Button
              variant="subtle"
              leftIcon={<FaCopy />}
              onClick={() => {
                navigator.clipboard.writeText(managerFollowupEmail.body.raw);
              }}
            >
              Copy the email
            </Button>
          </Stack>
          <Stack align="center">
            <Title order={2}>4. Enjoy Sizzy</Title>
            <Text sx={(t) => ({ color: t.colors.yellow[5] })}>
              <FaMedal size={54} />
            </Text>
            <Text>See you inside the app!</Text>
          </Stack>
        </Stack>
      </Center>
    </Shell>
  );
};

export async function getStaticProps() {
  const managerEmail = allEmails.find((e) => e.slug === "manager");
  const managerFollowupEmail = allEmails.find((e) => e.slug === "manager-followup");
  return {
    props: {
      managerEmail,
      managerFollowupEmail,
    },
  };
}

export default ExpensePage;
