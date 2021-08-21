import Head from 'next/head'
import React, { useRef } from 'react'
import { Hero } from '../components/hero/hero'
import { ProjectSection } from '../components/project/container'
import { Project } from '../components/project/project'
import { onDesktop, SECTION_PADDING_VERTICAL_MOBILE, SECTION_PADDING_VERTICAL_DESKTOP, onDesktopQuery, onFullDesktopQuery } from '../styles/constants'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { css } from 'linaria'
import Script from 'next/script'
import { darkTheme, lightTheme } from '../styles/colors'
import { useEffect } from 'react'
import _ from 'lodash'
import { useMediaQuery } from 'beautiful-react-hooks'

type HomeProps = {
  theme: 'dark' | 'light' | undefined;
}

export default function Home(props: HomeProps) {
  const parallaxRef = useRef<IParallax>(null);
  const isDesktop = useMediaQuery(onDesktopQuery);
  const isFullDesktop = useMediaQuery(onFullDesktopQuery);
  const parallaxLayers = [
    { id: "about", size: 0.93 },
    { id: "divider-1", size: 0.5 },
    { id: "projects", size: isDesktop ? 2.3 : 3.7 },
    { id: "blog", size: 0.5 },
  ];
  
  // sum of sizes from 0 to n-1
  function sumUpTo(n: number) {
    return parallaxLayers.reduce(
      (prev, cur, i) => (i < n ? prev + cur.size : prev),
      0
    );
  }
  
  const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  const theme = props.theme === 'light' ? lightTheme : darkTheme;
  useEffect(() => {
    const onPopState = () => {
      const index = parallaxLayers.findIndex(x => x.id === window.location.hash.replace('#', ''));
      if(index !== -1)
        parallaxRef.current?.scrollTo(sumUpTo(index));
    }
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [parallaxLayers]);
  
  return (
    <>
      <Head>
        <title>davidmcnamee</title>
      </Head>
      <Script strategy="afterInteractive">
        {`
          function onScroll() {
            document.querySelectorAll('.scroll-watch').forEach(x => x.setAttribute(
              'is-scrolled', (document.querySelector('#parallax-container').scrollTop > 0).toString()
            ));
          }
          onScroll();
          document.querySelector('#parallax-container').addEventListener('scroll', onScroll);
        `}
      </Script>
      <main style={{ width: "100%", height: "100%" }}>
        <Parallax pages={sumUpTo(parallaxLayers.length)} id="parallax-container" ref={parallaxRef}>
          <ParallaxLayer
            className={sectionClass}
            offset={0}
            id={parallaxLayers[0].id}
            factor={parallaxLayers[0].size}
            speed={0}
            style={{ backgroundColor: "var(--background)", justifyContent: "flex-start" }}
          >
            <Hero />
          </ParallaxLayer>
          <ParallaxLayer
            offset={sumUpTo(1)}
            factor={parallaxLayers[1].size * 0.85}
            speed={0.2}
            style={{
              // background: `var(--gradient-2)`,
              backgroundColor: "tomato",
              clipPath: `polygon(0 40%, 0 100%, 100% 80%, 100% 0)`,
              zIndex: 4,
            }}
          />
          <ParallaxLayer
            offset={sumUpTo(1) + 0.1}
            factor={parallaxLayers[1].size * 0.85}
            speed={0.4}
            style={{
              backgroundColor: "deeppink",
              // background: `var(--gradient-3)`,
              clipPath: `polygon(100% 30%, 100% 80%, 0 100%, 0 0)`,
              zIndex: 5,
            }}
          />
          <ParallaxLayer
            className={sectionClass}
            offset={sumUpTo(2)}
            speed={0}
            id={parallaxLayers[2].id}
            factor={parallaxLayers[2].size}
            style={{ backgroundColor: "var(--background)" }}
          >
            <ProjectSection>
              <Project
                title="groupShot"
                url="https://devpost.com/software/groupshot"
                backgroundImg="url(/groupshot-background.png)"
                gradient="var(--project-gradient-1)"
                description="With the growth of the COVID pandemic sending the world into lockdown,
                  friends and family members feel further apart than ever. To help with this, my partner and I
                  created a video calling app that feels like you're in the same room at the same time, allowing you
                  to spend more quality time with friends and family while staying safe indoors. Join the party
                  and take a group shot today 😊"
              />
              <Project
                title="HousingGPA"
                url="https://github.com/davidmcnamee/student-housing"
                backgroundImg="url(/github-background.jpeg)"
                gradient="var(--project-gradient-2)"
                description="(Note: development is still ongoing, stay tuned for updates/release)
                  With rising demand for housing as students return to colleges and universities across the world,
                  my team members and I are building a site to rate and review housing experiences. We hope that this
                  will allow students to be better informed about what we found to be a confusing, data-lacking search
                  process."
              />
              <Project
                title="Copysmith"
                url="https://copysmith.ai/"
                backgroundImg="url(/copysmith-background.png)"
                gradient="var(--project-gradient-3)"
                description="Creating advertisements is an iterative process that demands lots of creativity. Copysmith solves that by
                leveraging GPT-3 to create advertisement text for you. As an extra hand-on-deck for the company's intitial launch in
                November 2020, I'm happy to see that the success of that public launch has led them to raising $10MM in seed funding to
                grow the paltform even further."
              />
              <Project
                title="DM-Boilerplate"
                url="https://github.com/davidmcnamee/boilerplate"
                backgroundImg="url(/github-background.jpeg)"
                gradient="var(--project-gradient-4)"
                description="When starting a project, there's usually a large hurdle to overcome at the very beginning: we need some code
                to get started. As I find myself in this situation quite often, I created a boilerplate app using Kubernetes, Docker, Bazel,
                and other build tools, to help make a new project feel like a seamless transition."
              />
              <Project
                title="Peruse"
                url="https://chrome.google.com/webstore/detail/peruse/fajccaeldgbiaigahbfpalgnbapjjmhp"
                backgroundImg="url(/peruse-background.jpeg)"
                gradient="var(--project-gradient-1)"
                description="As a helpful tool for my sisters, I built a chrome extension that can watch for discounts
                  at stores like Aritzia, Lululemon, or LaCoste. Just activate the chrome extension, visit the product page, and
                  select the size and color you want to track. The app will notify you by email when it's on sale!"
              />
              <Project
                title="LaggView"
                url="https://github.com/davidmcnamee/LaggView"
                backgroundImg="url(/hypixel-background.jpeg)"
                gradient="var(--project-gradient-2)"
                description="I used to (and still do) play a lot of Minecraft, particularly on the Hypixel Network which has over 11MM
                unique players. In my gaming conquests, I found it useful to create LaggView, a mod that creates HUDs for extra real-time
                minigame stats, player report management & crowdsourcing, and fun extra tools that can improve the gaming experience.
                This mod and my site https://thelagg.com (now deprecated) were used by over 200 players, and helped me get into coding
                for the first time."
              />
              <Project
                title="Ingredient Simplifier (Coffee N' Code 2019)"
                url="https://github.com/UWCoffeeNCode/Past-Projects/tree/master/F19/Projects/Ingredient-Simplifier"
                backgroundImg="url(/coffeencode-background.png)"
                gradient="var(--project-gradient-3)"
                description="As a project lead at Coffee N' Code, I led a React-Native workshop for 60 beginner developers.
                  Over 6 weeks, we created a mobile app that would take a picture of an ingredients list,
                  and simplify complex words on food packaging into simple terms for us non-chemists to understand.
                  So you can forget about Whey Protein Concentrate, Maltodextrin, Riboflavin, and Thiamin Mononitrate,
                  and see them for what they really are (which non-surprisingly is mostly sugar)."
              />
            </ProjectSection>
          </ParallaxLayer>
          <ParallaxLayer
            className={sectionClass}
            offset={sumUpTo(3)}
            speed={0}
            id={parallaxLayers[3].id}
            factor={parallaxLayers[3].size}
            style={{ backgroundColor: "var(--background)" }}
          >
            <h2>Blog</h2>
            <p>Coming soon....</p>
          </ParallaxLayer>
          
          {/* <ParallaxLayer
            offset={0}
            speed={0}
            factor={4}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
              zIndex: -1,
            }}
          /> */}
          {/* <ParallaxLayer
            offset={1.3}
            speed={-0.3}
            style={{ pointerEvents: "none" }}
          >
            <img
              src={url("satellite4")}
              style={{ width: "15%", marginLeft: "70%" }}
            />
          </ParallaxLayer> */}
        </Parallax>
      </main>
    </>
  );
}

const sectionClass = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${SECTION_PADDING_VERTICAL_MOBILE} 0.5rem;
  ${onDesktop} {
    padding: ${SECTION_PADDING_VERTICAL_DESKTOP} 0.5rem;
  }
`;
