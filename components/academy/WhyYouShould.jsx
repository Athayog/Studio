import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import AccomImage from 'public/accom.png'
import AllianceImage from 'public/alliance.jpg'
import CareerImage from 'public/careerAt.png'
import EligibilityImage from 'public/eligibility.jpg'
import EmiImage from 'public/emi.jpg'
import ExpertImage from 'public/expert.jpg'
import LifeTimeImage from 'public/lifetime.jpg'
import NutiImage from 'public/nuti.jpg'
import OG from 'public/og.png'
import PostCourseImage from 'public/postCourse.jpg'

function WhyYouShould() {
	return (
		<Box p={{ base: '5', md: '10' }} fontSize="lg">
			<Flex alignItems="center" direction='column' gap={{ base: "10", md: "10" }} py={10} maxW='container.md' margin='0 auto'>
				<Box textAlign='center' >

					<Image placeholder='blur' src={OG} height="100%" width="100%" objectFit='cover' />

					<Heading>Why you should choose</Heading>
					<Text color="#617E43" fontSize={{base:'2xl',md:'4xl'}} fontWeight='bold'>AthaYog Living?</Text>

				</Box>
				<Flex justifyContent='space-between' alignItems={{ base: 'baseline', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }}  >
					<Box maxW={{base:'400px',md:"100%"}} height={{base:200,md:"100%"}}  flex={1} overflow='hidden' rounded='lg' width="100%">
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '3', md: "6" }} mt={{base:"3",md:"0"}} textAlign='left'>Global Accredition</Heading>
						<Text>
							Yoga Alliance USA & Vivekananda
							Yoga Anusandhana Samsthana
							validation</Text>
					</Box>
					<Box flex={1} overflow='hidden' rounded='lg' width="100%">
						<Image class='academy_image' layout='responsive' placeholder='blur' src={AllianceImage} objectPosition="center" width={400} height={200} objectFit='cover' />
					</Box>
					
				</Flex>

				<Flex justifyContent='space-between' alignItems={{ base: 'baseline', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }} >
					<Box maxW={{base:'400px',md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' width="100%">
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '3', md: "6" }} mt={{base:"3",md:"0"}} textAlign='left'>Lifetime Validity</Heading>
						<Text>Internationally recognized
							certificate for a lifetime</Text>
					</Box>
					<Box flex={1} overflow='hidden' rounded='lg' width="100%" >
						<Image class='academy_image' layout='responsive' placeholder='blur' objectPosition="center" width={400} height={200} src={LifeTimeImage} objectFit='cover' />
					</Box>
					
				</Flex>

				<Flex justifyContent='space-between' alignItems={{ base: 'baseline', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }} >
					<Box maxW={{base:'400px',md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' width="100%">
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '3', md: "6" }} mt={{base:"3",md:"0"}} textAlign='left'>Post-Course Support</Heading>
						<Text>Ongoing mentorship for
							your teaching journey.</Text>
					</Box>
					<Box flex={1} overflow='hidden' rounded='lg' width="100%" >
						<Image class='academy_image' layout='responsive' placeholder='blur' objectPosition="center" width={400} height={200} src={PostCourseImage} objectFit='cover' />
					</Box>
					
				</Flex>

				<Flex justifyContent='space-between' alignItems={{ base: 'baseline', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }} >
					<Box  width={{base:'400px',md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' width="100%">
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '3', md: "6" }} mt={{base:"3",md:"0"}} textAlign='left'>Expert Faculty</Heading>
						<Text>Learn from qualified
							Ph.D.s and MSc’s in Yoga.</Text>
					</Box>
					<Box maxW={{base:'400px',md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' width="100%" >
						<Image class='academy_image' layout='responsive' placeholder='blur' objectPosition="center" width={400} height={200} src={ExpertImage} objectFit='cover' />
					</Box>
					
				</Flex>

				<Flex justifyContent='space-between' alignItems={{ base: 'baseline', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }} >
					<Box maxW={{base:'400px',md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' width="100%">
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '3', md: "6" }} mt={{base:"3",md:"0"}} textAlign='left'>Accessible Eligibility</Heading>
						<Text>Open to individuals 16+, 10th-grade
							education, 1 month of recent yoga
							practice.</Text>
					</Box>
					<Box maxW={{base:'400px',md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' width="100%" >
						<Image class='academy_image' layout='responsive' placeholder='blur' objectPosition="center" width={400} height={200} src={EligibilityImage} objectFit='cover' />
					</Box>
					
				</Flex>

				<Flex justifyContent='space-between' alignItems={{ base: 'baseline', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }} >
					<Box maxW={{base:'400px',md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' width="100%">
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '3', md: "6" }} mt={{base:"3",md:"0"}} textAlign='left'>Stay Option (Accommodation)</Heading>
						<Text>

							If you're from out of town,
							we offer accommodation for
							an additional fee.</Text>
					</Box>
					<Box maxW={{base:'400px',md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' width="100%" >
						<Image class='academy_image' layout='responsive' placeholder='blur' width={400} height={200} objectPosition="bottom" src={AccomImage} objectFit='cover' />
					</Box>
					
				</Flex>
				<Flex justifyContent='space-between' alignItems={{ base: 'baseline', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }} >
					<Box maxW={{base:'400px',md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' width="100%">
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '3', md: "6" }} mt={{base:"3",md:"0"}} textAlign='left'>Convenient Payment Choices</Heading>
						<Text>
							We offer EMI and various payment
							options to ease financial burden,
							making purchases affordable and
							convenient for all..</Text>
					</Box>
					<Box maxW={{base:'400px',md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' width="100%">
						<Image class='academy_image' layout='responsive' placeholder='blur' objectPosition="center" width={400} height={200} src={EmiImage} objectFit='cover' />
					</Box>
					
				</Flex>
				<Flex justifyContent='space-between' alignItems={{ base: 'baseline', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }} >
					<Box maxW={{base:'400px',md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' width="100%">
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '3', md: "6" }} mt={{base:"3",md:"0"}} textAlign='left'>Master Yoga Nutrition</Heading>
						<Text>

							We guide you in crafting personalised nutrition plans, harmonising wellness
							with yoga journey.</Text>
					</Box>
					<Box maxW={{base:'400px',md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' width="100%" >
						<Image class='academy_image' layout='responsive' placeholder='blur' objectPosition="center" width={400} height={200} src={NutiImage} objectFit='cover' />
					</Box>
					
				</Flex>
				<Flex justifyContent='space-between' alignItems={{ base: 'baseline', md: "center" }} direction={{ base: "column-reverse", md: "row" }} width='100%' gap={{ base: '1', md: '10' }} >
					<Box  maxW={{base:'400px',md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' width="100%">
						<Heading color='aygreen.600' fontSize='xl' mb={{ base: '3', md: "6" }} mt={{base:"3",md:"0"}} textAlign='left'>Strategic Career Branding</Heading>
						<Text>We strategically guide
							personal branding, placements
							and career paths for your success.</Text>
					</Box>
					<Box maxW={{base:'400px',md:"100%"}} height={{base:200,md:"100%"}} flex={1} overflow='hidden' rounded='lg' width="100%" >
						<Image class='academy_image' layout='responsive' placeholder='blur' objectPosition="center" width={400} height={200} src={CareerImage} objectFit='cover' />
					</Box>
					
				</Flex>
			</Flex>
		</Box>
	)
}

export default WhyYouShould