import { useState } from "react";
import { generateHexColor } from "../helpers/generate-hex-color.helper";



export const useColors = () => {

  const [currentColor, setCurrentColor] = useState<string>(() => generateHexColor());

  const handleGenerateColor = () => {
    const newColor = generateHexColor();
    setCurrentColor(newColor);
  }

  return {
    // Properties
    currentColor,

    // Methods
    handleGenerateColor,
  }
}