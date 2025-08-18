import { cn } from "../../lib/utils";


interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export const Overlay = ({ isOpen, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out z-30',
        isOpen && 'opacity-100 visible',
        !isOpen && 'opacity-0 invisible',
      )}
      aria-hidden="true"
    ></div>
  );
};