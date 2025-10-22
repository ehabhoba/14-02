"use client"

import AdSenseAd from "./AdSenseAd"

export default function AdSenseDisplay() {
  return (
    <div className="space-y-8">
      {/* Header Ad */}
      <AdSenseAd slot="1234567890" format="horizontal" className="bg-muted p-4 rounded-lg" />

      {/* Sidebar Ad */}
      <AdSenseAd slot="0987654321" format="vertical" className="bg-muted p-4 rounded-lg" />

      {/* In-content Ad */}
      <AdSenseAd slot="5555555555" format="rectangle" className="bg-muted p-4 rounded-lg" />
    </div>
  )
}
