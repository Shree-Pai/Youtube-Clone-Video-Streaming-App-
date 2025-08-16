import React, { useEffect, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard.jsx'
import { VideoSkeleton } from '../components/Skeleton.jsx'

function useLikes(id) {
  const key = `likes:${id}`
  const [state, setState] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) || {likes:0, dislikes:0, me: null} } catch { return {likes:0, dislikes:0, me: null} }
  })
  useEffect(() => { localStorage.setItem(key, JSON.stringify(state)) }, [state])
  const like = () => setState(s => ({...s, likes: s.me==='like'? s.likes-1 : s.likes + 1, dislikes: s.me==='dislike'? s.dislikes-1 : s.dislikes, me: s.me==='like'? null : 'like'}))
  const dislike = () => setState(s => ({...s, dislikes: s.me==='dislike'? s.dislikes-1 : s.dislikes + 1, likes: s.me==='like'? s.likes-1 : s.likes, me: s.me==='dislike'? null : 'dislike'}))
  return {state, like, dislike}
}

export default function Video() {
  const { id } = useParams()
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const { state, like, dislike } = useLikes(id)

  useEffect(() => {
    setLoading(true)
    setTimeout(async () => {
      const res = await fetch('/src/data/videos.json')
      const data = await res.json()
      setVideos(data)
      setLoading(false)
    }, 400)
  }, [id])

  const video = useMemo(() => videos.find(v => v.id === id), [videos, id])
  const related = useMemo(() => {
    if (!video) return []
    return videos.filter(v => video.related.includes(v.id))
  }, [videos, video])

  if (loading) {
    return <div className="row g-4">
      <div className="col-lg-8"><VideoSkeleton /></div>
      <div className="col-lg-4"><VideoSkeleton /></div>
    </div>
  }

  if (!video) {
    return <div className="p-5 text-center">Video not found. <Link to="/">Go Home</Link></div>
  }

  return (
    <div className="video-page-container">
      <div className="row g-4">
        <div className="col-12 col-lg-8">
          {/* Video Player */}
          <div className="video-player-container mb-4">
            <div className="video-player-wrapper ratio ratio-16x9">
              <iframe src={video.src} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>

          {/* Video Title */}
          <h1 className="video-title mb-3">{video.title}</h1>

          {/* Video Stats and Actions */}
          <div className="video-actions-section mb-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="video-stats d-flex align-items-center gap-3">
                <span className="views-count">{video.views} views</span>
                <span className="posted-time">{video.posted}</span>
              </div>
              
              <div className="action-buttons d-flex align-items-center gap-2">
                <button className="btn btn-outline-light action-btn" onClick={like}>
                  <i className="fas fa-thumbs-up me-2"></i>
                  {state.likes}
                </button>
                <button className="btn btn-outline-light action-btn" onClick={dislike}>
                  <i className="fas fa-thumbs-down me-2"></i>
                  {state.dislikes}
                </button>
                <button className="btn btn-outline-light action-btn">
                  <i className="fas fa-share me-2"></i>
                  Share
                </button>
                <button className="btn btn-outline-light action-btn">
                  <i className="fas fa-download me-2"></i>
                  Download
                </button>
                <button className="btn btn-outline-light action-btn">
                  <i className="fas fa-cut me-2"></i>
                  Clip
                </button>
                <button className="btn btn-outline-light action-btn">
                  <i className="fas fa-ellipsis-h"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Channel Info and Subscribe */}
          <div className="channel-section mb-4 p-3 rounded">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <img src={video.channelAvatar} alt="" width="48" height="48" className="rounded-circle channel-avatar"/>
                <div>
                  <div className="channel-name fw-bold">{video.channel}</div>
                  <div className="subscriber-count text-muted">1.8K subscribers</div>
                </div>
              </div>
              <button className="btn btn-danger subscribe-btn">
                Subscribe
              </button>
            </div>
          </div>

          {/* Video Description */}
          <div className="video-description-section mb-4 p-3 rounded">
            <p className="mb-0">{video.description}</p>
          </div>

          {/* Comments Section */}
          <div className="comments-section">
            <div className="comments-header d-flex align-items-center justify-content-between mb-3">
              <h5 className="mb-0">
                <i className="fas fa-comments me-2"></i>
                {video.comments.length} Comments
              </h5>
              <div className="sort-options">
                <select className="form-select form-select-sm">
                  <option>Sort by</option>
                  <option>Top comments</option>
                  <option>Newest first</option>
                </select>
              </div>
            </div>

            {/* Add Comment */}
            <div className="add-comment-section mb-4">
              <div className="d-flex gap-3">
                <div className="comment-avatar">
                  <i className="fas fa-user-circle text-muted" style={{fontSize: '2rem'}}></i>
                </div>
                <div className="flex-grow-1">
                  <input 
                    type="text" 
                    className="form-control comment-input" 
                    placeholder="Add a comment..."
                  />
                </div>
              </div>
            </div>

            {/* Comments List */}
            {video.comments.length > 0 ? (
              <div className="comments-list">
                {video.comments.map(c => (
                  <div className="comment-item mb-3" key={c.id}>
                    <div className="d-flex gap-3">
                      <div className="comment-avatar">
                        <i className="fas fa-user-circle text-muted" style={{fontSize: '2rem'}}></i>
                      </div>
                      <div className="comment-content flex-grow-1">
                        <div className="comment-header mb-2">
                          <span className="comment-author fw-bold">@{c.user}</span>
                          <span className="comment-time text-muted ms-2">1 month ago</span>
                        </div>
                        <div className="comment-text mb-2">{c.text}</div>
                        <div className="comment-actions d-flex align-items-center gap-3">
                          <button className="btn btn-sm btn-outline-light">
                            <i className="fas fa-thumbs-up me-1"></i>
                            {c.likes}
                          </button>
                          <button className="btn btn-sm btn-outline-light">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-comments text-center py-4">
                <i className="fas fa-comment-slash text-muted mb-3" style={{fontSize: '3rem'}}></i>
                <h6 className="text-muted">No comments yet</h6>
                <p className="text-muted small">Be the first to share your thoughts!</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Videos Sidebar */}
        <div className="col-12 col-lg-4">
          <div className="related-videos-sidebar">
            <h6 className="related-title mb-3">
              <i className="fas fa-play-circle me-2"></i>
              Related
            </h6>
            <div className="related-videos-list">
              {related.map(v => (
                <div key={v.id} className="related-video-item mb-3">
                  <VideoCard video={v} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
