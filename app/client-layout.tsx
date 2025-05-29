'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Roboto } from 'next/font/google';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '900'] });
const clientSideEmotionCache = createEmotionCache();

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
} 