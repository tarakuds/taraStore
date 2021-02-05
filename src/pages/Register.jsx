import { Box, Heading, Stack,Text,HStack, Divider } from '@chakra-ui/react'
import React from 'react'
import GenBtn from '../components/common/Button'
import {ReactComponent as FacebookIcon} from '../assets/icons/facebook icon.svg'
import {ReactComponent as TwitterIcon} from '../assets/icons/twitter icon.svg'
import {ReactComponent as GoogleIcon} from '../assets/icons/google icon.svg'

export default function Register() {
    return (
        <Box>
            <Box>
                <Stack alignItems="center">
                    <Heading mt="20px" align="center">Create an Account</Heading>
                    <Text mb="20px" align="center" fontSize="1.5rem" color="#6d6f72">Sign up with your social media account or email address</Text>
                    <HStack spacing={5}>
                    <GenBtn leftIcon={<FacebookIcon style={{width: "2rem"}}/>} 
                    bg="#4267b2" 
                    rounded="20px"
                    _hover={{
                        background: "#4267b2"
                    }}
                    >Facebook</GenBtn>
                    <GenBtn leftIcon={<TwitterIcon style={{width: "2rem"}}/>}
                    bg="#55acee" 
                    rounded="20px"
                    _hover={{
                        background: "#55acee"
                    }}
                    >Twitter</GenBtn>
                    <GenBtn leftIcon={<GoogleIcon style={{width: "3rem"}}/>} 
                    bg="#dd4b38" 
                    rounded="20px"
                    _hover={{
                        background: "#dd4b38"
                    }}
                    >Google</GenBtn>              
                    </HStack>
                    <Divider orientation="horizontal" mt="20px"/>
                </Stack>
            </Box>
        </Box>
    )
}
