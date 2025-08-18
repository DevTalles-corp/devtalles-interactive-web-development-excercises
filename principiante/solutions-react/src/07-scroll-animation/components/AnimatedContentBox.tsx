import { useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { ContentBox } from "./ContentBox";

export const AnimatedContentBox = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <ContentBox ref={ref} isVisible={isVisible}>
      {children}
    </ContentBox>
  );
};