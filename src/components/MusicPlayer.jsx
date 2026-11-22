import { useEffect, useRef, useState } from 'react';
import { Pause, Play, Upload, Volume2 } from 'lucide-react';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const filePickerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSource, setAudioSource] = useState('/audio/sajan-sajan.mp3');
  const [statusMessage, setStatusMessage] = useState(
    'Tap play · add your MP3 if needed',
  );
  const [volume, setVolume] = useState(0.65);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      if (audioSource.startsWith('blob:')) {
        URL.revokeObjectURL(audioSource);
      }
    };
  }, [audioSource]);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setStatusMessage('NOW PLAYING');
    } catch {
      setIsPlaying(false);
      setStatusMessage('MP3 missing — choose your audio file below');
    }
  };

  const handleFileSelection = (event) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    if (!selectedFile.type.startsWith('audio/')) {
      setStatusMessage('Please select an audio file');
      return;
    }

    if (audioSource.startsWith('blob:')) {
      URL.revokeObjectURL(audioSource);
    }

    const fileUrl = URL.createObjectURL(selectedFile);

    setAudioSource(fileUrl);
    setIsPlaying(false);
    setStatusMessage(selectedFile.name);

    window.setTimeout(async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
        setStatusMessage('NOW PLAYING');
      } catch {
        setStatusMessage('Press play to start');
      }
    }, 100);
  };

  return (
    <div className="music-pill">
      <audio
        ref={audioRef}
        src={audioSource}
        loop
        preload="none"
        onPlay={() => {
          setIsPlaying(true);
          setStatusMessage('NOW PLAYING');
        }}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false);
          setStatusMessage('Add your Sajan Sajan MP3');
        }}
      />

      <button
        type="button"
        onClick={togglePlayback}
        className="music-play"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Pause size={15} /> : <Play size={15} fill="currentColor" />}
      </button>

      <div className="music-meta">
        <p className="music-title">SAJAN SAJAN</p>
        <p className="music-sub" title={statusMessage}>
          {statusMessage}
        </p>
      </div>

      <Volume2 size={15} className="music-volume-icon" />

      <input
        aria-label="Music volume"
        className="music-volume"
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={volume}
        onChange={(event) => setVolume(Number(event.target.value))}
      />

      <button
        type="button"
        className="music-upload"
        onClick={() => filePickerRef.current?.click()}
        aria-label="Choose music file"
        title="Choose your Sajan Sajan MP3"
      >
        <Upload size={15} />
      </button>

      <input
        ref={filePickerRef}
        type="file"
        accept="audio/*"
        hidden
        onChange={handleFileSelection}
      />
    </div>
  );
}
