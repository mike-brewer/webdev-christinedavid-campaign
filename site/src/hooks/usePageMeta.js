import { useEffect } from 'react'

const DEFAULT_DESCRIPTION =
  'Christine David is running for Atherton City Council in November 2026 after more than twenty years of civic and community service.'

function usePageMeta({ title, description = DEFAULT_DESCRIPTION }) {
  useEffect(() => {
    document.title = title

    const tag = document.querySelector('meta[name="description"]')
    if (tag) {
      tag.setAttribute('content', description)
    }
  }, [title, description])
}

export default usePageMeta
