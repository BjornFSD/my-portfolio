import React from "react";
import { Box, Container } from "@material-ui/core";

import styled, { css, keyframes } from "styled-components";

const dash = keyframes`
    80% {
        stroke-dashoffset: 0;
        stroke-opacity: 1;
    }
    100%{
        stroke-opacity: .3;
        stroke-dashoffset: 0;
    }
`;

const LiteralsSvgWrap = styled(Box)`
  width: 400px;
  margin: 0 auto;

  ${(props) =>
    props.footer &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 110px;
    `}
  svg {
    path {
      animation: ${dash} 3s 1s cubic-bezier(0.43, 0.29, 0.58, 1.01) forwards;
    }
  }
`;

const LogoPath = styled.path`
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  stroke: #39c0d2;
  stroke-width: 2;
  fill: url(#header-shape-gradient) #fff;
  fill-opacity: 0;
  ${(props) =>
    props.footer &&
    css`
      stroke: transparent;
      fill: green;
      fill-opacity: 0.3;
    `}
`;

const Home = () => {
  return (
    <Container maxWidth="xl" align="center">
      <LiteralsSvgWrap>
        <svg
          viewBox="0 0 413 397"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <LogoPath d="M216.297 289.4H217.05L217.5 288.796L287.389 194.937L287.818 194.362L287.639 193.668L276.197 149.147L275.378 145.96L273.509 148.668L207.334 244.568L38.3806 2.14235L37.9329 1.5H37.1499H3H1.5V3V393.72V395.22H3H42.7483H44.2483V393.72V87.3152L118.526 186.26L195.503 288.801L195.953 289.4H196.703H216.297Z" />
          <LogoPath d="M411.5 3V1.5H410H375.85H375.063L374.615 2.14807L335.505 58.8252L335.071 59.4553L335.326 60.1771L351.26 105.25L352.198 107.902L353.877 105.646L368.752 85.6701V393.72V395.22H370.252H410H411.5V393.72V3Z" />
          <LogoPath d="M270.487 26.7532C246.5 9.90986 218.863 1.5 187.63 1.5H68.12H66.62V3V11.14V11.6466L66.9271 12.0495L97.9578 52.7495L100.651 56.2814V51.84V40.223H185.953C211.387 40.223 233.581 47.0252 252.594 60.5962L252.602 60.6018L252.61 60.6073C271.644 73.8266 286.434 92.3873 296.961 116.354L296.964 116.362C307.486 139.95 312.769 167.272 312.769 198.36C312.769 229.446 307.487 256.957 296.962 280.922C286.438 304.512 271.647 323.08 252.602 336.677C233.589 349.878 211.393 356.497 185.953 356.497H100.651V198.36V196.843V196.321L100.327 195.912L69.2959 156.729L66.62 153.35V157.66V393.72V395.22H68.12H187.63C218.941 395.22 246.639 386.954 270.67 370.396L270.677 370.391L270.683 370.387C294.689 353.47 313.304 330.175 326.541 300.559L326.544 300.553C339.763 270.602 346.363 236.576 346.38 198.504L346.408 198.359L346.38 198.215C346.363 160.212 339.786 126.422 326.611 96.8758L326.573 96.682L326.465 96.5464C313.267 66.7187 294.736 43.5178 270.853 27.0086L270.701 26.8187L270.487 26.7532Z" />
        </svg>
      </LiteralsSvgWrap>
    </Container>
  );
};

export default Home;
