import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Tokss from "./Token";
import { useAuth0 } from "@auth0/auth0-react";




export default function Main() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

   return(
    <div>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              style={{color:"white",fontFamily:"'Russo One', sans-serif"}}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}>
              Web3 Token
            </Text>
            <br />{' '}
            <Text  as={'span'}  style={{color:"cyan",fontFamily:"'Russo One', sans-serif"}} >
              Mint your Token Now
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          If you want to mint our erc20 token then hurry up because we are running flat 50% off sale also users who will mint our token in this sale will get royalty
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          {isAuthenticated ? (
            <Button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            style={{background:"cyan",fontFamily:"'Russo One', sans-serif"}}
              rounded={'full'}
              color={'black'}
              _hover={{
                bg: 'blue.500',
              }}>
            Logout
            </Button>
             ) : (
            <Button onClick={() => loginWithRedirect()} rounded={'full'} style={{fontFamily:"'Russo One', sans-serif"}}  >Login</Button>
             )}
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          style={{borderRadius:"51px",padding:'30px'}}
          height={620}
          src={
            'https://cdn.leonardo.ai/users/6833d5aa-a7fe-40c8-bcef-42e7b9e0f146/generations/84a3b00e-49dc-4054-a248-d0d2f6a6ffce/Leonardo_Diffusion_background_painting_wall_with_neon_cyberpu_1.jpg'
          }
        />
      </Flex>
    </Stack>
    {isAuthenticated && <Tokss />}
    </div>
  );
}