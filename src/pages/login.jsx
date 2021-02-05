import {
  Box,
  Heading,
  Stack,
  Flex,
  Checkbox,
  Text,
} from '@chakra-ui/react';
import { React } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import TextInput from '../components/common/TextInput';
import { ReactComponent as PwdIcon } from '../assets/icons/password icon.svg';
import GenBtn from '../components/common/Button';
// import PageNav from '../components/common/PageNav';

function Login() {
  const history = useHistory();

  const changeUrl = () => {
    history.push('/');
  };

  return (
    <Box w="100%" minh="100vh">
      <Box bg="#fff" p={4} w="30%" m="150px auto">
        <Box shadow="lg" borderWidth="1px" p={10} bg="#e8e8f1">
          <Stack spacing={6} m="20px 20px">
            <Heading align="center">Log in</Heading>
            <TextInput type="name" placeholder="Username" bg="#fff" />
            <TextInput
              leftIcon={
                <PwdIcon
                  style={{
                    width: '2rem',
                    paddingTop: '2rem',
                    paddingLeft: '0.5rem',
                  }}
                />
              }
              placeholder="Enter your Password"
              type="password"
              bg="#fff"
            />
            <GenBtn rounded="20px" onClick={changeUrl}>
              Log in
            </GenBtn>
            <Flex justifyContent="space-between">
              <Checkbox size="lg" fontWeight="700" fontSize="2rem">
                Remember me
              </Checkbox>
              <Text
                color="#0658d4"
                fontSize="1.4rem"
                fontWeight="700"
              >
                Forgot Password?
              </Text>
            </Flex>
          </Stack>
        </Box>
        <Text
          color="#0658d4"
          fontSize="1.8rem"
          align="center"
          m="2rem 0"
          fontWeight="700"
        >
          <Link to="/register">Create an Account</Link>
        </Text>
      </Box>
    </Box>
  );
}

export default Login;
