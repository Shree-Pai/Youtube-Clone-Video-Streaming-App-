import React, { useEffect, useMemo, useState } from 'react'
import VideoCard from '../components/VideoCard.jsx'
import { VideoSkeleton } from '../components/Skeleton.jsx'

export default function Home() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    // Simulate fetching with delay
    setTimeout(async () => {
      const res = await fetch('/src/data/videos.json')
      const data = await res.json()
      setVideos(data)
      setLoading(false)
    }, 500)
  }, [])

  // Category filter via query param
  const params = new URLSearchParams(location.search)
  const cat = params.get('cat')

  const filtered = useMemo(() => {
    if (!cat) return videos
    return videos.filter(v => v.category === cat)
  }, [videos, cat])

  return (
    <div className="container-fluid">
      <div className="row g-3">
        {loading && Array.from({length:8}).map((_,i)=>(
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={i}><VideoSkeleton /></div>
        ))}
        {!loading && filtered.map(v => (
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={v.id}>
            <VideoCard video={v} />
          </div>
        ))}
      </div>
    </div>
  )
}
