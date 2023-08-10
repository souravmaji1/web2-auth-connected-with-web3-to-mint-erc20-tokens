import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Container,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function Footer() {
  return (
    <Flex
      minH={'63vh'}
      align={'center'}
      justify={'center'}
     >
        
      <Container>
      <Text color={'gray.500'}  style={{color:"cyan",fontFamily:"'Russo One', sans-serif",fontSize:"40px",textAlign:"center"}}   >
         FAQs
          </Text>
        <Accordion allowMultiple width="100%" maxW="lg" border="3px solid cyan"  rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{ bg: 'gray.800'}}
              color="white">
              <Text fontSize="md" color="white">
                What is Chakra UI?
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="white">
                Chakra UI is a simple and modular component library that gives developers
                the building blocks they need to create web applications.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{ bg: 'gray.800' }}
              color="white">
              <Text fontSize="md">What advantages to use?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="white">
                Chakra UI offers a variety of advantages including ease of use,
                accessibility, and customization options. It also provides a comprehensive
                set of UI components and is fully compatible with React.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{ bg: 'gray.800' }}
              color="white">
              <Text fontSize="md">How to start using Chakra UI?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="white">
                To get started with Chakra UI, you can install it via npm or yarn, and
                then import the components you need in your project. The Chakra UI
                documentation is also a great resource for getting started and learning
                more about the library.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}