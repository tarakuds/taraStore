import { Button } from '@chakra-ui/react';
import { React } from 'react';
function GenBtn({ children, ...rest }) {
  // const [focus,setFocus] = useState(false)
  return (
    <Button
      px="3rem"
      py="2rem"
      bg="#0682d4"
      fontSize="1.4rem"
      color="#ffff"
      _hover={{
        background: '#0682d4',
        color: '#ffff',
      }}
      // onFocus={() => setFocus(true)}
      // onBlur={() => setFocus(false)}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default GenBtn;
