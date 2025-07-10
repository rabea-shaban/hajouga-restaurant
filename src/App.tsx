import { RouterProvider } from "react-router-dom";

import "swiper/swiper-bundle.css"; // استيراد الحزمة كاملة
import "./App.css";
import router from "./Router";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTopButton />
    </>
  );
}

export default App;
