import { GenerateButton } from "./components/GenerateButton";
import { useColors } from "./hooks/useColors";
import { ColorDisplay } from './components/ColorDisplay';
import { CustomJumbotron } from '../shared/custom/CustomJumbotron';

export const RandomColorGenerator = () => {

  const { currentColor, handleGenerateColor } = useColors();

  return (
    <div
      className="flex flex-col min-h-screen w-full items-center justify-evenly transition-colors duration-500 ease-linear"
      style={{ backgroundColor: currentColor }}
    >
      <div className="rounded-xl bg-black/60 p-8 shadow-2xl backdrop-blur-sm">
        <CustomJumbotron title="Random Color Generator"/>
      </div>
      
      <div className="text-center">
        <div className="rounded-lg bg-black/60 p-8 shadow-2xl">

          <ColorDisplay currentColor={currentColor} />
      
          <GenerateButton
            onGenerateColor={handleGenerateColor}
            text="Generar Color"
          />
        </div>
      </div>
    </div>
  );
};
