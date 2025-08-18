import { useState } from 'react';
import { FilterMenu } from './FilterMenu';
import { GalleryGrid } from './GalleryGrid';
import { galleryItems } from '../data/gallery-data.mock';

// Obtenemos una lista de categorías únicas para pasarla al menú.
// Usamos Set para evitar duplicados y lo convertimos de nuevo a un array.
const allCategories = ['all', ...new Set(galleryItems.map(item => item.category))];

export const GalleryContainer = () => {

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen text-white font-sans">
      <div className="container mx-auto px-4 py-8">

        <main>
          <FilterMenu 
            categories={allCategories}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter} 
          />

          <GalleryGrid items={filteredItems} />
        </main>
      </div>
    </div>
  );
}