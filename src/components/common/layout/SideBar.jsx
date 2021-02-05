import { Box } from '@chakra-ui/react'
import React from 'react'
import {
  Link
} from 'react-router-dom';

function SideBar() {
    return (
        <Box w="350px" paddingLeft="10px" h="auto"  fontSize="1.8em" bg="#f00" color="#fff">
            <h2 style={{fontSize:"1.5em", paddingBottom:"8px", textAlign:"center"}} >PRODUCTS</h2>
            
                <Link to="/"><h3 style={{padding:"5px 0", margin:"2px"}} >BAGS</h3></Link>
                <hr />
                <Link to="/"><h3 style={{padding:"5px 0"}}>SHOES</h3></Link>
                <hr />
                <Link to="/"><h3 style={{padding:"5px 0"}}>T-SHIRT</h3></Link>
                <hr />
                <Link to="/ankara"><h3 style={{padding:"5px 0"}}>ANKARA</h3></Link>
                <hr />
                <Link to="/"><h3 style={{padding:"5px 0"}}>WIGS</h3></Link>
                

           
        </Box>
    )
}

export default SideBar
