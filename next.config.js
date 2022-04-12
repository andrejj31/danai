/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  image: {
    domains: ["http://localhost:3080", "https://danai-backend.herokuapp.com/"],
  },
  // reactStrictMode: true,
};

module.exports = nextConfig;
