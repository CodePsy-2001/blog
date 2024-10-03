export default function Utterances() {
  return (
    <section
      id="comments"
      ref={(element) => {
        if (!element) return
        const script = document.createElement('script')
        script.src = 'https://utteranc.es/client.js'
        script.async = true
        script.crossOrigin = 'anonymous'
        script.setAttribute('repo', 'CodePsy-2001/codepsy2001.blog')
        script.setAttribute('issue-term', 'title')
        script.setAttribute('theme', 'preferred-color-scheme')
        element.appendChild(script)
      }}
    >
      <hr />
      <h4 className="text-xl">
        댓글
      </h4>
    </section>
  )
}