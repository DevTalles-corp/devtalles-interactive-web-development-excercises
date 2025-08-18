import type { GalleryItem } from '../data/gallery-data.mock';
import { GalleryItemCard } from './GalleryItemCard';

interface Props {
  items: GalleryItem[];
}

export const GalleryGrid = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <GalleryItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};