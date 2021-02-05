import { Box } from '@chakra-ui/react';
import React from 'react';

function Content({ children }) {
  return (
    <Box flex="1" width="100%">
      {children}
    </Box>
  );
}

export default Content;
