import { CustomJumbotron } from "../shared/custom/CustomJumbotron"
import { MainBlurryLoadingEffect } from "./components/MainBlurryLoadingEffect"

export const BlurryLoadingEffect = () => {
  return (
    <div className="flex flex-col items-center gap-10 h-screen w-screen">
      <CustomJumbotron title="Blurry Loading Effect" />

      <MainBlurryLoadingEffect />

    </div>
  )
}