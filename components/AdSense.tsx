'use client'
import { useEffect } from 'react'

export default function AdSense() {
  useEffect(() => {
    const pushAd = () => {
      try {
        // @ts-ignore
        const adsbygoogle = window.adsbygoogle
        adsbygoogle.push({})
      } catch (e) {
        console.error(e)
      }
    }

    let interval = setInterval(() => {
      // @ts-ignore
      if (window.adsbygoogle) {
        pushAd()
        clearInterval(interval)
      }
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    // 배너1
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-8136657929424448"
      data-ad-slot="2152425232"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}