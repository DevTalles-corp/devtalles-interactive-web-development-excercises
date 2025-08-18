
import type { Item } from './MiniTodoApp';

interface ItemListProps {
  items: Item[];
}

export const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-slate-300">Tus Tareas</h2>
      {items.length === 0 && (
        <p className="text-center text-slate-500 mt-4">¡Añade tu primera tarea!</p>
      )}
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="bg-slate-700 px-4 py-3 rounded-md flex items-center"
          >
            <span className="text-slate-200">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};