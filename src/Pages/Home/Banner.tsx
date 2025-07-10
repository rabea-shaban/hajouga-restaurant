import { Button } from "@headlessui/react";
import { IoMedical } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="banner bannerHome relative m-0 p-0">
      <div className="ovrlay"></div>

      <div className="absolute inset-0 z-10 flex justify-center items-center text-white text-center">
        <div>
          <h3 className="text-4xl  text-orange-400 font-bold mb-2">
            حجوجة أصل الأكل
          </h3>
          <p className="text-lg sm:text-xl max-w-xl mb-6">
            نقدم لك أشهى الأطباق المصرية الأصيلة بنكهات لا تُنسى، في جو مليء
            بالحب والكرم. كل وجبة من حجوجة حكاية من الطعم.
          </p>
          <div className="slide-sub-title">
            <ul className=" flex justify-center gap-5 fs-3xk">
              <li>البيتى </li>
              <li>
                <IoMedical />
              </li>
              <li>الفلاحى</li>
            </ul>
            <span className="lineRight"></span>
            <span className="lineLeft"></span>
          </div>
        </div>
      </div>
      <div className="absolute top-[200px] inset-0 z-10 flex justify-center items-center mt-10 gap-5">
        <Button className="cursor-pointer rounded bg-gray-900 px-8 py-4 text-1xl  text-white data-active:bg-gray-700 data-hover:bg-gray-800">
          قائمة طعام حجوجه
        </Button>
        <Button className="cursor-pointer rounded bg-white px-8 py-4 text-1xl  hover:text-white text-gray-900 data-active:bg-gray-900 data-hover:bg-gray-900">
          احجز الان
        </Button>
      </div>
    </div>
  );
};

export default Banner;
