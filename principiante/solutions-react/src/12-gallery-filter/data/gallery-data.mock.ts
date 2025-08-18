

export interface GalleryItem {
  id: number;
  imageUrl: string;
  category: string;
}

export const galleryItems: GalleryItem[] = [
  { id: 1, imageUrl: 'https://picsum.photos/id/10/400/300', category: 'nature' },
  { id: 2, imageUrl: 'https://picsum.photos/id/36/400/300', category: 'tech' },
  { id: 3, imageUrl: 'https://picsum.photos/id/48/400/300', category: 'tech' },
  { id: 4, imageUrl: 'https://picsum.photos/id/40/400/300', category: 'animals' },
  { id: 5, imageUrl: 'https://picsum.photos/id/0/400/300', category: 'tech' },
  { id: 6, imageUrl: 'https://picsum.photos/id/288/400/300', category: 'city' },
  { id: 7, imageUrl: 'https://picsum.photos/id/70/400/300', category: 'nature' },
  { id: 8, imageUrl: 'https://picsum.photos/id/80/400/300', category: 'nature' },
  { id: 9, imageUrl: 'https://picsum.photos/id/299/400/300', category: 'city' },
];