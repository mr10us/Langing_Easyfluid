import withExportImages from "next-export-optimize-images";

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  output: "export",
  images: {
    unoptimized: true,
  }
};

// export default withExportImages(nextConfig);
export default nextConfig;
