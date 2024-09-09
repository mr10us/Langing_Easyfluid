/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  outDir: "out",
  convertFormat: [
    ["png", "webp"],
    ["jpg", "webp"],
    ["jpeg", "webp"],
  ],
};

module.exports = config;
