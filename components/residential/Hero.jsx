import { Box, Button, Flex, Heading, ListItem, OrderedList, Text, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import HeroArtwork from 'public/HeroArtwork.svg';
import HeroBg from 'public/HeroBG.png';
import HeroGirl from 'public/HeroGirl.png';

import EnquiryModal from '../home/Enquiry/EnquiryModal';
import Link from 'next/link';

function Hero() {
    return (

        <Box
            bg={`linear-gradient(to bottom, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 1)), url(${HeroBg.src})`}
            backgroundSize='cover'
            position='relative'
            backdropFilter='blur(100px)' // Adjust the blur amount as needed

        >
            <Flex py={10} maxW='container.xl' px={10} margin='0 auto' direction={{ base: 'column', md: 'row' }}>
                <Flex direction='column' gap={5} flex={6} zIndex={1}>
                    {/* Line Heading */}
                    <Text color='#478605' fontWeight='bold'>INTERNATIONALLY ACCREDITED</Text>
                    <Box display={{ base: "none", md: "block" }}>
                        <Heading fontSize='5xl' color="#202020">Become a Globally Certified Yoga Teacher in Just 30 Days with  <chakra.span color='#478605'>AthaYog Living</chakra.span></Heading>
                    </Box>
                    <Box display={{ base: "block", md: "none" }}>
                        <Heading color="#202020" >Unlock Your Yoga Journey with<br /> <chakra.span color='#478605'>AthaYog Living</chakra.span></Heading>
                    </Box>
                    <Text >
                        <chakra.span bg='white' rounded='full' fontSize={{ base: "xl", md: "2xl" }} width='max-content' p={3} fontWeight='bold'>
                            Athayog residential program
                        </chakra.span>

                    </Text>

                    <Box mt={6}>
                        <Text fontSize='3xl' fontWeight='bold'>Syllabus</Text>
                        <OrderedList spacing={2} mt={2} fontWeight='medium' ml={6}>
                            <ListItem>Introduction to Yoga and its Streams</ListItem>
                            <ListItem>Life and Message of Spiritual Masters & Indian Culture</ListItem>
                            <ListItem>Report Writing & Presentation</ListItem>
                            <ListItem>Kriya, Asana, Pranayama, Dhyana - PRactice & Presentation</ListItem>
                            <ListItem>Teaching Techniques - Worksheet Writing & Presentation</ListItem>
                            <ListItem>Karma Yoga, Maitri Mialana, Kirtana, Krida Yoga & Ananda Sabha</ListItem>
                        </OrderedList>
                    </Box>
                    <Box mt={6}>
                        <Text fontSize='3xl' fontWeight='bold'>Course Details</Text>
                        <OrderedList mt={2} fontWeight='medium' ml={6} display="flex" justifyContent='space-between' height="100%">
                            <Box gap={3}>
                                <ListItem>Classical Asanas</ListItem>
                                <ListItem>Pranayama</ListItem>
                                <ListItem>Yoga Nidra</ListItem>
                                <ListItem>Anatomy & Physiology</ListItem>
                                <ListItem>Philosophy</ListItem>
                                <ListItem>Yoga Sutra</ListItem>
                                <ListItem>Ayurvedha</ListItem>
                            </Box>
                            <Box spacing={7}><ListItem>Shatkarma</ListItem>
                                <ListItem>Chanting</ListItem>
                                <ListItem>2 Days Retreat</ListItem>
                                <ListItem>Teaching Methodology</ListItem>
                                <ListItem>Class apprentiaceship</ListItem>
                                <ListItem>Internship</ListItem>
                                <ListItem>Career Oppurtunity</ListItem></Box>

                        </OrderedList>
                    </Box>
                    <Box mt={6} width="100%">
                        <Text  fontSize='2xl' fontWeight='bold'>BRIEF OF TEACHER TRAINING COURSE - RYT 200</Text>
                            <Text fontWeight='medium' mt={3}>Lorem 2psum dolor sit amet consectetur adipisicing elit. Magnam aperiam esse ex quasi culpa vero perspiciatis, ratione id optio rerum error illo quae dolorum? Quo neque vitae voluptates aliquid voluptatum.
                            Eveniet expedita ea possimus dolore molestias ipsam cupiditate tempore molestiae unde magni soluta recusandae veniam, amet incidunt voluptatum omnis impedit harum consequatur culpa consequuntur minus quidem corrupti perspiciatis! Quos, dolores.
                            Cum corrupti impedit, dicta vel, voluptates pariatur adipisci nulla culpa ea esse aspernatur nam asperiores consectetur officia, quidem quas facilis magni iste sit quos nostrum. Aut officiis totam vel explicabo!
                            Tempora, ipsa? Earum molestiae dolor soluta officia amet sed ex! Debitis quidem rerum dolorum explicabo molestiae? Adipisci dignissimos laborum doloribus, corporis totam odit facere incidunt debitis excepturi quos odio eaque?
                            A cum expedita velit fugit, laborum, omnis atque vel quidem, ullam similique vero commodi non accusantium delectus incidunt veniam harum laboriosam quis. Quas, veritatis? Inventore ratione quos minus nam iusto!</Text>
                    </Box>
                </Flex>

                <Box flex={4} bg={`url(${HeroArtwork.src})`} backgroundSize='contain' position='relative'>
                    <Image alt="Home" src={HeroGirl} height="400" width="400" />



                </Box>

            </Flex>

        </Box>

    )
}

export default Hero