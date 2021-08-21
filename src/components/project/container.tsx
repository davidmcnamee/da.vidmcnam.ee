import { styled } from "linaria/react";
import { FC } from "react";
import { onDesktop, onFullDesktop } from "../../styles/constants";



export const ProjectSection: FC = ({children}) => (
  <>
    <h2>Projects</h2>
    <ProjectContainer>
      {children}
    </ProjectContainer>
  </>
)

const ProjectContainer = styled.div`
  display: grid;
  gap: 5em 1em;
  width: 95%;
  ${onDesktop} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${onFullDesktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

