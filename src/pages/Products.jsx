import React from 'react'
import {Box, Flex, Text, Image} from '@chakra-ui/react'
import Cards from '../components/common/layout/Cards'
// import Axios from 'axios'

function Products() {
   
    return (
        <div>
            
            <Text fontSize="4rem" textAlign="center" fontWeight="500" mb="2.5rem">BAGS</Text>
            <hr />
            {/* <Flex height="80%" backgroundColor="#f00" w="100px">

            </Flex> */}
            <Box height="80%" backgroundColor="#f00">
                {/* <Text fontSize="2rem">BAGS</Text> */}
                <Flex>
                    <Box>
                    <Flex >
                        <Cards className="cards">
                            <Image src="https://res.cloudinary.com/dfg1bmlsk/image/upload/v1612387280/eStore/bags/pockerdot_imkiyg.png" alt="Segun Adebayo" />
                        </Cards>
                        <Cards>
                            <Image src="https://res.cloudinary.com/dfg1bmlsk/image/upload/v1612387279/eStore/bags/backpack_ox9bai.png" alt="Segun Adebayo" />
                        </Cards>
                        <Cards>
                            <Image src="https://res.cloudinary.com/dfg1bmlsk/image/upload/v1612387279/eStore/bags/brownbag_set_yidhjo.png" alt="Segun Adebayo" />
                        </Cards>
                    </Flex>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

export default Products
