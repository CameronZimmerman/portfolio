import { Container, Heading, Text, VStack, Box, Icon } from '@chakra-ui/react'
import { FaHiking, FaDumbbell, FaGamepad, FaHeart } from 'react-icons/fa'

const Home = () => {
  return (
    <Box minH="100vh" bg="gray.50" pt="60px">
      <Container maxW="1400px" py={16}>
        <VStack gap={12} align="center">
          <VStack gap={4}>
            <Heading as="h1" size="2xl" fontWeight="bold" color="gray.800">
              Welcome to My Portfolio
            </Heading>
            <Text fontSize="2xl" textAlign="center" color="gray.600" fontWeight="medium">
              Full Stack Software Engineer
            </Text>
          </VStack>
          
          <Box maxW="1000px" textAlign="center" px={8}>
            <Text fontSize="xl" lineHeight="1.8" color="gray.700">
              With years of experience in full-stack development, I've built modern web applications using TypeScript, React, and Node.js. I specialize in creating scalable solutions, from robust backend services to intuitive user interfaces. My work focuses on delivering high-quality products that solve real problems while maintaining clean, maintainable code.
            </Text>
          </Box>

          <VStack gap={6}>
            <Heading as="h2" size="lg" color="gray.800">
              Interests & Hobbies
            </Heading>
            <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={6}>
              <Box display="flex" alignItems="center" p={4} bg="white" borderRadius="lg" boxShadow="sm">
                <Icon as={FaHiking} color="green.500" mr={3} boxSize={6} />
                <Text fontSize="lg" color="gray.700">Hiking</Text>
              </Box>
              <Box display="flex" alignItems="center" p={4} bg="white" borderRadius="lg" boxShadow="sm">
                <Icon as={FaDumbbell} color="blue.500" mr={3} boxSize={6} />
                <Text fontSize="lg" color="gray.700">Calisthenics</Text>
              </Box>
              <Box display="flex" alignItems="center" p={4} bg="white" borderRadius="lg" boxShadow="sm">
                <Icon as={FaGamepad} color="purple.500" mr={3} boxSize={6} />
                <Text fontSize="lg" color="gray.700">Game Development</Text>
              </Box>
              <Box display="flex" alignItems="center" p={4} bg="white" borderRadius="lg" boxShadow="sm">
                <Icon as={FaHeart} color="red.500" mr={3} boxSize={6} />
                <Text fontSize="lg" color="gray.700">Family</Text>
              </Box>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home 