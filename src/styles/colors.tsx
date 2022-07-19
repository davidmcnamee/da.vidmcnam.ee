import { lighten, darken } from 'polished';
import { useEffect, useState } from "react";

type createShadesKwargs = {
  increments?: number;
  reverse?: boolean;
};

function createShades(name: string, baseColor: string, {increments, reverse}: createShadesKwargs = {}) {
  if(increments === undefined) increments = 5;
  if(reverse === undefined) reverse = false;

  const obj = {[`${name}`]: baseColor} as {[k:string]: string};
  for(let i = 1; i <= 7; ++i) {
    obj[`${name}-lighter-${i*increments}`] = (reverse ? darken : lighten)(increments/100*i, baseColor);
    obj[`${name}-darker-${i*increments}`] = (reverse ? lighten : darken)(increments/100*i, baseColor);
  }
  return obj;
}

export const lightTheme: {[k:string]: string} = {
  ...createShades('--background', '#f5f5f5', {increments:3, reverse:true}),
  ...createShades('--text-color', '#1a1a1a', {reverse:true}),
  ...createShades('--primary', '#A51C30', {reverse:true}),
  ...createShades('--link', '#1890ff'),
  '--link-contrast': 'darkgreen',
  '--gradient-1': 'linear-gradient(to right, deeppink 0%, coral 100%)',
  '--gradient-2': 'linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)',
  '--gradient-3': 'linear-gradient(to right, tomato 0%, gold 100%)',
  '--gradient-4': 'linear-gradient(to right, #08AEEA 0%, #2AF598 100%)',
  '--project-gradient-1': 'linear-gradient(to bottom right, #6441a5, #2a0845)',
  '--project-gradient-2': 'linear-gradient(to bottom right, #D38312, #A83279)',
  '--project-gradient-3': 'linear-gradient(to bottom right, #00c6ff, #0072ff)',
  '--project-gradient-4': 'linear-gradient(to bottom right, #780206, #061161)',
}

export const darkTheme: {[k:string]: string} = {
  ...createShades('--background', '#1a1a1a', {increments:3}),
  ...createShades('--text-color', '#f5f5f5'),
  ...createShades('--primary', 'gold'),
  ...createShades('--link', '#1890ff'),
  '--link-contrast': 'darkgreen',
  
  '--gradient-1': 'linear-gradient(to right, tomato 0%, gold 100%)',
  '--gradient-2': 'linear-gradient(to bottom right, SlateBlue 0%, DeepSkyBlue 100%)',
  '--gradient-3': 'linear-gradient(to right, deeppink 0%, coral 100%)',
  '--gradient-4': 'linear-gradient(to right, #08AEEA 0%, #2AF598 100%)',
  '--project-gradient-1': 'linear-gradient(to bottom right, #6441a5, #2a0845)',
  '--project-gradient-2': 'linear-gradient(to bottom right, #D38312, #A83279)',
  '--project-gradient-3': 'linear-gradient(to bottom right, #00c6ff, #0072ff)',
  '--project-gradient-4': 'linear-gradient(to bottom right, #780206, #061161)',
};

function isColorTheme(value: string | null): value is 'light' | 'dark' {
  return ['light', 'dark'].includes(value as string);
}

export function useColorTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>();
  useEffect(() => {
    // if available in local storage, use it
    const localStorageTheme = window.localStorage.getItem('color-theme');
    if(isColorTheme(localStorageTheme)) return setTheme(localStorageTheme);
    // otherwise, check browser settings
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? 'light' : 'dark')
    setTheme(mediaQuery.matches ? 'light' : 'dark');
    if(typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);
  // if toggle is clicked, change the theme across JS, CSS, and local storage
  useEffect(() => {
    if(theme !== undefined) {
      document.documentElement.setAttribute('color-theme', theme);
      window.localStorage.setItem('color-theme', theme);
    }
  }, [theme]);
  return [theme, setTheme] as const;
}
