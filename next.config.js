import bundleAnalyzer from '@next/bundle-analyzer'
import nextra from 'nextra'
import path from 'path'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  mdxOptions: {
    providerImportSource: path.join(process.cwd(), 'mdx-components') // 'nextra-theme-blog'
  },
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
  }
}

export default withBundleAnalyzer(withNextra(nextConfig))
