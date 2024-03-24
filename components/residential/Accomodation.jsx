import { Box, Divider, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import one from 'public/accom/accom_resi_1.png'
import two from 'public/accom/accom_resi_2.png'
import three from 'public/accom/accom_resi_3.png'
import four from 'public/accom/accom_resi_4.png'
import five from 'public/accom/accom_resi_5.png'
import six from 'public/accom/accom_resi_6.png'
import seven from 'public/accom/accom_resi_7.png'
import eight from 'public/accom/accom_resi_8.png'
import nine from 'public/accom/accom_resi_9.png'
import React from 'react'

import workspace from 'public/accom/carbon_workspace.png'
import laundry from 'public/accom/guidance_laundry.png'
import home from 'public/accom/iconoir_home.png'
import inHosue from 'public/accom/material-symbols-light_person-play-outline.png'
import kitchen from 'public/accom/material-symbols-light_soup-kitchen-outline.png'
import wifi from 'public/accom/tabler_wifi.png'

import "yet-another-react-lightbox/styles.css"

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"


import co from 'public/accom/Asset 1@2x-8 1.png'
import tea from 'public/accom/material-symbols-light_coffee-outline.png'
import veg from 'public/accom/veg-food 1.png'

import Lightbox from "yet-another-react-lightbox"

function Accomodation() {
    const [index, setIndex] = React.useState(-1);
  
    const photos = [
        { id: 1, src: one.src, width: one.width, height: one.height },
        { id: 2, src: two.src, width: two.width, height: two.height },
        { id: 3, src: three.src, width: three.width, height: three.height },
        { id: 4, src: four.src, width: four.width, height: four.height },
        { id: 5, src: five.src, width: five.width, height: five.height },
        { id: 6, src: six.src, width: six.width, height: six.height },
        { id: 7, src: seven.src, width: seven.width, height: seven.height },
        { id: 8, src: eight.src, width: eight.width, height: eight.height },
        { id: 9, src: nine.src, width: nine.width, height: nine.height },
    ];
    return (
        <Box my={10} px={4}>
            <Heading textAlign='center'>Accomodation details</Heading>
            <Text textAlign='center' mt={8} fontWeight='medium' maxW='2xl' margin='0 auto'>Set in the landscape of the newest most happening part of the city,
                our hostel is nestled in peace and quiet. It is perfect for those looking
                to escape the hustle and bustle of the city while having access
                to all the hot spots</Text>

            <Grid gridTemplateColumns='repeat(3,1fr)' gridTemplateRows='repeat(3,1fr)' maxW='container.md' margin='0 auto' gridRowGap={{ base: 1, md: 3 }}  gridColumnGap={{ base: 1, md: 5 }} mt={10}>

                <GridItem cursor='pointer' onClick={() => setIndex(0)}>
                    <Image src={one} placeholder='blur' />
                </GridItem>
                <GridItem cursor='pointer' onClick={() => setIndex(1)}>
                    <Image src={two} placeholder='blur' />
                </GridItem>
                <GridItem cursor='pointer' onClick={() => setIndex(2)}>
                    <Image src={three} placeholder='blur' />
                </GridItem>
                <GridItem cursor='pointer' onClick={() => setIndex(3)}>
                    <Image src={four} placeholder='blur' />
                </GridItem>
                <GridItem cursor='pointer' onClick={() => setIndex(4)}>
                    <Image src={five} placeholder='blur' />
                </GridItem>
                <GridItem cursor='pointer' onClick={() => setIndex(5)}>
                    <Image src={six} placeholder='blur' />
                </GridItem>
                <GridItem cursor='pointer' onClick={() => setIndex(6)}>
                    <Image src={seven} placeholder='blur' />
                </GridItem>
                <GridItem cursor='pointer' onClick={() => setIndex(7)}>
                    <Image src={eight} placeholder='blur' />
                </GridItem>
                <GridItem cursor='pointer' onClick={() => setIndex(8)}>
                    <Image src={nine} placeholder='blur' />
                </GridItem>
            </Grid>
            {/* <Box mt={10}>

                <Box maxW='container.md' margin='0 auto'>  <PhotoAlbum
                    layout="rows"
                    onClick={({ index }) => setIndex(index)}
                    photos={photos}
                    renderPhoto={NextJsImage}
                    defaultContainerWidth={1200}
                    sizes={{ size: "calc(100vw - 240px)" }}
                />
                </Box>
            </Box> */}
            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />

            <Box mt={10}>   <Box margin='0 auto' maxW='3xl'>
                <Heading color="#478605" fontSize={{ base: '2xl', md: '3xl' }} textAlign='center'>AMENITIES</Heading>
                <Grid gridTemplateColumns='repeat(2,1fr)' justifyContent='center' fontWeight='medium' maxW='container.xl' margin='0 auto' gap={5} mt={10}>
                    <GridItem display="flex" justifyContent='left' alignItems='center'>
                        <img alt='icon' style={{ marginRight: "10px" }} src={wifi.src} height='auto' width='30px' />
                        <Text>Free Wifi</Text>
                    </GridItem>
                    <GridItem display="flex" justifyContent='left' alignItems='center'>
                        <img alt='icon' style={{ marginRight: "10px" }} src={laundry.src} height='auto' width='30px' />
                        <Text>Laundry Service</Text>
                    </GridItem>
                    <GridItem display="flex" justifyContent='left' alignItems='center'>
                        <img alt='icon' style={{ marginRight: "10px" }} src={inHosue.src} height='auto' width='30px' />
                        <Text>In House Activities</Text>
                    </GridItem>
                    <GridItem display="flex" justifyContent='left' alignItems='center'>
                        <img alt='icon' style={{ marginRight: "10px" }} src={kitchen.src} height='auto' width='30px' />
                        <Text>Kitchen</Text>
                    </GridItem>
                    <GridItem display="flex" justifyContent='left' alignItems='center'>
                        <img alt='icon' style={{ marginRight: "10px" }} src={workspace.src} height='auto' width='30px' />
                        <Text>Workspace / Common Area</Text>
                    </GridItem>
                    <GridItem display="flex" justifyContent='left' alignItems='center'>
                        <img alt='icon' style={{ marginRight: "10px" }} src={home.src} height='auto' width='30px' />
                        <Text>Quite Residential Area</Text>
                    </GridItem>

                </Grid>
            </Box>
            </Box>
            <Box mt={10}>   <Box margin='0 auto' maxW='3xl' >
                <Heading color="#478605" fontSize={{ base: '2xl', md: '3xl' }} textAlign='center'>(Please Note)</Heading>
                <Grid gridTemplateColumns='1fr 10px 1fr 10px 1fr' justifyContent='space-evenly' fontWeight='medium' maxW='container.xl' margin='0 auto' gap={{ base: 2, md: 5 }} mt={10}>
                    <GridItem display="flex" justifyContent='center' alignItems='center'>
                        <Box width={{ base: '30px', md: "40px" }} mr={{ base: '10px', md: "20px" }}> <img alt='icon' src={co.src} height='auto' /></Box>

                        <Text fontSize={{ base: 'xs', md: "md" }}>Accomadation <br />
                            Co-living Space </Text>
                    </GridItem>
                    <Divider borderColor={'#ddd'} orientation='vertical' />
                    <GridItem display="flex" justifyContent='center' alignItems='center'>
                        <Box width={{ base: '30px', md: "40px" }} mr={{ base: '10px', md: "20px" }}> <img alt='icon' src={veg.src} height='auto' /></Box>

                        <Text fontSize={{ base: 'xs', md: "md" }}>Vegetarian <br /> 2 meals/day</Text>
                    </GridItem>
                    <Divider borderColor={'#ddd'} orientation='vertical' />
                    <GridItem display="flex" justifyContent='center' alignItems='center'>
                        <Box width={{ base: '40px', md: "50px" }} mr={{ base: '10px', md: "20px" }}> <img alt='icon' src={tea.src} height='auto' /></Box>

                        <Text fontSize={{ base: 'xs', md: "md" }}>1 HI - Tea</Text>
                    </GridItem>


                </Grid>
            </Box>
            </Box>
        </Box>
    )
}

export default Accomodation