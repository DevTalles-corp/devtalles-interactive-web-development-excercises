type NavButtonProps = {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
};

export const NavButton = ({ onClick, disabled, children }: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        rounded-md bg-blue-600 px-6 py-2 text-white transition-colors 
        hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400
      "
    >
      {children}
    </button>
  );
};