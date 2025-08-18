import { SoundButtonsContainer } from './components/SoundButtonsContainer';
import { CustomJumbotron } from '../shared/custom/CustomJumbotron';

export const Soundboard = () => {
  
  return (
    <div className="flex flex-col min-h-screen items-center p-4 gap-20">
      <CustomJumbotron title='🎶 Sound Board 🔊' />
      <SoundButtonsContainer />
    </div>
  );
};