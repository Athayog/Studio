import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ImageFooter1 from 'public/Workshops_home.jpg'
import Image from 'next/image'

function Footer() {
    return (
        <Box p={10} maxW='container.lg' margin='0 auto' overflow='hidden'>
            <Heading fontSize='3xl' zIndex={2}>Arise, awake and stop not until the goal is achieved.</Heading>
            <Text textAlign='right'>-Swami Vivekananda.</Text>


            <Box position='relative' zIndex={-1}  >
                <svg className='footer-svg-1' width="100" height="100" viewBox="0 0 339 339" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="169.375" cy="169.252" r="168.25" stroke="url(#paint0_linear_83_224)" stroke-width="1.5" />
                    <defs>
                        <linearGradient id="paint0_linear_83_224" x1="169.375" y1="0.251953" x2="169.375" y2="338.252" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F8FFA6" />
                            <stop offset="0.0001" stopColor="#BCECB0" />
                            <stop offset="1" stopColor="#FFE9E0" />
                        </linearGradient>
                    </defs>
                </svg>

                <svg className='footer-svg-2'  width="60" height="60" viewBox="0 0 339 339" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="169.375" cy="169.252" r="168.25" stroke="url(#paint0_linear_83_224)" stroke-width="1.5" />
                    <defs>
                        <linearGradient id="paint0_linear_83_224" x1="169.375" y1="0.251953" x2="169.375" y2="338.252" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F8FFA6" />
                            <stop offset="0.0001" stopColor="#BCECB0" />
                            <stop offset="1" stopColor="#FFE9E0" />
                        </linearGradient>
                    </defs>
                </svg>

                <svg className='footer-svg-3' width="150" height="150" viewBox="0 0 339 339" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="169.375" cy="169.252" r="168.25" stroke="url(#paint0_linear_83_224)" stroke-width="1.5" />
                    <defs>
                        <linearGradient id="paint0_linear_83_224" x1="169.375" y1="0.251953" x2="169.375" y2="338.252" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F8FFA6" />
                            <stop offset="0.0001" stopColor="#BCECB0" />
                            <stop offset="1" stopColor="#FFE9E0" />
                        </linearGradient>
                    </defs>
                </svg>

                <svg className='footer-svg-4' width="339" height="339" viewBox="0 0 339 339" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="169.375" cy="169.252" r="168.25" stroke="url(#paint0_linear_83_224)" stroke-width="1.5" />
                    <defs>
                        <linearGradient id="paint0_linear_83_224" x1="169.375" y1="0.251953" x2="169.375" y2="338.252" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F8FFA6" />
                            <stop offset="0.0001" stopColor="#BCECB0" />
                            <stop offset="1" stopColor="#FFE9E0" />
                        </linearGradient>
                    </defs>
                </svg>


               

            </Box>
        </Box>
    )
}

export default Footer