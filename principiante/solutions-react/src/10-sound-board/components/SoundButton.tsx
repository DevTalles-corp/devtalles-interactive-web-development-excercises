import { useState } from "react";
import type { Sound } from "../data/sounds";
import { cn } from "../../lib/utils";

interface Props {
  icon: string;
  onPlaySound: (soundId: string) => void;
  sound: Sound;
}


export const SoundButton = ( { onPlaySound, sound, icon }: Props ) => {

  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 1000);
  }

  return (
    <div className="flex flex-col items-center gap-4" onClick={ handleButtonClick }>
      <span
      className={cn(
        "text-4xl transition-opacity opacity-0 duration-1000",
        isActive && 'opacity-100',
        !isActive && 'opacity-0',
      )}>
        {icon}
      </span>
      <button
        onClick={() => onPlaySound(sound.id)}
        className="transform rounded-md bg-purple-600 px-8 py-4 text-lg font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-purple-700 active:scale-95 active:bg-purple-900"
      >
        {sound.name}
      </button>

      <audio id={sound.id} src={sound.file} />
    </div>
  );
};
