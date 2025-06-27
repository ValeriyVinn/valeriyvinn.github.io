/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "", // ❗️обов'язково пустий для User репозиторію
  assetPrefix: "/", // ❗️додай цей рядок
};

export default nextConfig;
