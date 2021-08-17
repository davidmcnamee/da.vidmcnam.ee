import Head from 'next/head'
import React from 'react'
import { BlogContainer } from '../components/blog/container'
import { Post } from '../components/blog/post'
import { ProjectContainer } from '../components/project/container'
import { Project } from '../components/project/project'

export default function Home() {
  return (
    <>
      <Head>
        <title>davidmcnamee</title>
      </Head>
      <main>
        <section title="About">
          <h1>David McNamee</h1>
          <p>description and stuff and oaio jaifoaijf oaijfoi jaofijaofijaof joaijfoaij foiajfiamdoi amcoi aoij caoid joaij foaijfo iajfa</p>
        </section>
        <section title="Projects">
          <ProjectContainer>
            <Project />
            <Project />
            <Project />
            <Project />
          </ProjectContainer>
        </section>
        <section title="Blog">
          <BlogContainer>
            <Post />
            <Post />
            <Post />
            <Post />
          </BlogContainer>
        </section>
      </main>
    </>
  )
}
