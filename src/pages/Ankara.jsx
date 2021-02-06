import React, {useEffect, useState} from 'react'
import {Box, Text, Image} from '@chakra-ui/react'
import axios from 'axios'
import Cards from '../components/common/layout/Cards'

function Ankara() {
    const [details, setDetails] = useState([])
    useEffect(()=>{
        const api_url='https://tarastoretest.herokuapp.com/products'
    axios
      .get(api_url).then((res) => {
         setDetails(res.data)
        console.log(res)
      })
      .catch((err) => console.log(err))
    }, []);
        
    return (
        details.map(item=>(
            <Box w="30%" m="5%">
            <Image src="https://res.cloudinary.com/dfg1bmlsk/image/upload/v1612387280/eStore/bags/pockerdot_imkiyg.png" alt="For clothes" />
            <Text>Bags that make sense</Text>
            <Text>$5000</Text>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi praesentium facere quidem hic.</Text>
        </Box>
        ))       
    )
}

export default Ankara
