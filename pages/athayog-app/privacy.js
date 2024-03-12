import HomeLayout from '@/components/layout/HomeLayout';
import { Box, Divider, Heading, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
function Privacy(props) {
     return (
          <Box maxW="container.xl" margin="auto" py={20} mt={10} px={5}>
               <Head>
                    <title>Privacy Policy - AthayogLiving</title>
               </Head>
               <Heading textAlign="center">PRIVACY POLICY</Heading>
               <Divider my={6} />

               <VStack spacing={10} mt={5}>
                    <Box width="100%" fontWeight="light" fontSize="lg">

                         <Heading
                              _after={{
                                   content: "''",
                                   display: 'block',
                                   width: '50px',
                                   height: '4px',
                                   background: 'aygreen.500',
                                   marginTop: '16px'
                              }}
                              fontSize="2xl"
                              mb={5}
                         >
                              WHAT DO WE DO WITH YOUR INFORMATION?
                         </Heading>
                         <Text mb={5} fontSize="xl">This Privacy Policy outlines how  <strong style={{ fontWeight: '500' }}>Athayog Living</strong>{' '} collect, use, and disclose your information when you use our mobile application (&#34;app&#34;).</Text>
                         <Text mb={5} fontSize="xl">
                              When you purchase a service from our firm through the app, <strong style={{ fontWeight: '500' }}>Athayog Living</strong> collect personal information such as your name, address, and email address.
                         </Text>
                         <Text mb={5} fontSize="xl">
                              When you use our app, <strong style={{ fontWeight: '500' }}>Athayog Living</strong> may automatically receive your device's internet protocol (IP) address to understand your device, browser, and operating system for better service.
                         </Text>
                         <Text mb={5} fontSize="xl">
                              Email marketing (if applicable): With your
                              permission, we may send you emails about our
                              store, new products and other updates.
                         </Text>
                    </Box>
                    <Box width="100%" fontWeight="light" fontSize="lg">
                         <Heading
                              fontSize="2xl"
                              _after={{
                                   content: "''",
                                   display: 'block',
                                   width: '50px',
                                   height: '4px',
                                   background: 'aygreen.500',
                                   marginTop: '16px'
                              }}
                              mb={5}
                         >
                              CONSENT
                         </Heading>
                         <Text mb={5}  fontSize="xl">
                               By using our app and providing personal information, you consent to our collection and use of that information for the purposes outlined in this Privacy Policy.
                         </Text>
                         <Text mb={5} fontWeight="medium" fontSize="xl">
                              How do you get my consent?
                         </Text>
                         <Text mb={5} fontSize="xl">
                              When you provide us with personal information to
                              complete a transaction, verify your credit card,
                              place an order, arrange for a delivery or return a
                              purchase, we imply that you consent to our
                              collecting it and using it for that specific
                              reason only.
                         </Text>
                         <Text mb={5} fontSize="xl">
                              If we ask for your personal information for a
                              secondary reason, like marketing, we will either
                              ask you directly for your expressed consent, or
                              provide you with an opportunity to say no.
                         </Text>
                         <Text mb={5} fontWeight="medium" fontSize="xl">
                              How do I withdraw my consent?
                         </Text>
                         <Text mb={5} fontSize="xl">
                              If after you opt-in, you change your mind, you may
                              withdraw your consent for us to contact you, for
                              the continued collection, use or disclosure of
                              your information, at anytime, by contacting us at{' '}
                              <strong style={{ fontWeight: '500' }}>
                                    info@athayogliving.com
                              </strong>{' '}
                              or mailing us at:{' '}
                              <strong style={{ fontWeight: '500' }}>
                              No.3293, 1st floor, 12th main, HAL 2nd stage,
                                   Indiranagar, Bengaluru, Karnataka - 560038
                              </strong>
                         </Text>
                    </Box>
                    <Box width="100%" fontWeight="light" fontSize="lg">
                         <Heading
                              fontSize="2xl"
                              _after={{
                                   content: "''",
                                   display: 'block',
                                   width: '50px',
                                   height: '4px',
                                   background: 'aygreen.500',
                                   marginTop: '16px'
                              }}
                              mb={5}
                         >
                              DISCLOSURE
                         </Heading>
                         <Text mb={5} fontSize="xl">
                              We may disclose your personal information if we
                              are required by law to do so or if you violate our
                              <strong
                                   style={{
                                        cursor: 'pointer',
                                        fontWeight: '500'
                                   }}
                              >
                                   <Link href="/terms"> Terms of Service</Link>
                              </strong>
                         </Text>
                    </Box>

                    <Box width="100%" fontWeight="light" fontSize="lg">
                         {' '}
                         <Heading
                              fontSize="2xl"
                              _after={{
                                   content: "''",
                                   display: 'block',
                                   width: '50px',
                                   height: '4px',
                                   background: 'aygreen.500',
                                   marginTop: '16px'
                              }}
                              mb={5}
                         >
                              PAYMENT
                         </Heading>
                         <Text mb={5} fontSize="xl">
                              We use Razorpay for processing payments.
                              We/Razorpay do not store your card data on their
                              servers. The data is encrypted through the Payment
                              Card Industry Data Security Standard (PCI-DSS)
                              when processing payment. Your purchase transaction
                              data is only used as long as is necessary to
                              complete your purchase transaction. After that is
                              complete, your purchase transaction information is
                              not saved.
                         </Text>
                         <Text mb={5} fontSize="xl">
                              Our payment gateway adheres to the standards set
                              by PCI-DSS as managed by the PCI Security
                              Standards Council, which is a joint effort of
                              brands like Visa, MasterCard, American Express and
                              Discover.
                         </Text>
                         <Text mb={5} fontSize="xl">
                              PCI-DSS requirements help ensure the secure
                              handling of credit card information by our store
                              and its service providers.
                         </Text>
                         <Text mb={5} fontSize="xl">
                              For more insight, you may also want to read terms
                              and conditions of razorpay on{' '}
                              <strong style={{ fontWeight: '500' }}>
                                   {' '}
                                   <a href="https://razorpay.com">
                                        https://razorpay.com
                                   </a>
                              </strong>
                         </Text>
                    </Box>
                    <Box width="100%" fontWeight="light" fontSize="lg">
                         <Heading
                              fontSize="2xl"
                              _after={{
                                   content: "''",
                                   display: 'block',
                                   width: '50px',
                                   height: '4px',
                                   background: 'aygreen.500',
                                   marginTop: '16px'
                              }}
                              mb={5}
                         >
                              THIRD-PARTY SERVICES
                         </Heading>
                         <Text mb={5} fontSize="xl">
                              In general, the third-party providers used by us
                              will only collect, use and disclose your
                              information to the extent necessary to allow them
                              to perform the services they provide to us.
                         </Text>
                         <Text mb={5} fontSize="xl">
                              However, certain third-party service providers,
                              such as payment gateways and other payment
                              transaction processors, have their own privacy
                              policies in respect to the information we are
                              required to provide to them for your
                              purchase-related transactions.
                         </Text>
                         <Text mb={5} fontSize="xl">
                              For these providers, we recommend that you read
                              their privacy policies so you can understand the
                              manner in which your personal information will be
                              handled by these providers.
                         </Text>
                         <Text mb={5} fontSize="xl">
                              In particular, remember that certain providers may
                              be located in or have facilities that are located
                              in a different jurisdiction than either you or us.
                              So if you elect to proceed with a transaction that
                              involves the services of a third-party service
                              provider, then your information may become subject
                              to the laws of the jurisdiction(s) in which that
                              service provider or its facilities are located.
                         </Text>
                         <Text mb={5} fontSize="xl">
                              Once you leave our app or are
                              redirected to a third-party website or
                              application, you are no longer governed by this
                              Privacy Policy or our website’s Terms of Service.
                         </Text>
                         <Text mb={5} fontSize="xl" fontWeight="medium">
                              Links
                         </Text>
                         <Text mb={5} fontSize="xl">
                              When you click on links on our store, they may
                              direct you away from our app. We are not
                              responsible for the privacy practices of other
                              sites and encourage you to read their privacy
                              statements.
                         </Text>
                    </Box>
                    <Box width="100%" fontWeight="light" fontSize="lg">
                         <Heading
                              fontSize="2xl"
                              _after={{
                                   content: "''",
                                   display: 'block',
                                   width: '50px',
                                   height: '4px',
                                   background: 'aygreen.500',
                                   marginTop: '16px'
                              }}
                              mb={5}
                         >
                              SECURITY
                         </Heading>
                         <Text mb={5} fontSize="xl">
                              To protect your personal information, we take
                              reasonable precautions and follow industry best
                              practices to make sure it is not inappropriately
                              lost, misused, accessed, disclosed, altered or
                              destroyed.
                         </Text>
                    </Box>
                    <Box width="100%" fontWeight="light" fontSize="lg">
                         <Heading
                              fontSize="2xl"
                              _after={{
                                   content: "''",
                                   display: 'block',
                                   width: '50px',
                                   height: '4px',
                                   background: 'aygreen.500',
                                   marginTop: '16px'
                              }}
                              mb={5}
                         >
                              COOKIES
                         </Heading>
                         <Text mb={5} fontSize="xl">
                         We may use cookies to maintain your session within the app, but these are not used to personally identify you on other websites.
                         </Text>
                    </Box>
                    <Box width="100%" fontWeight="light" fontSize="lg">
                         <Heading
                              fontSize="2xl"
                              _after={{
                                   content: "''",
                                   display: 'block',
                                   width: '50px',
                                   height: '4px',
                                   background: 'aygreen.500',
                                   marginTop: '16px'
                              }}
                              mb={5}
                         >
                              AGE OF CONSENT
                         </Heading>
                         <Text mb={5} fontSize="xl">
                              By using our app, you represent that you are at
                              least the age of majority in your state or
                              province of residence, or that you are the age of
                              majority in your state or province of residence
                              and you have given us your consent to allow any of
                              your minor dependents to use this site.
                         </Text>
                    </Box>
                    <Box width="100%" fontWeight="light" fontSize="lg">
                         <Heading
                              fontSize="2xl"
                              _after={{
                                   content: "''",
                                   display: 'block',
                                   width: '50px',
                                   height: '4px',
                                   background: 'aygreen.500',
                                   marginTop: '16px'
                              }}
                              mb={5}
                         >
                              CHANGES TO THIS PRIVACY POLICY
                         </Heading>
                         <Text mb={5} fontSize="xl">
                              We reserve the right to modify this privacy policy
                              at any time , so please review it frequently.
                              Changes and clarifications will take effect
                              immediately upon posting on the app. If
                              we make material changes to this policy, we will
                              notify you here that it has been updated, so that
                              you are aware of what information we collect, how
                              we use it, and under what circumstances, if any,
                              we use and/or disclose it.
                         </Text>
                         <Text mb={5} fontSize="xl">
                              If our store is acquired or merged with another
                              company, your information may be transferred to
                              the new owners so that we may continue to sell
                              products to you.
                         </Text>
                    </Box>
                    <Box width="100%" fontWeight="light" fontSize="lg">
                         <Heading
                              fontSize="2xl"
                              _after={{
                                   content: "''",
                                   display: 'block',
                                   width: '50px',
                                   height: '4px',
                                   background: 'aygreen.500',
                                   marginTop: '16px'
                              }}
                              mb={5}
                         >
                              QUESTIONS AND CONTACT INFORMATION
                         </Heading>
                         <Text mb={5} fontSize="xl">
                              If you would like to: access, correct, amend or
                              delete any personal information we have about you,
                              register a complaint, or simply want more
                              information contact our Privacy Compliance Officer
                              at{' '}
                              <strong style={{ fontWeight: '500' }}>
                                   info@athayogliving.com{' '}
                              </strong>
                              {'  '}
                              or by mail at{' '}
                              <strong style={{ fontWeight: '500' }}>
                              No.3293, 1st floor, 12th main, HAL 2nd stage,
                                   Indiranagar, Bengaluru, Karnataka - 560038
                              </strong>
                         </Text>
                    </Box>
               </VStack>
               <Divider mt={10} />
          </Box>
     );
}

export default Privacy;
Privacy.Layout = HomeLayout;
