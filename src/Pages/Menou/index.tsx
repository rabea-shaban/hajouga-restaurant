import CategoriesWithProductSlider from "./CategoriesWithProductSlider";
import MenouBanner from "./MenouBanner";

export const Menou = () => {
  return (
    <>
      <MenouBanner />
      <div className="top"></div>
      <CategoriesWithProductSlider />
      <div className="bottom"></div>
    </>
  );
};
