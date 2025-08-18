import { CustomJumbotron } from "../shared/custom/CustomJumbotron"
import { TabsContainer } from './components/TabsContainer';


export const Tabs = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-4">

      <CustomJumbotron title="Tabs"/>
      
      <TabsContainer />
    </div>
  )
}