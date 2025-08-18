import { useState } from 'react';
import { ItemForm } from './ItemForm';
import { ItemList } from './ItemList';

export interface Item {
  id: number;
  text: string;
}

const itemList: Item[] = [
  // { id: 1, text: 'Aprender JavaScript' },
  // { id: 2, text: 'Practicar con TypeScript' },
  // { id: 3, text: 'Estilizar con Tailwind CSS' },
]

export const MiniTodoApp = () => {

  const [newItemText, setNewItemText] = useState('');
  const [items, setItems] = useState<Item[]>(itemList);

  const handleAddItem = () => {
    if (newItemText.trim() === '') return;

    const newItem: Item = {
      id: Date.now(),
      text: newItemText,
    };

    setItems([...items, newItem]);
    setNewItemText('');
  };

  return (
    <div className="text-white font-sans flex items-center">
      <div className="bg-slate-800 p-8 rounded-xl shadow-2xl w-full min-w-lg">
        <main>
          <ItemForm 
            newItemText={newItemText}
            setNewItemText={setNewItemText}
            onAddItem={handleAddItem}
          />
          <ItemList items={items} />
        </main>
      </div>
    </div>
  );
}