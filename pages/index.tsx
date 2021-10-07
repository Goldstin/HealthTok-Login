import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Router } from 'next/dist/client/router'
import { useRouter } from 'next/dist/client/router'


const IndexPage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")
  const router = useRouter();
  
  return(
    <Flex height="100vh" allignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading fontSize={28} mb={15}>Welcome back to HealthTok!</Heading>
        <Heading textAlign={"center"} mb={35} fontSize={14}>Please enter your email and password</Heading>
        <div>Email</div>
        <Input placeholder="e.g. johndoe123@gmail.com" variant="filled" mb={3} type="email" />
        <div>Password</div>
        <Input placeholder="**********" variant="filled" mb={6} type="passwords" />
        <Button mb={6} colorScheme="teal">Log In</Button>
        <Button variant="link" onClick={() => router.push('/Sign-Up')}>Don't have an account? Sign up now</Button>
        <Button mt={900} onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  )
}

export default IndexPage
