// src/components/AudioPlayer/AudioPlayer.jsx
import { useRef, useState } from 'react'
import './AudioPlayer.css'

const AudioPlayer = () => {
  const audioRef = useRef(null)
  const [sonando, setSonando] = useState(false)

  const toggleAudio = () => {
    if (sonando) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setSonando(!sonando)
  }

  return (
    <div className="audio-player">
      <audio ref={audioRef} src="/audio/azul.mp3" loop />
      <button onClick={toggleAudio}>
        {sonando ? '⏸️ Pausar música' : '▶️ Reproducir música'}
      </button>
    </div>
  )
}

export default AudioPlayer