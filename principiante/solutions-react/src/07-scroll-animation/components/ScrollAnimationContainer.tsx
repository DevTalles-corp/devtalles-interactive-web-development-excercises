import { CustomJumbotron } from '../../shared/custom/CustomJumbotron';
import { AnimatedContentBox } from './AnimatedContentBox';

export const ScrollAnimationContainer = () => {
  const boxesContent = Array.from({ length: 20 }, (_, i) => `Caja de Contenido #${i + 1}`);

  return (
    <div className="min-h-screen bg-gray-900 py-10 font-sans">

      <CustomJumbotron title='Scroll Animation' description='Desplaza hacia abajo para ver la magia ✨' />

      <main className="mt-10">
        {boxesContent.map((content) => (
          <AnimatedContentBox key={content}>
            <h2 className="text-2xl font-semibold">{content}</h2>
            <p className="mt-2 text-cyan-200">
              Este elemento aparece suavemente al entrar en el viewport gracias a la Intersection Observer API.
            </p>
          </AnimatedContentBox>
        ))}
      </main>
      
      <footer className="py-10 text-center text-gray-400">
        <p>Fin del contenido.</p>
      </footer>
    </div>
  );
};