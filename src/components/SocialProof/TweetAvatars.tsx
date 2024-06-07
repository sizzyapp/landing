import { ReactFC } from "../../types";
import { orderBy, uniqBy } from "lodash";
import Link from "next/link";
import { Avatar } from "@mantine/core";
import Tooltip from "../Tooltip";
import { Horizontal, Vertical } from "../../styles/layout-components";
import React from "react";
import { cleanName, cleanTweet } from "./utils";
import { Tweet } from "./types";

export const TweetAvatars: ReactFC<{ tweets: Tweet[] }> = ({ tweets }) => {
  const removedDuplicateUsers = uniqBy(tweets, (t) => t.user.id);
  const orderedTweets = orderBy(removedDuplicateUsers, (t) => t.favorite_count, ["desc"]);

  return (
    <Link href="/customers">
      <Avatar.Group spacing="xs" sx={{ width: "100%", maxWidth: 670, flexWrap: "wrap" }}>
        {orderedTweets.map((t) => {
          return (
            <Tooltip
              key={t.id}
              label={
                <Vertical spacing={0}>
                  <Horizontal spacing={5}>
                    <b>{cleanName(t.user.name)}</b>
                    <span>@{t.user.screen_name}</span>
                  </Horizontal>
                  <div>{cleanTweet(t.full_text)}</div>
                </Vertical>
              }
            >
              <Avatar size={50} radius={9999} src={t.user.profile_image_url_https} />
            </Tooltip>
          );
        })}
      </Avatar.Group>
    </Link>
  );
};
