import { lazy, Suspense, useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Landing from "./Landing";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = () => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main-sections">
      <Landing />
      <About />
      <Suspense fallback={<div>Loading....</div>}>
        <TechStack />
      </Suspense>
      <Work />
      <Contact />
    </div>
  );
};

export default MainContainer;
