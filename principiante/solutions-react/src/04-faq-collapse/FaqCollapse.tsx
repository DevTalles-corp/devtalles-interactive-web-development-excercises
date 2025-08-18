import { CustomJumbotron } from "../shared/custom/CustomJumbotron"
import { FaqContainer } from "./components/FaqContainer"

export const FaqCollapse = () => {
  return (
    <>
      <CustomJumbotron title="FAQ Collapse" />

      <FaqContainer />
    </>
  )
}