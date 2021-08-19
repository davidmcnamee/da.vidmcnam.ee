import { styled } from 'linaria/lib/react'
import Head from 'next/head'
import React, { useRef } from 'react'
import { BlogContainer } from '../components/blog/container'
import { Post } from '../components/blog/post'
import { Hero } from '../components/hero/hero'
import { ProjectContainer } from '../components/project/container'
import { Project } from '../components/project/project'
import { SECTION_PADDING_VERTICAL } from '../styles/constants'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { css } from 'linaria'
import { useEffect } from 'react'
import Script from 'next/script'

export default function Home() {
  const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

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
      <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax pages={4} id="parallax-container">
        <ParallaxLayer className={sectionClass} offset={0} factor={1} speed={0} style={{ backgroundColor: '#805E73' }}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer className={sectionClass} offset={2} speed={0} style={{ backgroundColor: '#87BCDE' }}>
          <ProjectContainer>
            <Project />
            <Project />
            <Project />
            <Project />
          </ProjectContainer>          
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>
      </Parallax>
    </div>
      {/* <main>
        <section className={sectionClass} id="about">
          
        </section>
        <section className={sectionClass} id="projects">
          
        </section>
        <section className={sectionClass} id="blog">
          <BlogContainer>
            <Post />
            <Post />
            <Post />
            <Post />
          </BlogContainer>
        </section>
      </main> */}
    </>
  )
}

const sectionClass = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${SECTION_PADDING_VERTICAL} 0.5rem;
`;
