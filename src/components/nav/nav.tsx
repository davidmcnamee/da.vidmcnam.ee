import { Icon } from '@iconify/react';
import linkedinIcon from '@iconify/icons-logos/linkedin-icon';
import githubIcon from '@iconify/icons-logos/github-icon';
import filePdf from '@iconify/icons-bi/file-pdf';
import { styled } from 'linaria/react'
import { onDesktop } from '../../styles/constants';
import { Dispatch, FC, MutableRefObject, SetStateAction, useRef, useState } from 'react';
import menuIcon from '@iconify/icons-feather/menu';
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
  const linkContainerRef = useRef<HTMLDivElement>(null);
  return (
    <Container>
      {/* leave blank space for name in top-left */}
      {theme && <DarkModeSwitch size={30} checked={theme === 'dark'} onChange={b => setTheme(b ? 'dark' : 'light')}/>}
      <HamburgerButton as={MenuIcon} onClick={() => setVisible(v => !v)} />
      <LinkContainer ref={linkContainerRef} isVisible={isVisible} innerRef={linkContainerRef}>
        <IconContainer>
          <StyledIcon href="https://www.linkedin.com/in/david-mcnamee/"><LinkedinIcon/></StyledIcon>
          <StyledIcon href="https://github.com/davidmcnamee"><GithubIcon/></StyledIcon>
          <StyledIcon href="/davidmcnamee-resume.pdf"><ResumeIcon/></StyledIcon>
        </IconContainer>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#blog">Blog</Link>
      </LinkContainer>
    </Container>
  )
}

const StyledIcon = styled.a`
  text-decoration: none;
  > svg {
    font-size: 1.6em;
    margin: 0 0.5em;
    text-decoration: none;
    color: var(--text-color);
  }
`;

const HamburgerButton = styled(StyledIcon)`
  ${onDesktop} {
    display: none;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: var(--text-color);
`

const Container = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 3em;
  box-shadow: 0px -4px 35px -6px rgb(0 0 0 / 28%);
  padding: 0.5em 1em;
  ${onDesktop} {
    height: 5.5em;
  }
`
type LinkContainerProps = {isVisible: boolean, innerRef: MutableRefObject<HTMLDivElement | null>};
const LinkContainer = styled.div<LinkContainerProps>`
  position: fixed;
  top: 2.5em;
  left: 100vw;
  transition: all 0.3s ease;
  transform: translateX(calc(0px - ${(p: LinkContainerProps) => p.isVisible ? p.innerRef.current?.getBoundingClientRect().width ?? 0 : 0}px));
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0.8em;
  > * {
    margin: 0.1em 0;
  }
  ${onDesktop} {
    position: unset;
    flex-direction: row;
    align-items: center;
    transform: none;
    padding: 0;
    > * {
      margin: 0 0.5em;
    }
  }
`

const IconContainer = styled.div`
  text-align: end;
  display: flex;
  flex-direction: row;
`
