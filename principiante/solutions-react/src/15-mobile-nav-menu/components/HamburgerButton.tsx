import { cn } from "../../lib/utils";



interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const barBaseClasses = "block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out";

export const HamburgerButton = ({ isOpen, onClick }: Props) => {

  return (
    <button
      onClick={onClick}
      className="relative z-50 w-8 h-8 flex flex-col justify-around items-center focus:outline-none"
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
    >

      <span
      className={cn(
        `${barBaseClasses}`,
        isOpen && 'transform rotate-45 translate-y-[11px]',
        !isOpen && ''
      )}
      ></span>
      
      <span
        className={cn(
          `${barBaseClasses}`,
          isOpen && 'opacity-0',
          !isOpen && 'opacity-100'
        )}
      ></span>
      
      <span
        className={cn(
          `${barBaseClasses}`,
          isOpen && 'transform -rotate-45 -translate-y-[11px]',
          !isOpen && ''
        )}
      ></span>
    </button>
  );
};