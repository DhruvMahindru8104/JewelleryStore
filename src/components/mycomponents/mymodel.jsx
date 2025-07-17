'use client' // Only if needed in App Router

import React from 'react'

const AntiqueRingBoxModel = () => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Antique Ring Box"
        frameBorder="0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allowFullScreen
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        src="https://sketchfab.com/models/d3ad185e633241db9ac29aa155d4871d/embed"
        className="w-full h-[480px]"
      ></iframe>
    </div>
  )
}

export default AntiqueRingBoxModel
