import { useState, useEffect } from 'react'
import { Box, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow, Button, useDisclosure } from '@chakra-ui/react'

const Resume = () => {
    const [isInteractive, setIsInteractive] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        // This helps ensure the Godot instance gets proper focus
        const iframe = document.querySelector('iframe')
        if (iframe) {
            iframe.focus()
        }
    }, [isInteractive])

    const handleYes = () => {
        setIsInteractive(true)
        onClose()
    }

    return (
        <>
            <Box
                w="100vw"
                h="100vh"
                bg="#242424"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="fixed"
                top={0}
                left={0}
                zIndex={-1}
                pt="60px"
            >
                <Box
                    w="90vw"
                    maxW="700px"
                    h="90vh"
                    maxH="900px"
                    bg="white"
                    boxShadow="xl"
                    overflow="hidden"
                    position="relative"
                >
                    {!isInteractive && (
                        <>
                            <img
                                src="/resume.png"
                                alt="Resume"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain'
                                }}
                            />
                            <Popover
                                isOpen={isOpen}
                                onClose={onClose}
                                placement="top"
                                closeOnBlur={false}
                            >
                                <PopoverTrigger>
                                    <Button
                                        position="absolute"
                                        bottom="20px"
                                        right="20px"
                                        colorScheme="blue"
                                        size="sm"
                                        onClick={onOpen}
                                    >
                                        Click me!
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent width="200px">
                                    <PopoverArrow />
                                    <PopoverBody>
                                        <Box textAlign="center" py={2}>
                                            <Box mb={2}>Want to do something fun?</Box>
                                            <Button
                                                size="sm"
                                                colorScheme="blue"
                                                onClick={handleYes}
                                                width="100%"
                                            >
                                                Yes!
                                            </Button>
                                        </Box>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </>
                    )}
                    {isInteractive && (
                        <iframe
                            src="/Portfolio.html"
                            width="100%"
                            height="100%"
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                backgroundColor: 'white'
                            }}
                            allow="autoplay; fullscreen"
                        />
                    )}
                </Box>
            </Box>
        </>
    )
}

export default Resume 