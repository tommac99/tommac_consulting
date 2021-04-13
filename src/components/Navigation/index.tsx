import React, { FC, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useScrollContext } from "../../hooks";

import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import { Container } from "./styles";

export const Navigation: FC = () => {
  // const [isNavVisible, setNavVisibility] = useState(false);
  // const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [linkColor, setLinkColor] = useState("red");

  const { scrollYPosition } = useScrollContext();

  useEffect(() => {
    if (scrollYPosition > 2300) {
      setLinkColor("blue");
    } else {
      if (linkColor !== "red") {
        setLinkColor("red");
      }
    }
  }, [linkColor, scrollYPosition]);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 700px)");
  //   mediaQuery.addEventListener("change", handleMediaQueryChange);
  //   handleMediaQueryChange(mediaQuery);

  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);

  // const handleMediaQueryChange = (mediaQuery: any) => {
  //   if (mediaQuery.matches) {
  //     setIsSmallScreen(true);
  //   } else {
  //     setIsSmallScreen(false);
  //   }
  // };

  return (
    <Container linkColor={linkColor}>
      <nav className="nav">
        <div
          onClick={() =>
            scroll.scrollToTop({
              smooth: "easeInOutQuad",
              duration: 1500,
            })
          }
          className="link"
        >
          {/* {scrollYPosition} */}
          Top
        </div>
        <Link
          className="link"
          activeClass="active"
          to="studio"
          spy={true}
          smooth={true}
          offset={-40}
          duration={1500}
          // onSetActive={handleSetActive}
        >
          Studio
        </Link>
        <Link
          className="link"
          activeClass="projects"
          to="projects"
          spy={true}
          smooth={true}
          offset={20}
          duration={1500}
          // onSetActive={handleSetActive}
        >
          Projects
        </Link>
        <div
          className="link"
          onClick={() =>
            scroll.scrollToBottom({
              smooth: "easeInOutQuad",
              duration: 1500,
            })
          }
        >
          Contact
        </div>
      </nav>
    </Container>
  );
};
