import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const AboutConatct = () => {
  return (
    <div className="w-full p-5 text-white">
      <h5 className="text-center text-5xl font-bold mb-10 text-orange-400">
        معلومات الاتصال
      </h5>
      <ul className="">
        <li className="flex items-center gap-3 mt-6">
          <div className="icon  bg-orange-400 p-3 rounded-full ">
            <LuMapPin className="w-6 h-6 " />
          </div>
          <div className="data">
            <h5>العنوان</h5>
            <p>
              حديقة المدفعية، شارع الصاعقة، دخلة شيراتون من طريق السويس، امام
              موقف ٤ ونص مساكن
            </p>
          </div>
        </li>
        <li className="flex items-center gap-3 mt-6">
          <div className="icon  bg-orange-400 p-3 rounded-full">
            <FaPhone className="w-6 h-6 " />
          </div>
          <div className="data">
            <h5>رقم الهاتف</h5>
            <p>01023456789</p>
          </div>
        </li>
        <li className="flex items-center gap-3 mt-6">
          <div className="icon  bg-orange-400 p-3 rounded-full">
            <CiMail className="w-6 h-6 " />
          </div>
          <div className="data">
            <h5>البريد الالكتروني</h5>
            <p>hajouga@gmail.com</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AboutConatct;
