import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  useEffect(() => {
    const checkScrollTop = (): void => {
      if (window.pageYOffset > 200) {
        setShowButton(true); 
      } else {
        setShowButton(false); 
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => window.removeEventListener("scroll", checkScrollTop); 
  }, []);

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-4 bg-orange-700 cursor-pointer text-white rounded-full shadow-lg hover:bg-orange-500 transition-colors">
          <IoIosArrowUp size={30} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
