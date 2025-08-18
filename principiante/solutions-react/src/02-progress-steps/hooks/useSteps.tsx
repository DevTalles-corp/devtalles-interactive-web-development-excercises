import { useState } from "react";

const steps = [1, 2, 3, 4];

export const useSteps = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  return {
    // Properties
    currentStep,
    steps,

    // Methods
    handleNext,
    handlePrev,

    // Compiled
    progressWidth: `${((currentStep - 1) / (steps.length - 1)) * 100}%`
  }
};
