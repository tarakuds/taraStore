import React from 'react'
import {Box, Button, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Main() {
    return (
       <Box verticalAlign="center" textAlign="center">
           <Box my="10%" mx="5%">
               <Text fontSize="5rem" color="#f00" fontWeight="700">Welcome To Your Number One(1) eSTORE</Text>
            </Box>
            <Button p="3% 4%" border="2px solid #fff" fontSize="3rem" bg="#f00" color="#fff"><Link to="/products">View Products</Link></Button>
       </Box>
    )
}

export default Main
