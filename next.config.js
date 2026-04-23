/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "antd",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-select",
    "rc-tree",
    "rc-table",
    "@ant-design/icons",
  ],
};

module.exports = nextConfig;
