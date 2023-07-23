import { Box, type BoxProps, forwardRef } from '@chakra-ui/react';

/* eslint-disable react/jsx-props-no-spreading */
export const NoPrint = forwardRef<BoxProps, 'div'>((props, _) => (
  <Box display="contents" sx={{ '@media print': { display: 'none' } }} {...props} />
));

export const OnlyPrint = forwardRef<BoxProps, 'div'>((props, _) => (
  <Box display="none" sx={{ '@media print': { display: 'contents' } }} {...props} />
));
