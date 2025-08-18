import { CustomJumbotron } from "../shared/custom/CustomJumbotron"
import { MiniTodoApp } from "./components/MiniTodoApp"



export const CreateListItems = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <CustomJumbotron title="Create List Items" description="Es el fundamento de cualquier aplicación tipo To-Do List." />

      <MiniTodoApp />
    </div>
  )
}