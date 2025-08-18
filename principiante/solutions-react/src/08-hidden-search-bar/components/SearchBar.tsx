import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { SearchIcon } from "./SearchIcon";

export const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  const handleToggle = () => {
    inputRef.current!.value = "";
    setIsActive((prev) => !prev);
  };

  const containerClasses = cn(
    `flex items-center justify-center
    bg-slate-800 rounded-full
    transition-all duration-500 ease-in-out text-white`,
    isActive && "w-72 shadow-lg",
    !isActive && "w-12"
  );

  const inputClasses = cn(
    `w-full bg-transparent border-none 
    text-white placeholder-gray-400 focus:outline-none
    transition-all duration-500 ease-in-out`,
    isActive && "pl-4 pr-2 opacity-100",
    !isActive && "w-0 opacity-0"
  );

  return (
    <div className={containerClasses}>
      <input
        ref={inputRef}
        type="text"
        className={inputClasses}
        placeholder="Buscar..."
        disabled={!isActive}
      />
      <button
        onClick={handleToggle}
        className="flex-shrink p-3 text-white hover:text-cyan-400 focus:outline-none"
        aria-label="Toggle search bar"
      >
        <SearchIcon />
      </button>

    </div>
  );
};
