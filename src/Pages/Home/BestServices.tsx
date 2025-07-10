import {
  FaCalendarAlt,
  FaUtensils,
  FaCreditCard,
  FaTruck,
} from "react-icons/fa";

const BestServices = () => {
  const services = [
    {
      id: 1,
      title: "اختر الأيام المتاحة",
      desc: "تحقق من التواريخ المتاحة للحجز",
      icon: <FaCalendarAlt />,
    },
    {
      id: 2,
      title: "أضف عناصر القائمة",
      desc: "أضف العناصر المفضلة لديك، بما في ذلك الأطباق الخاصة والمشروبات",
      icon: <FaUtensils />,
    },
    {
      id: 3,
      title: "ادفع عبر الإنترنت",
      desc: "انتقل إلى الخروج وادفع المبلغ الكامل لتأمين حجزك",
      icon: <FaCreditCard />,
    },
    {
      id: 4,
      title: "استمتع بتجربة فريدة",
      desc: "استمتع بتجربة تناول الطعام المميزة مع عائلتك وأصدقائك",
      icon: <FaTruck />,
    },
  ];

  return (
    <div className="best-services">
      <div className="content container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">افضل خدمات حجوجة</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center"
            >
              {/* الأيقونة داخل دائرة + رقم */}
              <div className="relative w-[80px] h-[80px] mb-4">
                <div className="w-full h-full rounded-full icon border border-dashed border-white flex items-center justify-center text-white text-3xl">
                  <span>{service.icon}</span>
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center border border-gray-300">
                  {service.id}
                </div>
              </div>

              {/* العنوان والوصف */}
              <h5 className="text-orange-400 text-lg font-semibold mb-1">
                {service.title}
              </h5>
              <p className="text-sm text-gray-300 max-w-xs">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestServices;
