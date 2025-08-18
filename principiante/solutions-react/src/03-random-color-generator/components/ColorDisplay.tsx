
interface Props {
  currentColor: string;
}

export const ColorDisplay = ({ currentColor }: Props) => {
  return (
    <h2
      className="mb-6 font-mono text-4xl font-bold transition-colors duration-500 ease-linear"
      style={{color: currentColor}}
    >
      { currentColor }
    </h2>
  );
};
