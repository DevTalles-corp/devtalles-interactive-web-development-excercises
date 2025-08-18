interface Props {
  id: number;
  title: string;
  imageUrl: string;
  isActive: boolean;
  onPanelClick: (id: number) => void;
}

export const Panel = ({
  id,
  title,
  imageUrl,
  isActive,
  onPanelClick,
}: Props) => {
  return (
    <div
      className={`
        relative h-[80vh] cursor-pointer rounded-[50px] bg-cover bg-center 
        bg-no-repeat text-white transition-all duration-700 ease-in-out
      `}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6)), url(${imageUrl})`,
        flex: isActive ? 5 : 0.5,
      }}
      onClick={() => onPanelClick(id)}
    >
      <h3
        className={`
          absolute bottom-5 left-5 m-0 text-2xl font-bold
          transition-opacity duration-300 ease-in
        `}
        style={{
          opacity: isActive ? "100%" : 0,
        }}
      >
        {title}
      </h3>
    </div>
  );
};
