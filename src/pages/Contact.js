import React from 'react';
import {
  Box,
  Text,
  InputLeftAddon,
  Textarea,
} from '@chakra-ui/react';
import Column from '../components/common/Column';
import GenBtn from '../components/common/Button';
import { InputField } from '../components/common/Column';
import Mailing from '../assets/user.svg';
import { ReactComponent as Message } from '../assets/message.svg';

function Contact() {
  return (
    <Box backgroundColor="#1B262C" maxH="100vh">
      <Box h="80vh" w="100%">
        <Text fontSize="5rem" color="#fff" align="center">
          Contact Us
        </Text>
        <Box
          bg="#D3D3D3"
          mx="2.5%"
          w="95%"
          borderRadius="10px"
          px="20px"
          py="10px"
        >
          <Column>
            <InputLeftAddon fontSize="2rem">Name</InputLeftAddon>
            <InputField placeholder="Your Name Here"></InputField>
          </Column>
          <Column>
          {/* <img src={Mailing} alt="Logo" /> */}
          <InputLeftAddon fontSize="2rem">
          Email
          </InputLeftAddon> 
            {/* <InputLeftElement
      pointerEvents="none"
      children={<Mailing />}
    /> */}


            <InputField placeholder="Your Email Address"></InputField>
          </Column>
          <Column>
            <InputLeftAddon fontSize="2rem">Phone</InputLeftAddon>
            <InputField placeholder="Your Phone"></InputField>
          </Column>
          <Column>
            <InputLeftAddon fontSize="2rem">Message</InputLeftAddon>
            <Textarea fontSize="1.5rem" w="95%" >
            </Textarea>
          </Column>
          <GenBtn bg="#2B7DDB" my="3%" mx="40%" fontSize="2rem">
            Send Message
          </GenBtn>
        </Box>
      </Box>
     
    </Box>
  );
}

export default Contact;
