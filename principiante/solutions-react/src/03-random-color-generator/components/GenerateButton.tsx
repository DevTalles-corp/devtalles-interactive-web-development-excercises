
interface Props {
  onGenerateColor: () => void;
  text: string;
}


export const GenerateButton = ({ onGenerateColor, text }: Props) => {

  return (
    <button
      onClick={onGenerateColor}
      className="rounded-md bg-white px-8 py-3 font-bold text-gray-800 shadow-md transition-transform hover:scale-105"
    >
      {text}
    </button>
  );
};
