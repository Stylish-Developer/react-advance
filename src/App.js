import { Routes, Route } from "react-router-dom";
import Home from "./components/homePage";
import FundamentalPage from "./components/fundamentalsPage/index";
import AdvancePage from "./components/advancePage/index";
import HooksPage from "./components/hooksPage/index";
import Page404 from "./components/page404/index";
import Header from "./components/layout/header";

// -- root component
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="fundamental-concepts" element={<FundamentalPage />} />
        <Route path="advance-concepts" element={<AdvancePage />} />
        <Route path="hooks-concepts" element={<HooksPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
