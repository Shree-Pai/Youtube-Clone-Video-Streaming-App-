import React from 'react'

// Loading skeleton component for video cards
export function VideoSkeleton() {
  return (
    <div className="card card-video h-100">
      <div className="thumb skeleton" style={{height: '200px'}}></div>
      <div className="card-body">
        <div className="skeleton mb-2" style={{height: '16px', width: '100%'}}></div>
        <div className="skeleton mb-2" style={{height: '14px', width: '80%'}}></div>
        <div className="d-flex align-items-start gap-2">
          <div className="skeleton rounded-circle" style={{width: '24px', height: '24px'}}></div>
          <div className="flex-grow-1">
            <div className="skeleton mb-1" style={{height: '12px', width: '60%'}}></div>
            <div className="skeleton" style={{height: '12px', width: '40%'}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
