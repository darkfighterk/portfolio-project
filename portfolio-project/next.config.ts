import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/https://github.com/darkfighterk/portfolio-project.git",  
    images: {
    unoptimized: true,
  },
};

export default nextConfig;