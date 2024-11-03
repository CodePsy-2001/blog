import bundleAnalyzer from '@next/bundle-analyzer'
import nextra from 'nextra'

/* @type {import('nextra')} */
const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  mdxOptions: {},
  defaultShowCopyCode: true
})

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cleanDistDir: true,
  experimental: {
    optimizePackageImports: ['nextra/components', 'nextra-theme-blog']
  },
  webpack: (config, options) => {
    config.cache = false
    return config
  }
}

export default withBundleAnalyzer(withNextra(nextConfig))
