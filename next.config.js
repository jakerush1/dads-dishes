/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { hostname: "scontent.fagc1-1.fna.fbcdn.net" },
      { hostname: "scontent.fagc1-2.fna.fbcdn.net" },
    ],
  },
};

export default config;
