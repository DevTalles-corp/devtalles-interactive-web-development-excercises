interface Props {
  newItemText: string;
  setNewItemText: (text: string) => void;
  onAddItem: () => void;
}

export const ItemForm = ({ newItemText, setNewItemText, onAddItem }: Props) => {
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddItem();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        type="text"
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
        placeholder="¿Qué necesitas hacer?"
        className="flex-grow bg-slate-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
      <button
        type="submit"
        className="bg-sky-500 hover:bg-sky-600 font-semibold px-5 py-2 rounded-md transition-colors duration-300"
      >
        Añadir
      </button>
    </form>
  );
};