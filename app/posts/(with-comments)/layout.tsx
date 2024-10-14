import AdSense from '@componets/AdSense'
import Utterances from '@componets/Utterances'
import type { PropsWithChildren } from 'react'

export default function CommentsLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <AdSense />
      <Utterances />
    </>
  )
}