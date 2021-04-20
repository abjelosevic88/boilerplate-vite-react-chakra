import React from 'react'

import { 
  Container, 
  Flex, 
  Spacer, 
  Image, 
  IconButton, 
  Icon,
  Box, 
  Button,
  HStack
} from '@chakra-ui/react'
import { FiSearch } from "react-icons/fi"

import { ReactComponent as Logo } from '../../../public/logo.svg';

function Header() {
  return (
    <Flex bg="black" h={20} align="center">
      <Container maxW="container.lg">
        <Flex align="center">
          <Logo />
          <Image src="/logo.svg" h={16} />
          <Spacer />
          <HStack spacing={10}>
            <IconButton
              colorScheme="blackAlpha" 
              icon={<Icon color="white" w={8} h={8} as={FiSearch} />} 
            />
            <Button 
              rounded="none" 
              variant="outline" 
              color="white" 
              colorScheme="blackAlpha" 
              borderColor="brand.yellow"
              borderWidth={2}
            >
              Start Project
            </Button>
            <IconButton 
              colorScheme="blackAlpha" 
              icon={<Image src="/Drawer.svg" />} 
            />
          </HStack>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Header
