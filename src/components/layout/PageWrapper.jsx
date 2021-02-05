import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Content from './Content';
import SideBar from './SideBar';

function PageWrapper({ children }) {
  const { pathname } = useLocation();
  return (
    <Flex w="100%" minh="100vh">
      {(pathname !== '/login') & (pathname !== '/register') }
      {/* && (
        <SideBar />
      ) */}
      {/* <Content>{children}</Content> */}
    </Flex>
  );
}

export default PageWrapper;
