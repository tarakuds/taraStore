import React from 'react'
import {Box} from '@chakra-ui/react'
import Axios from 'axios'

function Ankara() {
    Axios.get('https://cors-anywhere.herokuapp.com/tarastoretest.herokuapp.com/products').then((res)=>{
            
        var product_list= res.data
        console.log(product_list)
        console.log(product_list.length)

        // var content = document.querySelector('.cards')
        // var contentNew = ""

        // for(var i=0; i<=10; i++){
        //     console.log(i)
        //     var product_detail=product_list[i]
        //     console.log(product_detail)
        // }
//         product_list.forEach(item=>{
//             contentNew += `
//                 <Cards className="cards">
//                     <Image src="${item.product_list}" />
//                 </Cards>`

//                 // content.innerHTML += contentNew
// })
})

    return (
        <div>
            <p >Ankara Page</p>
            <Box >

            </Box>
        </div>
    )
}

export default Ankara
