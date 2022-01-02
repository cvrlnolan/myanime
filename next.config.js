/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["s4.anilist.co"],
  },
  future: {
    webpack5: true,
  },
};
