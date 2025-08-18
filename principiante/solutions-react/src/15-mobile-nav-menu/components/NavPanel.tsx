import { cn } from "../../lib/utils";


interface Props {
  isOpen: boolean;
}

export const NavPanel = ({ isOpen }: Props) => {
  return (
    <aside
      className={cn(
        'fixed top-0 right-0 h-full w-64 bg-slate-800 shadow-lg p-6 transform transition-transform duration-300 ease-in-out z-40',
        isOpen && 'translate-x-0',
        !isOpen && 'translate-x-full'
      )}
    >
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-lg text-white hover:text-blue-600">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="text-lg text-white hover:text-blue-600">
              Perfil
            </a>
          </li>
          <li>
            <a href="#" className="text-lg text-white hover:text-blue-600">
              Configuración
            </a>
          </li>
          <li>
            <a href="#" className="text-lg text-white hover:text-blue-600">
              Cerrar Sesión
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};