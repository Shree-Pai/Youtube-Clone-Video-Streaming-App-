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
    // Simulate fetching with delay
    setTimeout(() => {
      // Mock data matching exactly what's shown in the image
      setVideos([
        // Video 1 - Circuit board with React tutorial
        {
          id: "1",
          title: "Build a YouTube Clone with React in 15 Minutes",
          channel: "CodeCraft",
          views: "1.2M",
          thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1280&auto=format&fit=crop",
          category: "technology",
          duration: "15:42",
          posted: "2 days ago",
          channelAvatar: "https://i.pravatar.cc/48?img=12"
        },
        // Video 2 - Laptop with coding tips
        {
          id: "2",
          title: "Top 10 Coding Productivity Tips",
          channel: "DevDaily",
          views: "845K",
          thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1280&auto=format&fit=crop",
          category: "technology",
          duration: "10:05",
          posted: "1 week ago",
          channelAvatar: "https://i.pravatar.cc/48?img=23"
        },
        // Video 3 - Dark screen with code editor
        {
          id: "3",
          title: "Relaxing Lofi Beats to Study",
          channel: "Lofi Central",
          views: "2.4M",
          thumbnail: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1280&auto=format&fit=crop",
          category: "music",
          duration: "1:00:00",
          posted: "3 weeks ago",
          channelAvatar: "https://i.pravatar.cc/48?img=31"
        },
        // Video 4 - Gaming setup with headphones
        {
          id: "4",
          title: "Epic Gaming Montage 2025",
          channel: "ProGamer",
          views: "540K",
          thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1280&auto=format&fit=crop",
          category: "gaming",
          duration: "8:20",
          posted: "5 days ago",
          channelAvatar: "https://i.pravatar.cc/48?img=44"
        },
        // Video 5 - Food bowl with tech gadgets
        {
          id: "5",
          title: "Top 10 Tech Gadgets You Need",
          channel: "TechTalk",
          views: "1.8M",
          thumbnail: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1280&auto=format&fit=crop",
          category: "technology",
          duration: "12:30",
          posted: "1 month ago",
          channelAvatar: "https://i.pravatar.cc/48?img=7"
        },
        // Additional videos for better grid
        {
          id: "6",
          title: "Latest Tech News - AI Breakthroughs 2024",
          channel: "Tech News Daily",
          views: "789K",
          thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1280&auto=format&fit=crop",
          category: "news",
          duration: "18:45",
          posted: "2 days ago",
          channelAvatar: "https://i.pravatar.cc/48?img=15"
        },
        {
          id: "7",
          title: "Premier League Highlights - Matchday 25",
          channel: "Football Central",
          views: "1.9M",
          thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1280&auto=format&fit=crop",
          category: "sports",
          duration: "22:15",
          posted: "1 day ago",
          channelAvatar: "https://i.pravatar.cc/48?img=22"
        },
        {
          id: "8",
          title: "Mathematics for Beginners - Complete Course",
          channel: "Math Academy",
          views: "2.4M",
          thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1280&auto=format&fit=crop",
          category: "education",
          duration: "45:30",
          posted: "1 week ago",
          channelAvatar: "https://i.pravatar.cc/48?img=33"
        }
      ])
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
      {/* Category Filters */}
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

      {/* Videos Grid */}
      <div className="videos-grid">
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
    </div>
  )
}
