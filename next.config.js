module.exports = {
  env: {
    SITE_URL: process.env.SITE_URL,
    NEXTAUTH_URL: process.env.SITE_URL,
    NEXTAUTH_USERNAME: process.env.NEXTAUTH_USERNAME,
    NEXTAUTH_PASSWORD: process.env.NEXTAUTH_PASSWORD,
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "styles/_common.scss";`,
  },
};
