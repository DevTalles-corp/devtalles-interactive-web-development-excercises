import { StepCircle } from "./StepCircle";
import { NavButton } from "./NavButton";
import { useSteps } from "../hooks/useSteps";

const TOTAL_STEPS = 4;

export const ProgressContainer = () => {

    const { currentStep, handleNext, handlePrev, progressWidth, steps } = useSteps();

  return (
    <div className="flex flex-col items-center justify-center p-8 font-sans">
      <div className="w-full max-w-sm">
        <div className="relative flex items-center justify-between">
          <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 bg-gray-300" />

          <div
            className="absolute top-1/2 h-1 -translate-y-1/2 bg-blue-600 transition-all duration-500 ease-in-out"
            style={{ width: `${progressWidth}` }}
          />
          {steps.map((step) => (
            <StepCircle key={step} step={step} isActive={step <= currentStep} />
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <NavButton
            onClick={handlePrev}
            disabled={currentStep === 1}
          >
            Anterior
          </NavButton>
          <NavButton
            onClick={handleNext}
            disabled={currentStep === TOTAL_STEPS}
          >
            Siguiente
          </NavButton>
        </div>
        
      </div>
    </div>
  );
};
