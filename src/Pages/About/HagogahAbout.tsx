import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const HagogahAbout = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false }); // repeat=false, or true لو عايز تتكرر
  }, []);
  const booking_website = [
    {
      id: 1,
      title: "اختر الأيام المتاحة: تحقق من التواريخ المتاحة للحجز.",
    },
    {
      id: 2,
      title:
        "أضف عناصر القائمة: أضف العناصر المفضلة لديك، بما في ذلك الأطباق الخاصة والمشروبات.",
    },
    {
      id: 3,
      title:
        "ادفع عبر الإنترنت: انتقل إلى الخروج وادفع المبلغ الكامل لتأمين حجزك",
    },
    {
      id: 4,
      title:
        "ستمتع بتجربة فريدة: استمتع بتجربة تناول الطعام المميزة مع عائلتك وأصدقائك.",
    },
  ];
  return (
    <div className="HagogahNew">
      <div className="top"></div>

      <div className="center flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container m-auto px-20 py-10 items-center">
          <div className="text-right" data-aos="fade-up">
            <h2 className="text-5xl font-bold text-orange-400 mb-5">
              عن حجوجة
            </h2>
            <h5 className="text-[20px]  font-bold text-orange-400 mb-5">
              مرحبًا بكم في حجوجه
            </h5>
            <p className="text-[16px] text-gray-500 mb-5 leading-loose">
              نحن هنا لنأخذكم في رحلة ممتعة وشهية في عالم الطعام الأصيل
              والمبتكر. في مطعم حجوجه، نقدم لكم لمسة من الحنين إلى طعم البيت
              وروح الفلاحين، مع لمسة من الإبداع والتجديد في كل طبق نحن نؤمن بقوة
              الطعام في توحيد الناس وتعزيز الروابط الاجتماعية. من خلال مجموعة
              متنوعة من الأطباق الشهية والمتوازنة، نسعى لإشباع جميع الأذواق
              وتلبية توقعات كل ضيف. تعالوا واستمتعوا في أجواء مرحة وودية، حيث
              يمكنكم الاستمتاع بتجربة تناول الطعام لا تُنسى وتبادل الضحكات
              والذكريات. نحن هنا لنجعل كل لحظة تقضونها في حجوجه تجربة فريدة
              ومميزة.
            </p>
            <h5>احجز مكانك في حجوجه الآن</h5>
            <ol>
              <h3 className="text-2xl  text-orange-400 mb-5 leading-loose me-2">
                ! الطريقة للحجز عبر الموقع الإلكتروني:
              </h3>
              {booking_website.map((item) => (
                <li key={item.id}>
                  <span className="text-[16px] text-gray-500 mb-5 leading-loose me-2">
                    {item.id}
                  </span>
                  <span className="text-[17px] text-gray-900 mb-5 leading-loose">
                    {item.title}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="img w-[100%]" data-aos="zoom-in">
            <img src="ourstory.png" alt="عن حجوجة" className="w-[100%] " />
          </div>
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
};

export default HagogahAbout;
