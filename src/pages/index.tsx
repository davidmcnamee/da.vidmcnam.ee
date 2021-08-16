import Head from 'next/head'
import { styled } from 'linaria/react'
import { Icon } from '@iconify/react';
import linkedinIcon from '@iconify/icons-logos/linkedin-icon';
import githubIcon from '@iconify/icons-logos/github-icon';
import filePdf from '@iconify/icons-bi/file-pdf';

export default function Home() {
  return (
    <>
      <Head>
        <title>With Linaria</title>
      </Head>

      <nav>
        {/* leave blank space for name in top-left */}
        <a href="https://www.linkedin.com/in/david-mcnamee/"><Icon icon={linkedinIcon}/></a>
        <a href="https://github.com/davidmcnamee"><Icon icon={githubIcon}/></a>
        <a href="/davidmcnamee-resume.pdf"><Icon icon={filePdf} /></a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
      </nav>
      <main>

      </main>
    </>
  )
}
