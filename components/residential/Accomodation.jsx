import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import one from 'public/accom/accom_resi_1.png'
import two from 'public/accom/accom_resi_2.png'
import three from 'public/accom/accom_resi_3.png'
import four from 'public/accom/accom_resi_4.png'
import five from 'public/accom/accom_resi_5.png'
import six from 'public/accom/accom_resi_6.png'
import seven from 'public/accom/accom_resi_7.png'
import eight from 'public/accom/accom_resi_8.png'
import nine from 'public/accom/accom_resi_9.png'

import wifi from 'public/accom/tabler_wifi.png'
import kitchen from 'public/accom/material-symbols-light_soup-kitchen-outline.png'
import laundry from 'public/accom/guidance_laundry.png'
import inHosue from 'public/accom/material-symbols-light_person-play-outline.png'
import workspace from 'public/accom/carbon_workspace.png'
import home from 'public/accom/iconoir_home.png'

function Accomodation() {

    return (
        <Box my={10}>
            <Heading textAlign='center'>Accomodation details</Heading>
            <Text textAlign='center' mt={8} fontWeight='medium' maxW='2xl' margin='0 auto'>Set in the landscape of the newest most happening part of the city,
                our hostel is nestled in peace and quiet. It is perfect for those looking
                to escape the hustle and bustle of the city while having access
                to all the hot spots</Text>
            <Grid gridTemplateColumns='repeat(3,1fr)' maxW='container.md' margin='0 auto' gap={5} mt={10}>
                <GridItem>
                    <Image src={one} placeholder='blur' />
                </GridItem>
                <GridItem>
                    <Image src={two} placeholder='blur' />
                </GridItem>
                <GridItem>
                    <Image src={three} placeholder='blur' />
                </GridItem>
                <GridItem>
                    <Image src={four} placeholder='blur' />
                </GridItem>
                <GridItem>
                    <Image src={five} placeholder='blur' />
                </GridItem>
                <GridItem>
                    <Image src={six} placeholder='blur' />
                </GridItem>
                <GridItem>
                    <Image src={seven} placeholder='blur' />
                </GridItem>
                <GridItem>
                    <Image src={eight} placeholder='blur' />
                </GridItem>
                <GridItem>
                    <Image src={nine} placeholder='blur' />
                </GridItem>
            </Grid>
            <Box mt={10}>   <Box margin='0 auto' maxW='3xl'>
                <Heading color="#478605" textAlign='center'>AMENITIES</Heading>
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
            </Box></Box>

        </Box>
    )
}

export default Accomodation