import { cn } from '../../lib/utils';

interface ContentBoxProps {
  children: React.ReactNode;
  isVisible: boolean;
  ref: React.RefObject<HTMLDivElement | null>
}

export const ContentBox = ( { children, isVisible, ref }: ContentBoxProps ) => {
  return (
    <div
      ref={ref}
      className={cn(
        'm-4 mx-auto w-1/2 rounded-lg bg-cyan-800 p-8 text-white shadow-lg',
        'transition-all duration-1000 ease-out',
        {
          'opacity-0 translate-y-10': !isVisible,
          'opacity-100 translate-y-0': isVisible,
        }
      )}
    >
      {children}
    </div>
  );
};