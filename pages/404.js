import { Box, Grid, Heading, Text, Button } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import notFound from 'public/404.svg';
export default function Custom404() {
     return (
          <Grid height="80vh" placeItems="center">
               <Head>
                    <title>404 - AthayogLiving</title>
               </Head>
               <Box padding={5}>
                    <Image
                         src={notFound}
                         alt="404 Page Not Found"
                         height="400px"
                         width="400px"
                         layout="responsive"
                    />
                    <Heading textAlign="center">404 Page Not Found</Heading>
                    <Text textAlign="center">
                         Oops! This obviously isn&apos;t a page you were looking
                         for.
                    </Text>
                    <Link href="/" passHref={true}>
                         <Button
                              colorScheme="aygreen"
                              margin="auto"
                              display="block"
                              size="sm"
                              mt={5}
                         >
                              Go To Home
                         </Button>
                    </Link>
               </Box>
          </Grid>
     );
}
