import { CustomJumbotron } from "../shared/custom/CustomJumbotron";
import { SearchBar } from "./components/SearchBar";

export const HiddenSearchBar = () => {
  return (
    <div className="flex flex-col items-center place-items-center gap-10">

      <CustomJumbotron
        title="Hidden SearchBar"
        description={
          `Haz clic en la el ícono de búsqueda para desplegarlo
          y nuevamente para ocultarlo 🔎`}
      />

      <SearchBar />
    </div>
  );
};
