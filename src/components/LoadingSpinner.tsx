import { FaSpinner } from "react-icons/fa"; // استيراد الأيقونة المناسبة

const LoadingSpinner = () => {
  return (
    <div className="text-center">
      <FaSpinner className="animate-spin text-orange-400 text-9xl" />
    </div>
  );
};

export default LoadingSpinner;
