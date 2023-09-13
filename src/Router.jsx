import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Price from "./Components/Price";
import SectionGallery from "./Components/SectionGallery";
import SectionInfo from "./Components/SectionInfo";
import SectionPrice from "./Components/SectionPrice";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <>HOME</>,
  },
  {
    path: '/gallery',
    element: <SectionGallery/>
  },
  {
    path: '/price',
    element: <SectionPrice/>
  },
  {
    path: '/info',
    element: <SectionInfo/>
  },
])