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
        <div onClick={() => scroll.scrollToTop()} className="link">
          {scrollYPosition}
        </div>
        <Link
          className="link"
          activeClass="active"
          to="studio"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
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
          duration={500}
          // onSetActive={handleSetActive}
        >
          Projects
        </Link>
        <Link
          className="link"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={200}
          duration={500}
          // onSetActive={handleSetActive}
        >
          Contact
        </Link>
      </nav>
    </Container>
  );
};
