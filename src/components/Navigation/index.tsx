import React, { FC, useEffect, useState } from "react";
import { useScrollContext } from "../../hooks";
import { Link, animateScroll as scroll } from "react-scroll";
import profileImage from "../../assets/images/profile.jpg";
import { useMediaQuery } from "@react-hook/media-query";

import { Container, MobileContainer } from "./styles";
import { Text } from "../Text";

export const Navigation: FC = () => {
  const [linkColor, setLinkColor] = useState("red");
  const [isOpen, setIsOpen] = useState(false);
  const matches = useMediaQuery("only screen and (max-width: 680px)");

  const { scrollYPosition } = useScrollContext();

  const strollChangeNumber = matches ? 2930 : 2300;

  useEffect(() => {
    if (scrollYPosition > strollChangeNumber) {
      setLinkColor("blue");
    } else {
      if (linkColor !== "red") {
        setLinkColor("red");
      }
    }
  }, [linkColor, scrollYPosition, strollChangeNumber]);

  if (matches) {
    return (
      <MobileContainer linkColor={linkColor}>
        <nav className="nav">
          <div
            onClick={() =>
              scroll.scrollToTop({
                smooth: "easeInOutQuad",
                duration: 3000,
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
            duration={3000}
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
            duration={3000}
            // onSetActive={handleSetActive}
          >
            Projects
          </Link>
          <div
            className="link"
            onClick={() =>
              scroll.scrollToBottom({
                smooth: "easeInOutQuad",
                duration: 3000,
              })
            }
          >
            Contact
          </div>
        </nav>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`profile ${isOpen ? "open" : ""}`}
        >
          <img src={profileImage} alt={profileImage} />
          <Text className="name" color="secondary">
            Thomas MacFarlaine
          </Text>
          <a href="./resume.pdf" target="_blank" className="pdf">
            <img
              alt="pdf"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTM0Ni4wNDQgNDI3LjY2NGgtMjg0LjEzNmMtMTcuMDY5IDAtMzAuOTA1LTEzLjgzNy0zMC45MDUtMzAuOTA1di0zNjUuODU0YzAtMTcuMDY4IDEzLjgzNi0zMC45MDUgMzAuOTA1LTMwLjkwNWgyODQuMTM2YzE3LjA2OSAwIDMwLjkwNSAxMy44MzcgMzAuOTA1IDMwLjkwNXYzNjUuODUzYzAgMTcuMDY5LTEzLjgzNyAzMC45MDYtMzAuOTA1IDMwLjkwNnoiIGZpbGw9IiNmOWY2ZjYiIGRhdGEtb3JpZ2luYWw9IiNmOWY2ZjYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzQ2LjA0NCAwaC0zMC45MDVjMTcuMDY5IDAgMzAuOTA1IDEzLjgzNyAzMC45MDUgMzAuOTA1djM2NS44NTNjMCAxNy4wNjktMTMuODM3IDMwLjkwNS0zMC45MDUgMzAuOTA1aDMwLjkwNWMxNy4wNjkgMCAzMC45MDUtMTMuODM3IDMwLjkwNS0zMC45MDV2LTM2NS44NTNjMC0xNy4wNjgtMTMuODM3LTMwLjkwNS0zMC45MDUtMzAuOTA1eiIgZmlsbD0iI2FiMzg1MSIgZGF0YS1vcmlnaW5hbD0iI2UyZDhlYyIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zNzcuMDQ2IDUxMmgtMzQ2LjE0MWMtMTcuMDY4IDAtMzAuOTA1LTEzLjgzNy0zMC45MDUtMzAuOTA1di0yNDkuMzA0YzAtMTcuMDY5IDEzLjgzNy0zMC45MDUgMzAuOTA1LTMwLjkwNWgxNTAuNzU5YzEyLjI5MSAwIDIzLjAwNCA4LjM2NSAyNS45ODUgMjAuMjg4bDUuMzA4IDIxLjIzNGMyLjk4MSAxMS45MjQgMTMuNjk0IDIwLjI4OCAyNS45ODUgMjAuMjg4aDEzOC4xMDNjMTcuMDY5IDAgMzAuOTA1IDEzLjgzNyAzMC45MDUgMzAuOTA1djE4Ny40OTNjLjAwMiAxNy4wNjktMTMuODM1IDMwLjkwNi0zMC45MDQgMzAuOTA2eiIgZmlsbD0iIzE1MWMzMCIgZGF0YS1vcmlnaW5hbD0iI2Y3ZTA3ZiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxnIGZpbGw9IiNmMGQxNmYiPjxwYXRoIGQ9Im0xNzYuNzQ0IDIyMS4xNzQgNS4zMDggMjEuMjM0YzIuOTgxIDExLjkyNCAxMy42OTQgMjAuMjg4IDI1Ljk4NSAyMC4yODhoMzAuOTA1Yy0xMi4yOSAwLTIzLjAwNC04LjM2NS0yNS45ODUtMjAuMjg4bC01LjMwOC0yMS4yMzRjLTIuOTgxLTExLjkyNC0xMy42OTQtMjAuMjg4LTI1Ljk4NS0yMC4yODhoLTMwLjkwNWMxMi4yOTEtLjAwMSAyMy4wMDQgOC4zNjQgMjUuOTg1IDIwLjI4OHoiIGZpbGw9IiMwNjA4MGUiIGRhdGEtb3JpZ2luYWw9IiNmMGQxNmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzc3LjA0NiAyNjIuNjk2aC0zMC45MDVjMTcuMDY5IDAgMzAuOTA1IDEzLjgzNyAzMC45MDUgMzAuOTA1djE4Ny40OTNjMCAxNy4wNjktMTMuODM3IDMwLjkwNS0zMC45MDUgMzAuOTA1aDMwLjkwNWMxNy4wNjkgMCAzMC45MDUtMTMuODM3IDMwLjkwNS0zMC45MDV2LTE4Ny40OTJjLjAwMS0xNy4wNjktMTMuODM2LTMwLjkwNi0zMC45MDUtMzAuOTA2eiIgZmlsbD0iIzA2MDgwZSIgZGF0YS1vcmlnaW5hbD0iI2YwZDE2ZiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMjg2LjMwMSAzNzkuMjI1aC0xNy44NTF2LTE4LjE3NGgyMC4wNThjNC4yNjcgMCA3LjcyNi0zLjQ1OSA3LjcyNi03LjcyNnMtMy40NTktNy43MjYtNy43MjYtNy43MjZoLTI3Ljc4NGMtNC4yNjcgMC03LjcyNiAzLjQ1OS03LjcyNiA3LjcyNnY2OC41NTFjMCA0LjI2NyAzLjQ1OSA3LjcyNiA3LjcyNiA3LjcyNnM3LjcyNi0zLjQ1OSA3LjcyNi03LjcyNnYtMjcuMTk4aDE3Ljg1MWM0LjI2NyAwIDcuNzI2LTMuNDU5IDcuNzI2LTcuNzI2LjAwMS00LjI2Ny0zLjQ1OS03LjcyNy03LjcyNi03LjcyN3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiNmZmZmZmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjA2LjE0NyAzNDcuMTM2aC0xOC45OGMtNC4yMDctLjAyMi03Ljc1MyAzLjUzOC03LjcyNiA3Ljc0MXYuMDU0LjAwMiA2NS44NTZjLS4wMzkgNC41MjggMyA4LjgxNSA3Ljg2MiA4LjgxNWguMDI5Yy41NzMtLjAwMiAxNC4xMDItLjA1NCAxOS41MDUtLjE0OCAxOS43NTgtLjM0NiAzNC4wOTgtMTcuNjI0IDM0LjA5OC00MS4wODUgMC0yNC42NjUtMTMuOTgtNDEuMjM1LTM0Ljc4OC00MS4yMzV6bS40MiA2Ni44NjhjLTIuNjQ1LjA0Ni03LjQyNS4wODMtMTEuNTY0LjEwOC0uMDYzLTE5LjU0Ny0uMDYzLTMxLjQwOC0uMDk2LTUxLjUyM2gxMS4yMzljMTQuMjU2IDAgMTkuMzM2IDEzLjMxNyAxOS4zMzYgMjUuNzgxIDAgMTcuNDc5LTkuNSAyNS40NjktMTguOTE1IDI1LjYzNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiNmZmZmZmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMTM4LjY3MiAzNDUuMDk0aC0xOS4yMjljLTMuODItLjA3Ni03Ljg4NyAzLjM4My03LjcyNiA3LjcyNnY2OS4wNTZjMCA0LjI2NyAzLjQ1OSA3LjcyNiA3LjcyNiA3LjcyNnM3LjcyNi0zLjQ1OSA3LjcyNi03LjcyNnYtMjIuMzEyYzQuMDkyLS4wMjIgOC44NDQtLjA0MyAxMS41MDMtLjA0MyAxNS4yMTYgMCAyNy41OTYtMTIuMjA4IDI3LjU5Ni0yNy4yMTQgMC0xNS4wMDUtMTIuMzgtMjcuMjEzLTI3LjU5Ni0yNy4yMTN6bTAgMzguOTc1Yy0yLjYzOSAwLTcuMzMzLjAyMS0xMS40MTEuMDQyLS4wMjEtNC4yMDgtLjA1NS0xOS4xNjUtLjA2OC0yMy41NjVoMTEuNDc5YzYuNTgyIDAgMTIuMTQzIDUuMzg2IDEyLjE0MyAxMS43NjFzLTUuNTYxIDExLjc2Mi0xMi4xNDMgMTEuNzYyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iI2ZmZmZmZiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48cGF0aCBkPSJtMzE5LjMwNiA5Mi43MTZoLTIzMC42NmMtMi44NDUgMC01LjE1MS0yLjMwNi01LjE1MS01LjE1MXYtMzYuMDU2YzAtMi44NDUgMi4zMDYtNS4xNTEgNS4xNTEtNS4xNTFoMjMwLjY1OWMyLjg0NSAwIDUuMTUxIDIuMzA2IDUuMTUxIDUuMTUxdjM2LjA1NmMwIDIuODQ1LTIuMzA2IDUuMTUxLTUuMTUgNS4xNTF6IiBmaWxsPSIjYzM0MTVkIiBkYXRhLW9yaWdpbmFsPSIjZDVjNmU0IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PGc+PHBhdGggZD0ibTMyNC40NTYgMTQ2LjgwMWgtMjQwLjk2MWMtNC4yNjcgMC03LjcyNi0zLjQ1OS03LjcyNi03LjcyNnMzLjQ1OS03LjcyNiA3LjcyNi03LjcyNmgyNDAuOTYxYzQuMjY3IDAgNy43MjYgMy40NTkgNy43MjYgNy43MjZzLTMuNDU5IDcuNzI2LTcuNzI2IDcuNzI2eiIgZmlsbD0iI2MzNDE1ZCIgZGF0YS1vcmlnaW5hbD0iI2Q1YzZlNCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48Zz48cGF0aCBkPSJtMzI0LjQ1NiAxNzcuNzA2aC0yNDAuOTYxYy00LjI2NyAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2czMuNDU5LTcuNzI2IDcuNzI2LTcuNzI2aDI0MC45NjFjNC4yNjcgMCA3LjcyNiAzLjQ1OSA3LjcyNiA3LjcyNi4wMDEgNC4yNjctMy40NTkgNy43MjYtNy43MjYgNy43MjZ6IiBmaWxsPSIjYzM0MTVkIiBkYXRhLW9yaWdpbmFsPSIjZDVjNmU0IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjxnPjxwYXRoIGQ9Im0zMjQuNDU2IDIwOC42MTJoLTg2LjQzNGMtNC4yNjcgMC03LjcyNi0zLjQ1OS03LjcyNi03LjcyNnMzLjQ1OS03LjcyNiA3LjcyNi03LjcyNmg4Ni40MzRjNC4yNjcgMCA3LjcyNiAzLjQ1OSA3LjcyNiA3LjcyNnMtMy40NTkgNy43MjYtNy43MjYgNy43MjZ6IiBmaWxsPSIjYzM0MTVkIiBkYXRhLW9yaWdpbmFsPSIjZDVjNmU0IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjxnPjxwYXRoIGQ9Im0zMjQuNDU2IDIzOS41MTdoLTg2LjQzNGMtNC4yNjcgMC03LjcyNi0zLjQ1OS03LjcyNi03LjcyNnMzLjQ1OS03LjcyNiA3LjcyNi03LjcyNmg4Ni40MzRjNC4yNjcgMCA3LjcyNiAzLjQ1OSA3LjcyNiA3LjcyNnMtMy40NTkgNy43MjYtNy43MjYgNy43MjZ6IiBmaWxsPSIjYzM0MTVkIiBkYXRhLW9yaWdpbmFsPSIjZDVjNmU0IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48Zz48Y2lyY2xlIGN4PSI0MTUuNDM4IiBjeT0iNDE1LjQzOCIgZmlsbD0iI2JmZTY5ZiIgcj0iOTYuNTYyIiBkYXRhLW9yaWdpbmFsPSIjYmZlNjlmIiBzdHlsZT0iIiBjbGFzcz0iIj48L2NpcmNsZT48cGF0aCBkPSJtNDE1LjQzOCAzMTguODc1Yy01LjI2IDAtMTAuNDIxLjQyNy0xNS40NTMgMS4yMzYgNDUuOTgzIDcuMzk3IDgxLjExIDQ3LjI1NyA4MS4xMSA5NS4zMjZzLTM1LjEyNiA4Ny45MjktODEuMTEgOTUuMzI2YzUuMDMyLjgwOSAxMC4xOTIgMS4yMzYgMTUuNDUzIDEuMjM2IDUzLjMzIDAgOTYuNTYyLTQzLjIzMiA5Ni41NjItOTYuNTYyIDAtNTMuMzI5LTQzLjIzMi05Ni41NjItOTYuNTYyLTk2LjU2MnoiIGZpbGw9IiNhNGQ5YTYiIGRhdGEtb3JpZ2luYWw9IiNhNGQ5YTYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzk3LjQ3OCA0MjkuOTMydi02My4yNjVjMC0zLjIxOCAyLjYwOS01LjgyNyA1LjgyNy01LjgyN2gyNC4yNjVjMy4yMTggMCA1LjgyNyAyLjYwOSA1LjgyNyA1LjgyN3Y2My4yNjVjMCAzLjIxOCAyLjYwOSA1LjgyNyA1LjgyNyA1LjgyN2gxMy4zMzFjNC40NSAwIDYuNjc4IDUuMzggMy41MzIgOC41MjZsLTM2LjUyOSAzNi41MjljLTIuMjc2IDIuMjc2LTUuOTY1IDIuMjc2LTguMjQxIDBsLTM2LjUyOS0zNi41MjljLTMuMTQ2LTMuMTQ2LS45MTgtOC41MjYgMy41MzItOC41MjZoMTMuMzMxYzMuMjE5IDAgNS44MjctMi42MDggNS44MjctNS44Mjd6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+"
            />
          </a>
        </div>
      </MobileContainer>
    );
  }

  return (
    <Container linkColor={linkColor}>
      <nav className="nav">
        <div
          onClick={() =>
            scroll.scrollToTop({
              smooth: "easeInOutQuad",
              duration: 3000,
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
          duration={3000}
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
          duration={3000}
          // onSetActive={handleSetActive}
        >
          Projects
        </Link>
        <div
          className="link"
          onClick={() =>
            scroll.scrollToBottom({
              smooth: "easeInOutQuad",
              duration: 3000,
            })
          }
        >
          Contact
        </div>
      </nav>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`profile ${isOpen ? "open" : ""}`}
      >
        <img src={profileImage} alt={profileImage} />
        <Text className="name" color="secondary">
          Thomas MacFarlaine
        </Text>
        <a href="./resume.pdf" target="_blank" className="pdf">
          <img
            alt="pdf"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTM0Ni4wNDQgNDI3LjY2NGgtMjg0LjEzNmMtMTcuMDY5IDAtMzAuOTA1LTEzLjgzNy0zMC45MDUtMzAuOTA1di0zNjUuODU0YzAtMTcuMDY4IDEzLjgzNi0zMC45MDUgMzAuOTA1LTMwLjkwNWgyODQuMTM2YzE3LjA2OSAwIDMwLjkwNSAxMy44MzcgMzAuOTA1IDMwLjkwNXYzNjUuODUzYzAgMTcuMDY5LTEzLjgzNyAzMC45MDYtMzAuOTA1IDMwLjkwNnoiIGZpbGw9IiNmOWY2ZjYiIGRhdGEtb3JpZ2luYWw9IiNmOWY2ZjYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzQ2LjA0NCAwaC0zMC45MDVjMTcuMDY5IDAgMzAuOTA1IDEzLjgzNyAzMC45MDUgMzAuOTA1djM2NS44NTNjMCAxNy4wNjktMTMuODM3IDMwLjkwNS0zMC45MDUgMzAuOTA1aDMwLjkwNWMxNy4wNjkgMCAzMC45MDUtMTMuODM3IDMwLjkwNS0zMC45MDV2LTM2NS44NTNjMC0xNy4wNjgtMTMuODM3LTMwLjkwNS0zMC45MDUtMzAuOTA1eiIgZmlsbD0iI2FiMzg1MSIgZGF0YS1vcmlnaW5hbD0iI2UyZDhlYyIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zNzcuMDQ2IDUxMmgtMzQ2LjE0MWMtMTcuMDY4IDAtMzAuOTA1LTEzLjgzNy0zMC45MDUtMzAuOTA1di0yNDkuMzA0YzAtMTcuMDY5IDEzLjgzNy0zMC45MDUgMzAuOTA1LTMwLjkwNWgxNTAuNzU5YzEyLjI5MSAwIDIzLjAwNCA4LjM2NSAyNS45ODUgMjAuMjg4bDUuMzA4IDIxLjIzNGMyLjk4MSAxMS45MjQgMTMuNjk0IDIwLjI4OCAyNS45ODUgMjAuMjg4aDEzOC4xMDNjMTcuMDY5IDAgMzAuOTA1IDEzLjgzNyAzMC45MDUgMzAuOTA1djE4Ny40OTNjLjAwMiAxNy4wNjktMTMuODM1IDMwLjkwNi0zMC45MDQgMzAuOTA2eiIgZmlsbD0iIzE1MWMzMCIgZGF0YS1vcmlnaW5hbD0iI2Y3ZTA3ZiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxnIGZpbGw9IiNmMGQxNmYiPjxwYXRoIGQ9Im0xNzYuNzQ0IDIyMS4xNzQgNS4zMDggMjEuMjM0YzIuOTgxIDExLjkyNCAxMy42OTQgMjAuMjg4IDI1Ljk4NSAyMC4yODhoMzAuOTA1Yy0xMi4yOSAwLTIzLjAwNC04LjM2NS0yNS45ODUtMjAuMjg4bC01LjMwOC0yMS4yMzRjLTIuOTgxLTExLjkyNC0xMy42OTQtMjAuMjg4LTI1Ljk4NS0yMC4yODhoLTMwLjkwNWMxMi4yOTEtLjAwMSAyMy4wMDQgOC4zNjQgMjUuOTg1IDIwLjI4OHoiIGZpbGw9IiMwNjA4MGUiIGRhdGEtb3JpZ2luYWw9IiNmMGQxNmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzc3LjA0NiAyNjIuNjk2aC0zMC45MDVjMTcuMDY5IDAgMzAuOTA1IDEzLjgzNyAzMC45MDUgMzAuOTA1djE4Ny40OTNjMCAxNy4wNjktMTMuODM3IDMwLjkwNS0zMC45MDUgMzAuOTA1aDMwLjkwNWMxNy4wNjkgMCAzMC45MDUtMTMuODM3IDMwLjkwNS0zMC45MDV2LTE4Ny40OTJjLjAwMS0xNy4wNjktMTMuODM2LTMwLjkwNi0zMC45MDUtMzAuOTA2eiIgZmlsbD0iIzA2MDgwZSIgZGF0YS1vcmlnaW5hbD0iI2YwZDE2ZiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMjg2LjMwMSAzNzkuMjI1aC0xNy44NTF2LTE4LjE3NGgyMC4wNThjNC4yNjcgMCA3LjcyNi0zLjQ1OSA3LjcyNi03LjcyNnMtMy40NTktNy43MjYtNy43MjYtNy43MjZoLTI3Ljc4NGMtNC4yNjcgMC03LjcyNiAzLjQ1OS03LjcyNiA3LjcyNnY2OC41NTFjMCA0LjI2NyAzLjQ1OSA3LjcyNiA3LjcyNiA3LjcyNnM3LjcyNi0zLjQ1OSA3LjcyNi03LjcyNnYtMjcuMTk4aDE3Ljg1MWM0LjI2NyAwIDcuNzI2LTMuNDU5IDcuNzI2LTcuNzI2LjAwMS00LjI2Ny0zLjQ1OS03LjcyNy03LjcyNi03LjcyN3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiNmZmZmZmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjA2LjE0NyAzNDcuMTM2aC0xOC45OGMtNC4yMDctLjAyMi03Ljc1MyAzLjUzOC03LjcyNiA3Ljc0MXYuMDU0LjAwMiA2NS44NTZjLS4wMzkgNC41MjggMyA4LjgxNSA3Ljg2MiA4LjgxNWguMDI5Yy41NzMtLjAwMiAxNC4xMDItLjA1NCAxOS41MDUtLjE0OCAxOS43NTgtLjM0NiAzNC4wOTgtMTcuNjI0IDM0LjA5OC00MS4wODUgMC0yNC42NjUtMTMuOTgtNDEuMjM1LTM0Ljc4OC00MS4yMzV6bS40MiA2Ni44NjhjLTIuNjQ1LjA0Ni03LjQyNS4wODMtMTEuNTY0LjEwOC0uMDYzLTE5LjU0Ny0uMDYzLTMxLjQwOC0uMDk2LTUxLjUyM2gxMS4yMzljMTQuMjU2IDAgMTkuMzM2IDEzLjMxNyAxOS4zMzYgMjUuNzgxIDAgMTcuNDc5LTkuNSAyNS40NjktMTguOTE1IDI1LjYzNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiNmZmZmZmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMTM4LjY3MiAzNDUuMDk0aC0xOS4yMjljLTMuODItLjA3Ni03Ljg4NyAzLjM4My03LjcyNiA3LjcyNnY2OS4wNTZjMCA0LjI2NyAzLjQ1OSA3LjcyNiA3LjcyNiA3LjcyNnM3LjcyNi0zLjQ1OSA3LjcyNi03LjcyNnYtMjIuMzEyYzQuMDkyLS4wMjIgOC44NDQtLjA0MyAxMS41MDMtLjA0MyAxNS4yMTYgMCAyNy41OTYtMTIuMjA4IDI3LjU5Ni0yNy4yMTQgMC0xNS4wMDUtMTIuMzgtMjcuMjEzLTI3LjU5Ni0yNy4yMTN6bTAgMzguOTc1Yy0yLjYzOSAwLTcuMzMzLjAyMS0xMS40MTEuMDQyLS4wMjEtNC4yMDgtLjA1NS0xOS4xNjUtLjA2OC0yMy41NjVoMTEuNDc5YzYuNTgyIDAgMTIuMTQzIDUuMzg2IDEyLjE0MyAxMS43NjFzLTUuNTYxIDExLjc2Mi0xMi4xNDMgMTEuNzYyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iI2ZmZmZmZiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48cGF0aCBkPSJtMzE5LjMwNiA5Mi43MTZoLTIzMC42NmMtMi44NDUgMC01LjE1MS0yLjMwNi01LjE1MS01LjE1MXYtMzYuMDU2YzAtMi44NDUgMi4zMDYtNS4xNTEgNS4xNTEtNS4xNTFoMjMwLjY1OWMyLjg0NSAwIDUuMTUxIDIuMzA2IDUuMTUxIDUuMTUxdjM2LjA1NmMwIDIuODQ1LTIuMzA2IDUuMTUxLTUuMTUgNS4xNTF6IiBmaWxsPSIjYzM0MTVkIiBkYXRhLW9yaWdpbmFsPSIjZDVjNmU0IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PGc+PHBhdGggZD0ibTMyNC40NTYgMTQ2LjgwMWgtMjQwLjk2MWMtNC4yNjcgMC03LjcyNi0zLjQ1OS03LjcyNi03LjcyNnMzLjQ1OS03LjcyNiA3LjcyNi03LjcyNmgyNDAuOTYxYzQuMjY3IDAgNy43MjYgMy40NTkgNy43MjYgNy43MjZzLTMuNDU5IDcuNzI2LTcuNzI2IDcuNzI2eiIgZmlsbD0iI2MzNDE1ZCIgZGF0YS1vcmlnaW5hbD0iI2Q1YzZlNCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48Zz48cGF0aCBkPSJtMzI0LjQ1NiAxNzcuNzA2aC0yNDAuOTYxYy00LjI2NyAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2czMuNDU5LTcuNzI2IDcuNzI2LTcuNzI2aDI0MC45NjFjNC4yNjcgMCA3LjcyNiAzLjQ1OSA3LjcyNiA3LjcyNi4wMDEgNC4yNjctMy40NTkgNy43MjYtNy43MjYgNy43MjZ6IiBmaWxsPSIjYzM0MTVkIiBkYXRhLW9yaWdpbmFsPSIjZDVjNmU0IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjxnPjxwYXRoIGQ9Im0zMjQuNDU2IDIwOC42MTJoLTg2LjQzNGMtNC4yNjcgMC03LjcyNi0zLjQ1OS03LjcyNi03LjcyNnMzLjQ1OS03LjcyNiA3LjcyNi03LjcyNmg4Ni40MzRjNC4yNjcgMCA3LjcyNiAzLjQ1OSA3LjcyNiA3LjcyNnMtMy40NTkgNy43MjYtNy43MjYgNy43MjZ6IiBmaWxsPSIjYzM0MTVkIiBkYXRhLW9yaWdpbmFsPSIjZDVjNmU0IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjxnPjxwYXRoIGQ9Im0zMjQuNDU2IDIzOS41MTdoLTg2LjQzNGMtNC4yNjcgMC03LjcyNi0zLjQ1OS03LjcyNi03LjcyNnMzLjQ1OS03LjcyNiA3LjcyNi03LjcyNmg4Ni40MzRjNC4yNjcgMCA3LjcyNiAzLjQ1OSA3LjcyNiA3LjcyNnMtMy40NTkgNy43MjYtNy43MjYgNy43MjZ6IiBmaWxsPSIjYzM0MTVkIiBkYXRhLW9yaWdpbmFsPSIjZDVjNmU0IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48Zz48Y2lyY2xlIGN4PSI0MTUuNDM4IiBjeT0iNDE1LjQzOCIgZmlsbD0iI2JmZTY5ZiIgcj0iOTYuNTYyIiBkYXRhLW9yaWdpbmFsPSIjYmZlNjlmIiBzdHlsZT0iIiBjbGFzcz0iIj48L2NpcmNsZT48cGF0aCBkPSJtNDE1LjQzOCAzMTguODc1Yy01LjI2IDAtMTAuNDIxLjQyNy0xNS40NTMgMS4yMzYgNDUuOTgzIDcuMzk3IDgxLjExIDQ3LjI1NyA4MS4xMSA5NS4zMjZzLTM1LjEyNiA4Ny45MjktODEuMTEgOTUuMzI2YzUuMDMyLjgwOSAxMC4xOTIgMS4yMzYgMTUuNDUzIDEuMjM2IDUzLjMzIDAgOTYuNTYyLTQzLjIzMiA5Ni41NjItOTYuNTYyIDAtNTMuMzI5LTQzLjIzMi05Ni41NjItOTYuNTYyLTk2LjU2MnoiIGZpbGw9IiNhNGQ5YTYiIGRhdGEtb3JpZ2luYWw9IiNhNGQ5YTYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzk3LjQ3OCA0MjkuOTMydi02My4yNjVjMC0zLjIxOCAyLjYwOS01LjgyNyA1LjgyNy01LjgyN2gyNC4yNjVjMy4yMTggMCA1LjgyNyAyLjYwOSA1LjgyNyA1LjgyN3Y2My4yNjVjMCAzLjIxOCAyLjYwOSA1LjgyNyA1LjgyNyA1LjgyN2gxMy4zMzFjNC40NSAwIDYuNjc4IDUuMzggMy41MzIgOC41MjZsLTM2LjUyOSAzNi41MjljLTIuMjc2IDIuMjc2LTUuOTY1IDIuMjc2LTguMjQxIDBsLTM2LjUyOS0zNi41MjljLTMuMTQ2LTMuMTQ2LS45MTgtOC41MjYgMy41MzItOC41MjZoMTMuMzMxYzMuMjE5IDAgNS44MjctMi42MDggNS44MjctNS44Mjd6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+"
          />
        </a>
      </div>
    </Container>
  );
};
