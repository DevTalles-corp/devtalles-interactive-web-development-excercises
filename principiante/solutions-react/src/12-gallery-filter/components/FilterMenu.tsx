

interface Props {
  categories: string[];
  activeFilter: string;
  setActiveFilter: (category: string) => void;
}

export const FilterMenu = ({ categories, activeFilter, setActiveFilter }: Props) => {
  return (
    <nav className="flex justify-center items-center gap-4 mb-8 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`capitalize px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300
            ${activeFilter === category
              ? 'bg-cyan-500 text-slate-900'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }
          `}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};