import { useMDXComponents as useBlogMDXComponents } from 'nextra-theme-blog'

export function useMDXComponents() {
  return useBlogMDXComponents({
    DateFormatter: ({ date }) =>
      date.toLocaleDateString('ko', { day: 'numeric', month: 'long', year: 'numeric' })
  })
}