import { Box, Flex } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box bg="gray.800" px={4} py={4}>
      <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
        <RouterLink to="/" style={{ color: 'white', fontSize: '1.25rem', fontWeight: 'bold' }}>
          Cameron Zimmerman
        </RouterLink>
        <Flex gap={4}>
          <RouterLink to="/" style={{ color: 'white' }}>
            Home
          </RouterLink>
          <RouterLink to="/contact" style={{ color: 'white' }}>
            Contact
          </RouterLink>
          <RouterLink to="/resume" style={{ color: 'white' }}>
            Resume
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 