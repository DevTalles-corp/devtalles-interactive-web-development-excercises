import { SoundButton } from "./SoundButton";
import { sounds } from "../data/sounds";
import { useRef } from "react";



export const SoundButtonsContainer = () => {

  const nowPlaying = useRef<HTMLAudioElement | null>(null);

  const handlePlaySound = (soundId: string) => {

    if (nowPlaying.current) {
      nowPlaying.current.pause();
      nowPlaying.current.currentTime = 0;
    }

    const audio = document.getElementById(soundId) as HTMLAudioElement;

    if (audio) {
      audio.play();
      nowPlaying.current = audio;
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {sounds.map((sound) => (
        <SoundButton
          key={sound.id}
          sound={sound}
          icon={sound.icon}
          onPlaySound={handlePlaySound}
        />
      ))}
    </div>
  );
};
