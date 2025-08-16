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
    <div className="row g-4">
      <div className="col-12 col-lg-8">
        <div className="video-player-wrapper mb-3 ratio ratio-16x9">
          <iframe src={video.src} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        <h4 className="mb-2">{video.title}</h4>
        <div className="d-flex align-items-center gap-2 mb-3">
          <img src={video.channelAvatar} alt="" width="36" height="36" className="rounded-circle"/>
          <div className="me-auto">
            <div className="fw-semibold">{video.channel}</div>
            <div className="small meta-muted">{video.views} views • {video.posted}</div>
          </div>
          <button className="btn btn-outline-light me-2" onClick={like}>👍 {state.likes}</button>
          <button className="btn btn-outline-light me-2" onClick={dislike}>👎 {state.dislikes}</button>
          <button className="btn btn-danger">Subscribe</button>
        </div>
        <div className="p-3 rounded" style={{background:'var(--bg-soft)'}}>
          <p className="mb-0">{video.description}</p>
        </div>

        <div className="mt-4">
          <h5>Comments</h5>
          <ul className="list-group list-group-flush">
            {video.comments.map(c => (
              <li className="list-group-item bg-transparent text-white border-secondary" key={c.id}>
                <strong>{c.user}</strong> <span className="meta-muted small">• {c.likes} likes</span>
                <div>{c.text}</div>
              </li>
            ))}
            {video.comments.length === 0 && <li className="list-group-item bg-transparent text-white border-secondary">No comments yet.</li>}
          </ul>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <h6 className="mb-3">Related</h6>
        <div className="d-flex flex-column gap-3">
          {related.map(v => <VideoCard key={v.id} video={v} />)}
        </div>
      </div>
    </div>
  )
}
