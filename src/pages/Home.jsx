import React, { useEffect, useMemo, useState } from 'react'
import VideoCard from '../components/VideoCard.jsx'
import { VideoSkeleton } from '../components/Skeleton.jsx'

export default function Home() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  const categories = [
    'All', 'Trending', 'Music', 'Gaming', 'Technology', 'News',
    'Sports', 'Education', 'Entertainment', 'Science'
  ]

  useEffect(() => {
    setLoading(true)
    
    // Fetch video data from JSON file
    fetch('data/videos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch videos')
        }
        return response.json()
      })
      .then(data => {
        setVideos(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching videos:', error)
        setLoading(false)
        setVideos([])
      })
  }, [])

  // Get category filter from URL query parameter
  const params = new URLSearchParams(location.search)
  const cat = params.get('cat')

  // Filter videos based on selected category
  const filtered = useMemo(() => {
    if (!cat) return videos
    return videos.filter(v => v.category === cat)
  }, [videos, cat])

  return (
    <div className="container-fluid">
      {/* Category filter buttons */}
      <div className="category-filters mb-4" style={{overflowX: 'auto'}}>
        <div className="d-flex gap-2" style={{minWidth: 'max-content'}}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`btn btn-sm px-3 py-2 ${cat === category.toLowerCase() ? 'active' : ''}`}
              style={{
                background: cat === category.toLowerCase() ? 'var(--category-selected)' : 'var(--category-unselected)',
                color: 'var(--text)',
                border: 'none',
                borderRadius: '18px',
                whiteSpace: 'nowrap',
                fontSize: '14px',
                fontWeight: '500'
              }}
              onClick={() => {
                if (category === 'All') {
                  window.history.pushState({}, '', '/')
                } else {
                  window.history.pushState({}, '', `/?cat=${category.toLowerCase()}`)
                }
                window.location.reload()
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Video grid display */}
      <div className="videos-grid">
        <div className="row g-3">
          {loading && Array.from({length:8}).map((_,i)=>(
            <div className="col-12 col-sm-6 col-lg-4" key={i}><VideoSkeleton /></div>
          ))}
          {!loading && filtered.length === 0 && (
            <div className="col-12 text-center py-5">
              <p className="text-muted">No videos found for this category.</p>
            </div>
          )}
          {!loading && filtered.map(v => (
            <div className="col-12 col-sm-6 col-lg-4" key={v.id}>
              <VideoCard video={v} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
