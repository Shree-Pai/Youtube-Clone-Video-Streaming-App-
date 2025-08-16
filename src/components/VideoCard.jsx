import React from 'react'
import { Link } from 'react-router-dom'

export default function VideoCard({video}) {
  return (
    <Link to={`/watch/${video.id}`} className="text-decoration-none text-reset">
      <div className="card card-video h-100">
        <div className="thumb">
          <img src={video.thumbnail} alt={video.title} loading="lazy" />
          {video.duration && (
            <span className="badge-duration">{video.duration}</span>
          )}
        </div>
        <div className="card-body">
          <h6 className="card-title mb-2">
            {video.title}
          </h6>
          <div className="d-flex align-items-start gap-2">
            {video.channelAvatar ? (
              <img src={video.channelAvatar} alt="" width="24" height="24" className="rounded-circle flex-shrink-0"/>
            ) : (
              <div className="rounded-circle bg-secondary flex-shrink-0" style={{width: 24, height: 24}}></div>
            )}
            <div className="meta-muted">
              <div>{video.channel}</div>
              <div>{video.views} • {video.posted}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
