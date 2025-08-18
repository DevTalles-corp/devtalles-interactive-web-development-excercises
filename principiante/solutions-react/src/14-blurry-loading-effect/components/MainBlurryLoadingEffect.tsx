import { mapRange } from '../helpers/mapRange';
import { useProgress } from '../hooks/useProgress';

export function MainBlurryLoadingEffect() {

  const { progress } = useProgress();
  
  const blurEffect = mapRange(progress, 0, 100, 30, 0); // Mapea 0-100 a 30px-0px de blur
  const textOpacity = mapRange(progress, 0, 100, 1, 0); // Mapea 0-100 a 1-0 de opacidad

  return (
    <div className="relative w-10/12 h-10/12">
      
      <div
        className="absolute top-0 left-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1597840900616-664e930c29df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
        style={{
          filter: `blur(${blurEffect}px)`,
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white"
        style={{
          opacity: textOpacity,
        }}
      >
        {progress}%
      </div>
    </div>
  );
}