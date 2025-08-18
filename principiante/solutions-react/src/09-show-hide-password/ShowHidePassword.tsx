import { CustomJumbotron } from '../shared/custom/CustomJumbotron';
import { PasswordInput } from './components/PasswordInput';



export const ShowHidePassword = () => {

  return (
    <div className="flex flex-col min-h-screen items-center p-4 gap-10">
      <CustomJumbotron title='Show/Hide Password'/>

      <PasswordInput />
    </div>
  );
};