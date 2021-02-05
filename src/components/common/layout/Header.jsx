import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
// import GenBtn from '../Button'
import {ReactComponent as Notify} from '../../../assets/icons/notification.svg'

export default function Header() {
    return (
        <Box h="100px" bg="#f00" padding="20px 10%" w="100%">
            <Flex justifyContent="space-between" alignItems='center' flexWrap="wrap" >
              <Text color="#F7F1F1" fontSize="5rem" whiteSpace="nowrap"><Link to="/"><span color="#000" fontSize="5rem">Tara</span>Store</Link></Text>
            <Flex flexWrap="wrap" >
              <Flex mr='75px' border='none' color='#fff' fontSize='3rem'>
                  <li className="header-list">
                      <Link to="/">Home</Link>
                  </li>
                  <li className="header-list">
                      <Link to="/products">Products</Link>
                  </li>
                  <li className="header-list">
                      <Link to="/">Contact us</Link>
                  </li>
                  <Notify />
              </Flex>
                  {/* <Flex>
                      <GenBtn color="#F4EEFF" fontSize="1.933rem" mr="10px" bg="#7971E9" onClick={goToLogin}>Sign In</GenBtn>
              
              <GenBtn color="#ffffff" 
              fontSize="1.933rem" 
              bg="transparent" 
              border="2px solid #7971E9" 
               py="18px"

              _hover={{
                   color: "#0682d4",
                background: "#F4EEFF",
                border:"none" 
              }}
              onClick={goToRegister}
              >Sign Up</GenBtn>
                  </Flex> */}
              
              </Flex>
              </Flex>
            
        </Box>
    )
}
