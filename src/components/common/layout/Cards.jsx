import React from 'react'
import {Box, Flex, Text} from '@chakra-ui/react'

function Cards({children}) {
    return (
        <Box w="30%" m="5%">
                        {children}
                        <hr />
                        <Flex color="#fff" fontSize="1.5rem" fontWeight="400" mx="5px" justifyContent="space-between" >
                            <Text className="name" marginRight="5%">Pocker Dot</Text>
                            <Text className="price">$200</Text>
                        </Flex>
                        <Text className="description" mx="5px">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam libero doloribus iste soluta sapien</Text>
                        
        </Box>
    )
}

export default Cards
