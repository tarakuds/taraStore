import { Box } from '@chakra-ui/react'
import React from 'react'

function Content({children}) {
    return (
        <Box width="100%" ml='20px'>
            {children}              
        </Box>
    )
}

export default Content
