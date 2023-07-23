import { extendTheme, type ThemeConfig, defineStyleConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const globalStyles = {
  'html, body, #root': {
    height: '100%',
  },
};

const fonts = {
  heading: "'Open Sans', Arial, Helvetica, sans-serif",
  body: "'Open Sans', Arial, Helvetica, sans-serif",
  mono: "'Fira Code', 'Courier New', Courier, monospace",
  cv_name: "'Oswald', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
};

const headingStyle = defineStyleConfig({
  sizes: {
    xl: {
      fontSize: '5xl',
      lineHeight: '1.5',
    },
    lg: {
      fontSize: '3xl',
      lineHeight: '1.5',
    },
    md: {
      fontSize: 'xl',
      lineHeight: '1.5',
    },
    sm: {
      fontSize: 'lg',
      lineHeight: '1.5',
    },
  },
  defaultProps: {
    size: 'lg',
  },
});

const linkStyle = defineStyleConfig({
  baseStyle: {
    color: 'blue.500',
    printColorAdjust: 'exact',
    WebkitPrintColorAdjust: 'exact',
  },
});

const theme = extendTheme({
  config,
  fonts,
  styles: { global: globalStyles },
  components: {
    Link: linkStyle,
    Heading: headingStyle,
  },
});

export default theme;
