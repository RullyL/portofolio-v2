"use client";
// Re-export the context-backed hook from theme provider to keep imports stable
export { useTheme } from '../theme/ThemeProvider';
export { useTheme as default } from '../theme/ThemeProvider';
