import { cn } from "../../lib/utils";

type StepCircleProps = {
  step: number;
  isActive: boolean;
};

export const StepCircle = ({ step, isActive }: StepCircleProps) => {
  return (
    <div
      className={cn(
        'flex h-12 w-12 items-center justify-center rounded-full border-4 bg-white text-lg font-bold transition-colors duration-400 ease-in-out z-1',
        isActive && 'border-blue-600 text-blue-600',
        !isActive && 'border-gray-300 text-gray-400',
      )}
    >
      {step}
    </div>
  );
};