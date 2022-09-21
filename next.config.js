/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'd33wubrfki0l68.cloudfront.net',
      'online-consultation-dev.s3.ap-south-1.amazonaws.com',
    ],
  },
  trailingSlash: true,
};
