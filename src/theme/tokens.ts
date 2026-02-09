export const themeTokens = {
  palette: {
    mode: 'dark',
    background: {
      base: '#0b0d12',
      elevated: '#141826',
      surface: '#1b2233',
    },
    text: {
      primary: '#f4f6fb',
      secondary: '#c6ccda',
      muted: '#8d95a7',
    },
    accent: {
      primary: '#6aa7ff',
      secondary: '#8b5cf6',
      success: '#2bd576',
      warning: '#fbbf24',
      danger: '#f87171',
    },
    border: {
      default: '#2a3247',
      subtle: '#202737',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    scale: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      display: '1.75rem',
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.7,
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
} as const;

export type ThemeTokens = typeof themeTokens;
