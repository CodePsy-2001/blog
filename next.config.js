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
  output: 'export', // 동적 sitemap.ts 및 사용시 output export 불가능
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
