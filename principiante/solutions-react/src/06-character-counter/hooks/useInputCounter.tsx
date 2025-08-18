import { useState } from "react";


const CHAR_LIMIT = 150;

export const useInputCounter = () => {
  
  const [userInput, setUserInput] = useState<string>("");
  
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(event.target.value);
  };

  return {
    // Properties
    userInput,

    // Methdos
    handleChange,

    // Computed
    charCount: userInput.length,
    remainingChars: CHAR_LIMIT - userInput.length,
    charLimit: CHAR_LIMIT,
  };
};
