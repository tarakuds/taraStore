import { Flex} from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom';
import Content from './Content';
import Header from './Header';
import SideBar from './SideBar';

function PageWrapper({children}) {
    const {pathname} = useLocation();


    //{pathname !=='/login' & pathname !=='/register' && }
    return (
        <>
        <Header />
        <Flex w="100%" minh="100vh" p='20px 10%'>
            {pathname !=='/login' & pathname !=='/register' && <SideBar />}
              <Content>
                  {children}
              </Content>            
        </Flex>
        </>
    )
}

export default PageWrapper

