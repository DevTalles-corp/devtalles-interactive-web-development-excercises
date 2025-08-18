import { CustomJumbotron } from "../shared/custom/CustomJumbotron";
import { useInputCounter } from "./hooks/useInputCounter";
import { cn } from '../lib/utils';


export const CharacterCounter = () => {
  
  const { charCount, charLimit, handleChange, remainingChars, userInput } = useInputCounter();

  return (
    <>
      <CustomJumbotron title="Character Counter" />

      <div className="flex flex-col min-h-screen items-center p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
          
          <textarea
            className="w-full rounded-md border border-gray-300 p-3 text-lg text-gray-700 shadow-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Escribe algo aquí..."
            value={userInput}
            onChange={handleChange}
            maxLength={charLimit}
            rows={5}
          />

          
          <div className="mt-3 flex justify-between text-sm font-medium">
            <span className="text-gray-500">
              Caracteres: {charCount} / {charLimit}
            </span>
            <span
              className={cn(
                'transition-colors',
                (remainingChars < 20) && "text-red-500",
                !(remainingChars < 20) && 'text-gray-500',
              )}
            >
              Restantes: {remainingChars}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
