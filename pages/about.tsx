import { NextPage } from "next";
import Head from "next/head";

import { Container, Text, Title, Anchor, ActionIcon, Group } from "@mantine/core";
import { PayPalDonation } from "../components/other/paypal-donations";
import { Donate } from "../components/icon/donate";
import Link from "next/link";
import { IconBarrierBlock } from "@tabler/icons";
import React from "react";

/**
 * This is example page you can find it by going on ur /example
 * @constructor
 */
const About: NextPage = () => {
  return (
    <div>
      {/*This is custom HEAD overwrites the default one*/}
      <Head>
        <title>About COH3 Stats</title>
        <meta name="description" content="COH3 Stats - learn more about our page." />
      </Head>
      <>
        <Container size={"md"}>
          {" "}
          <Title order={1} size="h4" pt="md">
            About coh3stats.com
          </Title>
          <Group>
            <ActionIcon color="orange" size="sm" radius="xl" variant="transparent">
              <IconBarrierBlock size={24} />
            </ActionIcon>{" "}
            BETA version of the site.
          </Group>
          <Text pt="sm">
            Find your player card using search or leaderboards.
            <br />
            Search now works only with exact name match (case-sensitive)
          </Text>
          <Text pt="sm">More info on Github or Discord</Text>
          <Title order={1} size="h4" pt="md">
            API Usage / Collaboration
          </Title>
          We are open for collaboration / sharing the data. Reach out to us on Discord.
          <br />
          Its forbidden to use API / scrape the site without previous consulting!
          <Title order={1} size="h4" pt="md">
            Bug reports
          </Title>
          You can report the issues on{" "}
          <Anchor
            component={Link}
            href={"https://github.com/cohstats/coh3-stats/issues"}
            target={"_blank"}
          >
            {" "}
            GitHub
          </Anchor>{" "}
          or on our Discord
          <Title order={1} size="h4" pt="md">
            Donation
          </Title>
          All the donations are used for covering the server costs and expenses for running the
          site.
          <br />
          If we want to expand the functionality of the site - long history of matches / match
          analysis / history of player cards, it will significantly eat up the system resources -
          increase the cost.
          <br />
          <br />
          Actually all the donations for{" "}
          <Anchor component={Link} href={"https://coh2stats.com"} target={"_blank"}>
            coh2stats.com{" "}
          </Anchor>
          have been already used to pay for 2022 server costs. So all of them are appreciated.
          <br />
          <br />
          All the donations are listed at Ko-Fi.
          <Donate />
          <i>
            You can Donate via PayPal or Card at Ko-Fi,
            <br />
            no registration required.
          </i>
          <br />
          <br />
          <PayPalDonation />
          <i>Direct PayPal if you have problems with Ko-Fi</i>
        </Container>
      </>
    </div>
  );
};

export default About;
