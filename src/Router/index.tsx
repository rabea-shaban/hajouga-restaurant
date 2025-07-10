import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact";
import { Home } from "../Pages/Home";
import { Menou } from "../Pages/Menou";
import { RootLayout } from "./RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="menou" element={<Menou />} />
      {/* <Route path="Login" element={<LoginPage />} />
      <Route path="*" element={<ErrorPage />} /> */}
    </Route>
  )
);

export default router;
