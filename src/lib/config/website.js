import {
  PUBLIC_CONTACT_EMAIL,
  PUBLIC_FACEBOOK_AUTHOR_PAGE,
  PUBLIC_FACEBOOK_PAGE,
  PUBLIC_GITHUB_PAGE,
  PUBLIC_LINKEDIN_PROFILE,
  PUBLIC_SITE_URL,
  PUBLIC_TELEGRAM_USERNAME,
  PUBLIC_TIKTOK_USERNAME,
  PUBLIC_TWITTER_USERNAME,
  PUBLIC_TWITTER_USER_ID,
} from "$env/static/public"

const facebookPageName = PUBLIC_FACEBOOK_PAGE
const facebookAuthorPageName = PUBLIC_FACEBOOK_AUTHOR_PAGE

const website = {
  author: "Thanh Hoang-Minh",
  ogLanguage: "en_GB",
  siteLanguage: "en-GB",
  siteTitle: "MillionScope",
  siteShortTitle: "MillionScope Blog",
  description: "MillionScope - Wonderful science in your hand",
  siteUrl: PUBLIC_SITE_URL,
  backgroundColor: "#1b4079",
  themeColor: "#d62828",
  contactEmail: PUBLIC_CONTACT_EMAIL,
  facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
  facebookAuthorPageName,
  facebookPage: `https://www.facebook.com/${facebookPageName}`,
  facebookPageName,
  githubPage: PUBLIC_GITHUB_PAGE,
  linkedinProfile: PUBLIC_LINKEDIN_PROFILE,
  telegramUsername: PUBLIC_TELEGRAM_USERNAME,
  tiktokUsername: PUBLIC_TIKTOK_USERNAME,
  twitterUsername: PUBLIC_TWITTER_USERNAME,
  twitterUserId: PUBLIC_TWITTER_USER_ID
}

export { website as default }
