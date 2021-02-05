import React from 'react';
import { Input, InputGroup } from '@chakra-ui/react';

function Column({ children, ...rest }) {
  return <InputGroup my="5%" w="95%" {...rest}>{children}</InputGroup>;
}

export function InputField({...rest}){
    return <Input fontSize="1.5rem" h="5vh" {...rest} ></Input>

}

export default Column;
