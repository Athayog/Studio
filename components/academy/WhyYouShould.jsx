import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import PlaceHolder from 'public/career2.jpg'
import AllianceImage from 'public/alliance.jpg'
import LifeTimeImage from 'public/lifetime.jpg'
import PostCourseImage from 'public/postCourse.jpg'
import ExpertImage from 'public/expert.jpg'
import EligibilityImage from 'public/eligibility.jpg'
import AccomImage from 'public/accom.jpg'
import EmiImage from 'public/emi.jpg'
import CareerImage from 'public/careerAt.jpg'
import NutiImage from 'public/nuti.jpg'
import React from 'react'
import OG from 'public/og.png'

function WhyYouShould() {
	return (
		<Box p={{ base: '5', md: '10' }}>
			<Flex alignItems="center" direction='column' gap={{ base: "10", md: "10" }} py={10} maxW='container.md' margin='0 auto'>
				<Box textAlign='center' >

					<Image src={OG} height="100%" width="100%" objectFit='cover' />

					<Heading>Why you should choose</Heading>
					<Text color="#617E43" fontSize='4xl' fontWeight='bold'>AthaYog Living?</Text>

				</Box>
				<Flex justifyContent='space-between' alignItems={{ base: 'center', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }}  >
					<Box width={{base:400,md:"100%"}} height={{base:200,md:"100%"}}  flex={1} overflow='hidden' rounded='lg'>
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '1', md: "6" }} textAlign='left'>Global Accredition</Heading>
						<Text>
							Yoga Alliance USA & Vivekananda
							Yoga Anusandhana Samsthana
							validation</Text>
					</Box>
					<Box flex={1} overflow='hidden' rounded='lg'>
						<Image src={AllianceImage} objectPosition="center" width={400} height={200} objectFit='cover' />
					</Box>
					<Box>

					</Box>
				</Flex>

				<Flex justifyContent='space-between' alignItems={{ base: 'center', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }} >
					<Box width={{base:400,md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg'>
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '1', md: "6" }} textAlign='left'>Lifetime Validity</Heading>
						<Text>Internationally recognized
							certificate for a lifetime</Text>
					</Box>
					<Box flex={1} overflow='hidden' rounded='lg' >
						<Image objectPosition="center" width={400} height={200} src={LifeTimeImage} objectFit='cover' />
					</Box>
					<Box>

					</Box>
				</Flex>

				<Flex justifyContent='space-between' alignItems={{ base: 'center', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }} >
					<Box width={{base:400,md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg'>
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '1', md: "6" }} textAlign='left'>Post-Course Support</Heading>
						<Text>Ongoing mentorship for
							your teaching journey.</Text>
					</Box>
					<Box flex={1} overflow='hidden' rounded='lg' >
						<Image objectPosition="center" width={400} height={200} src={PostCourseImage} objectFit='cover' />
					</Box>
					<Box>

					</Box>
				</Flex>

				<Flex justifyContent='space-between' alignItems={{ base: 'center', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }} >
					<Box  width={{base:400,md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg'>
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '1', md: "6" }} textAlign='left'>Expert Faculty</Heading>
						<Text>Learn from qualified
							Ph.D.s and MSc’s in Yoga.</Text>
					</Box>
					<Box width={{base:400,md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' >
						<Image objectPosition="center" width={400} height={200} src={ExpertImage} objectFit='cover' />
					</Box>
					<Box>

					</Box>
				</Flex>

				<Flex justifyContent='space-between' alignItems={{ base: 'center', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }} >
					<Box width={{base:400,md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg'>
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '1', md: "6" }} textAlign='left'>Accessible Eligibility</Heading>
						<Text>Open to individuals 16+, 10th-grade
							education, 1 month of recent yoga
							practice.</Text>
					</Box>
					<Box width={{base:400,md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' >
						<Image objectPosition="center" width={400} height={200} src={EligibilityImage} objectFit='cover' />
					</Box>
					<Box>

					</Box>
				</Flex>

				<Flex justifyContent='space-between' alignItems={{ base: 'center', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }} >
					<Box width={{base:400,md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg'>
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '1', md: "6" }} textAlign='left'>Stay Option (Accommodation)</Heading>
						<Text>

							If you're from out of town,
							we offer accommodation for
							an additional fee.</Text>
					</Box>
					<Box width={{base:400,md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' >
						<Image width={400} height={200} objectPosition="bottom" src={AccomImage} objectFit='cover' />
					</Box>
					<Box>

					</Box>
				</Flex>
				<Flex justifyContent='space-between' alignItems={{ base: 'center', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }} >
					<Box width={{base:400,md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg'>
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '1', md: "6" }} textAlign='left'>Convenient Payment Choices</Heading>
						<Text>
							We offer EMI and various payment
							options to ease financial burden,
							making purchases affordable and
							convenient for all..</Text>
					</Box>
					<Box width={{base:400,md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg'>
						<Image objectPosition="center" width={400} height={200} src={EmiImage} objectFit='cover' />
					</Box>
					<Box>

					</Box>
				</Flex>
				<Flex justifyContent='space-between' alignItems={{ base: 'center', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }} >
					<Box width={{base:400,md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg'>
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '1', md: "6" }} textAlign='left'>Master Yoga Nutrition</Heading>
						<Text>

							We guide you in crafting personalised nutrition plans, harmonising wellness
							with yoga journey.</Text>
					</Box>
					<Box width={{base:400,md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' >
						<Image objectPosition="center" width={400} height={200} src={NutiImage} objectFit='cover' />
					</Box>
					<Box>

					</Box>
				</Flex>
				<Flex justifyContent='space-between' alignItems={{ base: 'center', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }} >
					<Box  width={400} height={200} flex={1} overflow='hidden' rounded='lg'>
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '1', md: "6" }} textAlign='left'>Strategic Career Branding</Heading>
						<Text>We strategically guide
							personal branding, placements
							and career paths for your success.</Text>
					</Box>
					<Box width={{base:400,md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' >
						<Image objectPosition="center" width={400} height={200} src={CareerImage} objectFit='cover' />
					</Box>
					<Box>

					</Box>
				</Flex>
			</Flex>
		</Box>
	)
}

export default WhyYouShould