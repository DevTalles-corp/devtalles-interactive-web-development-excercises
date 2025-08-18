import { cn } from "../../lib/utils";

interface Props {
  children: React.ReactNode;
  id: string;
  isActive: boolean;
  onClick: () => void;
  panelId: string;
}

export const TabButton = ({ id, panelId, isActive, onClick, children }: Props) => {
  return (
    <button
      id={id}
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId}
      onClick={onClick}
      className={cn(
        'py-2 px-4 font-medium text-lg transition-colors duration-500',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-400',
        isActive && 'border-b-2 border-blue-400 text-blue-300',
        !isActive && 'text-gray-400 hover:bg-gray-700 hover:text-gray-200',
      )}
    >
      {children}
    </button>
  );
};