import { styled } from "linaria/lib/react";
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { RECT_HEIGHT_MOBILE, RECT_HEIGHT_DESKTOP, HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_MOBILE, onDesktop, SECTION_PADDING_VERTICAL_MOBILE, SECTION_PADDING_VERTICAL_DESKTOP } from "../../styles/constants";

const RECT_WIDTH = `min(90vh, 90vw)`;
const RECT_SPLIT = 1/2;

export const Hero = () => {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true));

  return (
    <>
      <div style={{height:HEADER_HEIGHT_MOBILE,width: '100vw'}}/>
      <BackgroundRect className="scroll-watch" />
      {ReactDOM.createPortal(
        <>
          <Name isLoaded={isLoaded} className="scroll-watch">
            David <LastName>McNamee</LastName>
          </Name>
        </>
      , document.body)}
      <BioContainer>
        <Headshot src="/linkedin-headshot.jpeg" className="scroll-watch" />
        <Blurb className="scroll-watch">
          I am a computer science and business major, with a passion for all
          sorts of tech. My (current) interests are distributed systems, user
          interfaces, and programming languages. Previously at{" "}
          <b><a href="https://wish.com">Wish</a></b>,{" "}
          <b><a href="https://lazertechnologies.com">Lazer</a></b>, and{" "}
          <b><a href="https://snapcommerce.com">SnapCommerce</a></b>.
        </Blurb>
      </BioContainer>
    </>
  );
}

const CompanyLogo = styled.img`
  height: 0.7em;
  border-radius: 20%;
  display: inline-block;
`;
const BioContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 3em 0;

  ${onDesktop} {
    top: calc(${SECTION_PADDING_VERTICAL_DESKTOP} + ${RECT_HEIGHT_DESKTOP} * ${RECT_SPLIT});
    grid-template-columns: auto 1fr;
    position: absolute;
    left: 50vw;
    transform: translateX(-50%);
    width: ${RECT_WIDTH};
    gap: 1em;
    padding: 1em 5em 0;
  }
`

const Blurb = styled.p`
  ${onDesktop} {
    opacity: 0;
    transition: opacity 0.5s ease-in-out 0.5s;
    &[is-scrolled="false"] {
      opacity: 1;
    }
    &[is-scrolled="true"] {
      transition: opacity 0.5s ease-in-out;
    }
    a {
      color: var(--link);
    }
  }
`;
const Headshot = styled.img`
  height: 5em;
  width: 5em;
  border-radius: 50%;
  ${onDesktop} {
    opacity: 0;
    transition: opacity 0.5s ease-in-out 0.3s;
    &[is-scrolled="false"] {
      opacity: 1;
    }
    &[is-scrolled="true"] {
      transition: opacity 0.5s ease-in-out 0.3s;
    }
  }
`;
const BackgroundRect = styled.div`
  height: ${RECT_HEIGHT_MOBILE};
  width: ${RECT_WIDTH};
  ${onDesktop} {
    height: ${RECT_HEIGHT_DESKTOP};
  }
  border-radius: 5% 35% 5% 35%;
  background-color: var(--background-lighter-6);
  opacity: 0; transform: scaleX(0);
  transition: all 0.5s ease-in-out;
  &[is-scrolled="false"] {
    opacity: 1; transform: scaleX(1);
  }
  &[is-scrolled="true"] {
    transition: all 0.5s ease-in-out 0.5s;
  }
`;
const Name = styled.h1<{isLoaded: boolean}>`
  --top: calc(${HEADER_HEIGHT_MOBILE} + ${SECTION_PADDING_VERTICAL_MOBILE} + ${RECT_HEIGHT_MOBILE} * 0.5);
  --left: 50vw;
  --scale: 0.5;
  transform: translate(-50%,-50%);
  pointer-events: none;
  font-size: 2rem;
  ${onDesktop} {
    --top: calc(${HEADER_HEIGHT_MOBILE} + ${SECTION_PADDING_VERTICAL_DESKTOP} + ${RECT_HEIGHT_DESKTOP} * ${RECT_SPLIT});
    transform: translate(-50%,-100%);
    --scale: 0.3;
    font-size: 4rem;
  }
  z-index: 2;
  position: fixed;
  font-weight: 800;
  top: var(--top);
  left: var(--left);
  max-width: calc(min(90vh, 90vw) * 5 / 7);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out 0.25s;
  transform-origin: center left;
  margin: 0;
  opacity: ${p => p.isLoaded ? 1 : 0};
  line-height: 1.1;
  &[is-scrolled="true"] {
    transform: scale(var(--scale))
      translateX(calc(0px - 1/var(--scale)*(var(--left) - ${HEADER_HEIGHT_MOBILE}/5)))
      translateY(calc(0px - 1/var(--scale)*(var(--top) - ${HEADER_HEIGHT_MOBILE}/2 + 50%)));
    ${onDesktop} {
      transform: scale(var(--scale))
      translateX(calc(0px - 1/var(--scale)*(var(--left) - ${HEADER_HEIGHT_MOBILE}/5)))
      translateY(calc(0px - 1/var(--scale)*(var(--top) - ${HEADER_HEIGHT_DESKTOP}/2 + 50%)));
    }
  }
`;

const LastName = styled.span`
  color: var(--primary);
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
