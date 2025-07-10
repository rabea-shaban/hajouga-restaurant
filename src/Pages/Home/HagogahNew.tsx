import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export const HagogahNew = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false }); // repeat=false, or true لو عايز تتكرر
  }, []);

  return (
    <div className="HagogahNew">
      <div className="top"></div>

      <div className="center flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container m-auto px-20 py-10 items-center">
          {/* الصورة مع أنيميشن عند الظهور */}
          <div className="img w-[100%]" data-aos="zoom-in">
            <img src="ourstory.png" alt="عن حجوجة" className="w-[100%] " />
          </div>

          {/* النصوص */}
          <div className="text-center" data-aos="fade-up">
            <h5 className="text-[14px] font-bold text-gray-900 mb-5">اكتشف</h5>
            <h2 className="text-5xl font-bold text-orange-400 mb-5">عن حجوجة</h2>
            <h5 className="text-[14px] font-bold text-gray-900 mb-5">
              مرحبًا بكم في حجوجه
            </h5>
            <p className="text-[16px] text-gray-500 mb-5 leading-loose">
              نحن هنا لنأخذكم في رحلة ممتعة وشهية في عالم الطعام الأصيل
              والمبتكر. في مطعم حجوجه، نقدم لكم لمسة من الحنين إلى طعم البيت
              وروح الفلاحين...
            </p>
          </div>
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
};
