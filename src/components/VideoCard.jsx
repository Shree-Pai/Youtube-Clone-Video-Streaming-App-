import React from 'react'
import { Link } from 'react-router-dom'

export default function VideoCard({video}) {
  return (
    <Link to={`/watch/${video.id}`} className="text-decoration-none text-reset">
      <div className="card card-video h-100">
        <div className="thumb">
          <img src={video.thumbnail} alt={video.title} loading="lazy" />
          <span className="badge-duration">{video.duration}</span>
        </div>
        <div className="card-body">
          <h6 className="card-title mb-1">{video.title}</h6>
          <div className="d-flex align-items-center gap-2">
            <img src={video.channelAvatar} alt="" width="28" height="28" className="rounded-circle"/>
            <div className="small meta-muted">{video.channel} • {video.views} views • {video.posted}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
