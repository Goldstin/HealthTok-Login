import { Button, Flex, Heading, Divider, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Router } from 'next/dist/client/router'
import { useRouter } from 'next/dist/client/router'

const SignUpPage = () => {
    const { toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("gray.100", "gray.700")
    const router = useRouter();
    
    return(
      <Flex height="100vh" allignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={15}>Welcome to HealthTok!</Heading>
          <Heading textAlign={"center"} mb={35} fontSize={14}>Please enter your information below to sign-up</Heading>
          <div>First Name</div>
          <Input placeholder="e.g. John" variant="filled" mb={3} type="firstName" />
          <div>Last Name</div>
          <Input placeholder="e.g. Doe" variant="filled" mb={3} type="lastName" />
          <div>Date of Birth</div>
          <Input placeholder="e.g. 01/01/2000" variant="filled" mb={6} type="DOB" />
          <div>Email</div>
          <Input placeholder="e.g. johndoe123@gmail.com" variant="filled" mb={3} type="email" />
          <div>Password</div>
          <Input placeholder="**********" variant="filled" mb={6} type="passwords" />
          <Button size="lg" mb={2} colorScheme="teal">Sign Up</Button>
          <Button variant="link" mb={35} fontSize={18} onClick={() => router.push('/')}>Already have an account? Log in now</Button>
          <Button mt={700} size="lg" onClick={toggleColorMode}>Toggle Color Mode</Button>
        </Flex>
      </Flex>
    )
  }

  export default SignUpPage