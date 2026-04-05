import { Routes, Route } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import DetailedAbout from "./components/DetailedAbout";
import ProjectDetail from "./components/ProjectDetail";
import Navbar from "./components/Navbar";
import SocialIcons from "./components/SocialIcons"; // Fixed path
import ThemeToggle from "./components/ThemeToggle"; // Fixed path
import Cursor from "./components/Cursor"; // Fixed path
import ScrollToTop from "./components/ScrollToTop"; // Fixed path

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Cursor />
      <Navbar />
      <SocialIcons />
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/about-detailed" element={<DetailedAbout />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
};

export default App;
