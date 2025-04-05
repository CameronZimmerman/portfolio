import { Container, Heading, VStack, Box, Input, Textarea, Button, Text } from '@chakra-ui/react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:cameronazimmerman@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Box minH="100vh" bg="gray.50" pt="60px">
      <Container maxW="1400px" py={16}>
        <VStack gap={12} align="center">
          <VStack gap={4}>
            <Heading as="h1" size="2xl" fontWeight="bold" color="gray.800">
              Contact Me
            </Heading>
            <Text fontSize="xl" color="gray.600" textAlign="center">
              Have a question or want to work together? Send me a message!
            </Text>
          </VStack>

          <Box 
            as="form" 
            onSubmit={handleSubmit} 
            w="100%" 
            maxW="800px" 
            p={8} 
            bg="white" 
            borderRadius="xl" 
            boxShadow="lg"
          >
            <VStack gap={6}>
              <Box w="100%">
                <Box as="label" display="block" mb={2} color="gray.700" fontWeight="medium">
                  Name
                </Box>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  size="lg"
                  bg="gray.50"
                  borderColor="gray.200"
                  _hover={{ borderColor: 'blue.400' }}
                  _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                />
              </Box>

              <Box w="100%">
                <Box as="label" display="block" mb={2} color="gray.700" fontWeight="medium">
                  Email
                </Box>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  size="lg"
                  bg="gray.50"
                  borderColor="gray.200"
                  _hover={{ borderColor: 'blue.400' }}
                  _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                />
              </Box>

              <Box w="100%">
                <Box as="label" display="block" mb={2} color="gray.700" fontWeight="medium">
                  Message
                </Box>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={6}
                  required
                  size="lg"
                  bg="gray.50"
                  borderColor="gray.200"
                  _hover={{ borderColor: 'blue.400' }}
                  _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                />
              </Box>

              <Button 
                type="submit" 
                colorScheme="blue" 
                size="lg" 
                w="100%"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact 