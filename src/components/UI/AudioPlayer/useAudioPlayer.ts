import { useState, useEffect, useRef } from "react";

export const useAudioPlayer = () => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    const setAudioData = () => {
      setDuration(audio ? audio.duration : 0);
      setCurTime(audio ? audio.currentTime : 0);
    };

    const setAudioTime = () => setCurTime(audio ? audio.currentTime : 0);
    const clearData = () => {
      setCurTime(0);
      setPlaying(false);
    };

    if (audio) {
      audio.addEventListener("loadeddata", setAudioData);
      audio.addEventListener("timeupdate", setAudioTime);
      audio.addEventListener("ended", clearData);

      if (playing) {
        audio.play();
      }

      if (!playing) {
        audio.pause();
      }
    }

    return () => {
      if (audio) {
        audio.removeEventListener("loadeddata", setAudioData);
        audio.removeEventListener("timeupdate", setAudioTime);
        audio.removeEventListener("ended", clearData);
      }
    };
  }, [audioRef.current, playing]);

  return {
    audioRef,
    currentTime,
    duration,
    playing,
    setPlaying,
  };
};
