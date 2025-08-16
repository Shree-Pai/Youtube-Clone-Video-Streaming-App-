import React, { useEffect, useMemo, useState } from 'react'
import VideoCard from '../components/VideoCard.jsx'
import { VideoSkeleton } from '../components/Skeleton.jsx'

export default function Search() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const params = new URLSearchParams(location.search)
  const q = (params.get('q') || '').toLowerCase()

  useEffect(() => {
    setLoading(true)
    setTimeout(async () => {
      const res = await fetch('/src/data/videos.json')
      const data = await res.json()
      setVideos(data)
      setLoading(false)
    }, 300)
  }, [q])

  // Filter videos based on search query
  const results = useMemo(() => {
    const term = q.trim()
    if (!term) return []
    return videos.filter(v =>
      v.title.toLowerCase().includes(term) ||
      v.channel.toLowerCase().includes(term) ||
      v.description.toLowerCase().includes(term) ||
      v.category.toLowerCase().includes(term)
    )
  }, [videos, q])

  return (
    <div className="container-fluid">
      <h5 className="mb-3">Search results for: <em>{q}</em></h5>
      <div className="row g-3">
        {loading && Array.from({length:8}).map((_,i)=>(
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={i}><VideoSkeleton /></div>
        ))}
        {!loading && results.map(v => (
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={v.id}>
            <VideoCard video={v} />
          </div>
        ))}
        {!loading && results.length===0 && <div className="p-5 text-center">No results found.</div>}
      </div>
    </div>
  )
}
