import { useState, useEffect } from 'react';
import { HamburgerButton } from './components/HamburgerButton';
import { NavPanel } from './components/NavPanel';
import { Overlay } from './components/Overlay';
import { CustomJumbotron } from '../shared/custom/CustomJumbotron';

export const MobileNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Efecto secundario para gestionar el scroll del body.
  useEffect(() => {
    if (!isOpen) {
      document.body.classList.remove('overflow-hidden');
    }
      document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div className="bg-slate-800 min-h-screen text-white">
      <header className="bg-slate-800 shadow-md p-4 flex justify-between items-center">
        <CustomJumbotron title='Mobile NavMenu'/>
        <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
      </header>

      <main className="p-8 text-white">
        <h2 className="text-2xl font-semibold mb-4">Contenido Principal</h2>
        <p>
          Usa el botón de hamburguesa en la esquina superior derecha para abrir el menú de navegación.
        </p>
      </main>

      <NavPanel isOpen={isOpen} />
      <Overlay isOpen={isOpen} onClick={toggleMenu} />
    </div>
  );
};