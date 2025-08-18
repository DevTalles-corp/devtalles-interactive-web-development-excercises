import { CustomJumbotron } from '../shared/custom/CustomJumbotron';
import { GalleryContainer } from './components/GalleryContainer';
export const GalleryFilter = () => {
  return (
    <div className="flex flex-col items-center">
      <CustomJumbotron title='Gallery Filter' description='📊 Filtra imágenes por categoría.'/>
      <GalleryContainer />
    </div>
  )
}