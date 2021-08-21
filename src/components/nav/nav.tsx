import { styled } from 'linaria/react'
import { HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_MOBILE, onDesktop } from '../../styles/constants';
import React, { Dispatch, FC, SetStateAction, useRef, useState } from 'react';
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { LinkedinIcon } from '../../icons/link-linkedin';
import { ResumeIcon } from '../../icons/link-resume';
import { GithubIcon } from '../../icons/link-github';
import { MenuIcon } from '../../icons/hamburger-menu';

type NavProps = {
  theme: 'light' | 'dark' | undefined;
  setTheme: Dispatch<SetStateAction<"light" | "dark" | undefined>>;
};

export const Nav: FC<NavProps> = (props) => {
  const { theme, setTheme } = props;
  const [isVisible, setVisible] = useState(false);
  const onLocalClick = () => {
    window.dispatchEvent(new Event('popstate'));
  }

  return (
    <>
    <Container>
      {/* leave blank space for name in top-left */}
      {theme && <StyledIcon as={DarkModeSwitch} size={30} checked={theme === 'dark'} onChange={b => setTheme(b ? 'dark' : 'light')}/>}
      {/* TODO: fix onBlur */}
      <HamburgerButton as={MenuIcon} onClick={() => setVisible(v => !v)} onBlur={() => setVisible(false)} />
      <LinkContainer isVisible={isVisible}>
        <IconContainer>
          <Link href="https://www.linkedin.com/in/david-mcnamee/"><StyledIcon as={LinkedinIcon}/></Link>
          <Link href="https://github.com/davidmcnamee"><StyledIcon as={GithubIcon}/></Link>
          <Link href="/davidmcnamee-resume.pdf"><StyledIcon as={ResumeIcon}/></Link>
        </IconContainer>
        <Link href="#about" onClick={onLocalClick}>About</Link>
        <Link href="#projects" onClick={onLocalClick}>Projects</Link>
        <Link href="#blog" onClick={onLocalClick}>Blog</Link>
      </LinkContainer>
    </Container>
    <GhostContainer className="scroll-watch" />
    </>
  )
}

const StyledIcon = styled.svg<Partial<React.ComponentProps<typeof DarkModeSwitch>>>`
  font-size: 1.6rem;
  margin: 0 0.5em;
  ${onDesktop} {
    margin: 0 0.5em;
  }
  color: var(--text-color);
`;

const HamburgerButton = styled(StyledIcon)`
  cursor: pointer;
  ${onDesktop} {
    display: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--text-color);
`

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: ${HEADER_HEIGHT_MOBILE};
  padding: 0.5em 1em;
  pointer-events: none;
  > * {
    pointer-events: auto;
  }
  ${onDesktop} {
    height: ${HEADER_HEIGHT_DESKTOP};
  }
`

const GhostContainer = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 1;
  top: 0;
  left: 0;
  height: ${HEADER_HEIGHT_MOBILE};
  ${onDesktop} {
    height: ${HEADER_HEIGHT_DESKTOP};
  }
  width: 100vw;
  background-color: var(--background);
  box-shadow: 0px -4px 35px -6px rgb(0 0 0 / 28%);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: 0;
  transform: scaleY(2);
  &[is-scrolled="true"] {
    opacity: 1;
    transform: scaleY(1);
  }
`;

type LinkContainerProps = {isVisible: boolean};
const LinkContainer = styled.div<LinkContainerProps>`
  position: fixed;
  top: ${HEADER_HEIGHT_MOBILE};
  left: 100vw;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform: translateX(${p => p.isVisible ? "-100%" : 0});
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  > * {
    padding: 0.5em;
    border-top-left-radius: 3em;
    border-bottom-left-radius: 3em;
    background-color: rgba(0,0,0,0.5);
  }
  ${onDesktop} {
    background-color: none;
    position: unset;
    flex-direction: row;
    align-items: center;
    transform: none;
    padding: 0;
    > * {
      padding: 0 0.5em;
      border-top-left-radius: unset;
      border-bottom-left-radius: unset;
      background-color: unset;
    }
  }
`

const IconContainer = styled.div`
  text-align: end;
  display: flex;
  flex-direction: row;
`
