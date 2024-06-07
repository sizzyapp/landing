export type Tweet = {
  id: string;
  id_str: string;
  text: string;
  full_text: string;
  user: User;
  created_at: string;
  entities: {
    user_mentions: User[];
    urls: any[];
    hashtags: any[];
    symbols: any[];
  };
  public_metrics: {
    retweet_count: number;
    reply_count: number;
    like_count: number;
    quote_count: number;
  };
  favorite_count: number;
  lang: string;
  is_quote_status: boolean;
  quoted_status: any;
  retweeted_status: any;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
};

export type User = {
  id: string;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  url: string;
  description: string;
  protected: boolean;
  verified: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  favourites_count: number;
  statuses_count: number;
  created_at: string;
  profile_banner_url: string;
  profile_image_url_https: string;
  can_dm: boolean;
};
