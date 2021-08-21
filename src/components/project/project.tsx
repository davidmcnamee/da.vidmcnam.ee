import { styled } from "linaria/lib/react";
import { useEffect, useState } from "react";
import { FC, RefObject, useRef } from "react";
import { darkTheme } from "../../styles/colors";
import { onDesktop } from "../../styles/constants";

const CONTAINER_PADDING = "1rem";

type ProjectProps = {
  title: string;
  url: string;
  backgroundImg: string;
  gradient: string;
  description: string;
}

export const Project: FC<ProjectProps> = (props) => {
  const {children, title, url, backgroundImg, gradient, description} = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // This ensures that css variables are kept up to date with containerRef size
  // every time resize occurs, reset to zero.
  const [numUpdates, setUpdates] = useState(0);
  useEffect(() => {
    const onResize = () => setUpdates(0);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  useEffect(() => numUpdates < 2 ? setUpdates(x => x+1) : undefined, [numUpdates]);

  return (
    <a href={url}>
      <Container ref={containerRef} innerRef={containerRef} numUpdates={numUpdates} titleRef={titleRef} backgroundImg={backgroundImg} gradient={gradient}>
        <h3 ref={titleRef}>{title}</h3>
        <p>{description}</p>
        <GhostHeader>{title}</GhostHeader>
      </Container>
    </a>
  );
}

type ContainerProps = Pick<ProjectProps, "backgroundImg" | "gradient"> & {
  titleRef: RefObject<HTMLHeadingElement>;
  innerRef: RefObject<HTMLDivElement>;
  numUpdates: number;
};

const GhostHeader = styled.h3`
  opacity: 0;
  position: relative !important;
  margin-bottom: 0;
`

const Container = styled.div<ContainerProps>`
  position: relative;
  min-height: max(18rem, 100%);
  border-radius: 0.5em;
  padding: ${CONTAINER_PADDING};
  cursor: pointer;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  * {
    color: ${darkTheme['--text-color']};
  }
  &:before, &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 1;
    border-radius: 0.5em;
    background-size: cover;
    background-position: center;
  }
  &:before {
    background-image: ${p => p.backgroundImg};
    z-index: -1;
    transition: opacity 0.4s ease-in-out;
    opacity: 0.1;
    ${onDesktop} {
      opacity: 0.7;
    }
  }
  &:after {
    background: ${p => p.gradient};
    z-index: -2;
  }
  &:hover {
    ${onDesktop} {
      box-shadow: 0px 0px 52px -10px rgb(0 0 0 / 75%);
    }
  }
  &:hover:before {
    ${onDesktop} {
      opacity: 0.1;
    }
  }
  text-decoration: none;
  & > h3 {
    ${onDesktop} {
      position: absolute;
      transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
      top: ${CONTAINER_PADDING};
      left: ${CONTAINER_PADDING};
    }
  }
  &:hover > h3 {
    ${onDesktop} {
      transform: translateY(calc(${p => p.innerRef.current?.getBoundingClientRect?.()?.height ?? 0}px - 2 * ${CONTAINER_PADDING} - 100%));
    }
  }
  & > p {
    margin-bottom: 0;
    ${onDesktop} {
      opacity: 0;
    }
    transition: opacity 0.2s ease-in-out 0.2s;
  }
  &:hover > p {
    ${onDesktop} {
      opacity: 1;
    }
  }
`
