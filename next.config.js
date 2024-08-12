/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        domains: ['static.vecteezy.com', "storage.googleapis.com", "lh3.googleusercontent.com"]
    }, 
    staticPageGenerationTimeout: 1000,
};

export default config;
