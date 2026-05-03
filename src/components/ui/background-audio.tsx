"use client"

import { useEffect, useRef, useState } from "react"

export default function BackgroundAudio({
  src = "/audio/dark-theme.mp3",
  volume = 0.28,
  startMuted = false,
}: {
  src?: string
  volume?: number
  startMuted?: boolean
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [muted, setMuted] = useState(startMuted)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.volume = volume
    a.loop = true
    a.preload = "auto"

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    a.addEventListener("play", onPlay)
    a.addEventListener("pause", onPause)

    return () => {
      a.removeEventListener("play", onPlay)
      a.removeEventListener("pause", onPause)
    }
  }, [volume])

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.muted = muted
    // attempt to autoplay (if muted it's allowed in most browsers)
    a.play().catch(() => {})
  }, [muted])

  const toggleMute = () => {
    const a = audioRef.current
    if (!a) return
    a.muted = !a.muted
    setMuted(a.muted)
    if (!a.paused) return
    // ensure playback when unmuting
    a.play().catch(() => {})
  }

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" loop />
      <button
        aria-label={muted ? "Unmute background music" : "Mute background music"}
        onClick={toggleMute}
        className="pointer-events-auto fixed top-4 right-4 z-50 p-2 rounded bg-black/50 text-white backdrop-blur hover:bg-black/70 transition-colors"
      >
        {muted ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zM5 7.88L6.12 9H5V7.88zm9-5V3.88L16.88 9H19v6h-2.12l2.12 2.12V11.88c2.87 1.04 5-1.25 5-4.88 0-3.63-2.13-5.92-5-4.88z" />
            <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="2" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>
    </>
  )
}
