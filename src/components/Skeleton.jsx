import React from 'react'

export function VideoSkeleton() {
  return (
    <div className="card card-video">
      <div className="thumb skeleton"></div>
      <div className="card-body">
        <div className="skeleton rounded mb-2" style={{height:16, width:'80%'}}></div>
        <div className="skeleton rounded" style={{height:14, width:'60%'}}></div>
      </div>
    </div>
  )
}
