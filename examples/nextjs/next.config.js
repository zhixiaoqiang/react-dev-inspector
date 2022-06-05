const isDev = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: isDev ? '' : '/nextjs',
  webpack: (config) => {
    config.resolve.symlinks = false

    return config
  },
}
