import type { GalleryItem } from "../data/gallery-data.mock";

interface Props {
  item: GalleryItem;
}

export const GalleryItemCard = ({ item }: Props) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300">
      <img 
        src={item.imageUrl} 
        alt={item.category} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="bg-cyan-600 text-white text-xs font-semibold px-2 py-1 rounded-md capitalize">
          {item.category}
        </span>
      </div>
    </div>
  );
};