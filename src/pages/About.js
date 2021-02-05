import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Mailing from '../assets/mail.svg';

function About() {
  return (
    <Box>
      <Box
        w="100%"
        bg="#1B262C"
        h="15vh"
        display="flex"
        alignItems="center"
      >
        <Text color="#fff" fontSize="5rem" mx="auto">
          ABOUT US
        </Text>
      </Box>

      <Box my="10px">
        <Text fontSize="3rem">Welcome To Our Blog</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer ut laoreet neque. Maecenas ultricies massa dolor.
          Nulla facilisi. Curabitur posuere ex sollicitudin
          scelerisque semper. Integer in ex porttitor, dignissim
          sapien et, imperdiet lectus. Morbi at eleifend arcu. Donec
          vestibulum consectetur est, molestie faucibus odio gravida
          quis. Sed ut convallis urna. Integer sed malesuada augue.
          Mauris vestibulum purus quis mattis volutpat. Donec eget
          erat nibh.
        </Text>
      </Box>
      <Box>
        <Text fontSize="3rem">MEET OUR TEAM</Text>
        <Flex>
          <Box>
            Jude
            <Box width="45%" borderRadius="50%">
              <img src={Mailing} alt="Logo" />
            </Box>
            <Text>
              Ut sit amet nulla commodo, aliquet erat mollis,
              venenatis orci. Curabitur a urna at nulla interdum
              tristique. Nullam felis justo, convallis vitae finibus
              eu, porta at lectus. Nam odio metus, eleifend mattis sem
              sed, viverra lobortis nibh. Vestibulum lacinia volutpat
              sapien id consequat. Duis eu lobortis magna. Integer
              cursus, nibh ut aliquam condimentum, nunc nibh bibendum
              turpis, at semper sapien augue non mauris. Phasellus ut
              eleifend nibh.
            </Text>
          </Box>
          <Box>
            Godson
            {/* <hr w="20px" /> */}
            <Box bg="#000" width="45%" h="20vh" borderRadius="50%" />
            <Text>
              Ut sit amet nulla commodo, aliquet erat mollis,
              venenatis orci. Curabitur a urna at nulla interdum
              tristique. Nullam felis justo, convallis vitae finibus
              eu, porta at lectus. Nam odio metus, eleifend mattis sem
              sed, viverra lobortis nibh. Vestibulum lacinia volutpat
              sapien id consequat. Duis eu lobortis magna. Integer
              cursus, nibh ut aliquam condimentum, nunc nibh bibendum
              turpis, at semper sapien augue non mauris. Phasellus ut
              eleifend nibh.
            </Text>
          </Box>
          <Box>
            Emmanuel
            <Box bg="#000" width="45%" h="20vh" borderRadius="50%" />
            <Text>
              Ut sit amet nulla commodo, aliquet erat mollis,
              venenatis orci. Curabitur a urna at nulla interdum
              tristique. Nullam felis justo, convallis vitae finibus
              eu, porta at lectus. Nam odio metus, eleifend mattis sem
              sed, viverra lobortis nibh. Vestibulum lacinia volutpat
              sapien id consequat. Duis eu lobortis magna. Integer
              cursus, nibh ut aliquam condimentum, nunc nibh bibendum
              turpis, at semper sapien augue non mauris. Phasellus ut
              eleifend nibh.
            </Text>
          </Box>
          <Box>
            Curtis
            <Box bg="#000" width="45%" h="20vh" borderRadius="50%" />
            <Text>
              Ut sit amet nulla commodo, aliquet erat mollis,
              venenatis orci. Curabitur a urna at nulla interdum
              tristique. Nullam felis justo, convallis vitae finibus
              eu, porta at lectus. Nam odio metus, eleifend mattis sem
              sed, viverra lobortis nibh. Vestibulum lacinia volutpat
              sapien id consequat. Duis eu lobortis magna. Integer
              cursus, nibh ut aliquam condimentum, nunc nibh bibendum
              turpis, at semper sapien augue non mauris. Phasellus ut
              eleifend nibh.
            </Text>
          </Box>
          <Box>
            Tara
            <Box bg="#000" width="45%" h="20vh" borderRadius="50%" />
            <Text>
              Ut sit amet nulla commodo, aliquet erat mollis,
              venenatis orci. Curabitur a urna at nulla interdum
              tristique. Nullam felis justo, convallis vitae finibus
              eu, porta at lectus. Nam odio metus, eleifend mattis sem
              sed, viverra lobortis nibh. Vestibulum lacinia volutpat
              sapien id consequat. Duis eu lobortis magna. Integer
              cursus, nibh ut aliquam condimentum, nunc nibh bibendum
              turpis, at semper sapien augue non mauris. Phasellus ut
              eleifend nibh.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default About;
