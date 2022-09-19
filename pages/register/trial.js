import { capitalizeFirstLetter } from '@/components/helper/Capitalize';
import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { registerFormTrial } from '@/lib/db/forms';
import {
     Box,
     Button,
     Checkbox,
     CheckboxGroup,
     Divider,
     Flex,
     FormControl,
     FormErrorMessage,
     FormLabel,
     Heading,
     Input,
     Radio,
     RadioGroup,
     Select,
     SimpleGrid,
     Stack,
     Textarea,
     useToast
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
const dayjs = require('dayjs');

function Trial() {
     const [loading, setLoading] = useState(false);
     const { handleSubmit, register, errors, reset } = useForm();
     const [currentSchedule, setCurrentSchedule] = useState();
     const [selectedweek, setSelectedWeek] = useState();
     const [location, setLocation] = useState('Indiranagar');
     const [selectedDate, setSelectedDate] = useState();
     const [calendar, setCalendar] = useState([
          {
               id: 1,
               name: 'space',
               location: 'Indiranagar',
               times: [
                    {
                         time: '6:00 AM - 7:00 AM',
                         monday: 'Rythm Of Being',
                         tuesday: 'Universal Harmony',
                         wednesday: 'Transcending Transition',
                         thursday: 'Rythm Of Being',
                         friday: 'Universal Harmony',
                         saturday: 'No Class',
                         sunday: 'No Class'
                    },
                    {
                         time: '7:00 AM - 8:00 AM',
                         monday: 'Universal Harmony',
                         tuesday: 'Transcending Transition',
                         wednesday: 'Rythm Of Being',
                         thursday: 'Universal Harmony',
                         friday: 'Transcending Transition',
                         saturday: 'Universal Harmony',
                         sunday: 'Rythm Of Being'
                    },
                    {
                         time: '8:00 AM - 9:00 AM',
                         monday: 'Transcending Transition',
                         tuesday: 'Rythm Of Being',
                         wednesday: 'Universal Harmony',
                         thursday: 'Rythm Of Being',
                         friday: 'Universal Harmony',
                         saturday: 'Transcending Transition',
                         sunday: 'Universal Harmony'
                    },
                    {
                         time: '9:00 AM - 10:00 AM',
                         monday: 'Universal Harmony',
                         tuesday: 'Transcending Transition',
                         wednesday: 'Rythm Of Being',
                         thursday: 'Universal Harmony',
                         friday: 'Transcending Transition',
                         saturday: 'Universal Harmony',
                         sunday: 'Rythm Of Being'
                    },
                    {
                         time: '11:00 AM - 4:00 PM',
                         monday: 'Shikshanapada',
                         tuesday: 'Rythm Of Being',
                         wednesday: 'Universal Harmony',
                         thursday: 'Rythm Of Being',
                         friday: 'Universal Harmony',
                         saturday: 'Transcending Transition',
                         sunday: 'Universal Harmony'
                    },
                    {
                         time: '5:00 PM - 6:00 PM',
                         monday: 'Kids Yoga',
                         tuesday: 'Kids Yoga',
                         wednesday: 'Kids Yoga',
                         thursday: 'Kids Yoga',
                         friday: 'Kids Yoga',
                         saturday: 'Kids Yoga',
                         sunday: 'Kids Yoga'
                    },
                    {
                         time: '6:00 PM - 7:00 PM',
                         monday: 'Universal Harmony',
                         tuesday: 'Transcending Transition',
                         wednesday: 'YIN Yoga',
                         thursday: 'Rythm Of Being',
                         friday: 'Rythm Of Being',
                         saturday: 'No Class',
                         sunday: 'No Class'
                    }
               ]
          },
          {
               id: 2,
               name: 'space',
               location: 'KR Puram',
               times: [
                    {
                         time: '6:00 AM - 7:00 AM',
                         monday: 'Universal Harmony',
                         tuesday: 'Universal Harmony',
                         wednesday: 'Transcending Transition',
                         thursday: 'Rythm Of Being',
                         friday: 'Universal Harmony',
                         saturday: 'No Class',
                         sunday: 'No Class'
                    },
                    {
                         time: '7:00 AM - 8:00 AM',
                         monday: 'Universal Harmony',
                         tuesday: 'Transcending Transition',
                         wednesday: 'Rythm Of Being',
                         thursday: 'Universal Harmony',
                         friday: 'Transcending Transition',
                         saturday: 'Universal Harmony',
                         sunday: 'Rythm Of Being'
                    },
                    {
                         time: '8:00 AM - 9:00 AM',
                         monday: 'Transcending Transition',
                         tuesday: 'Rythm Of Being',
                         wednesday: 'Universal Harmony',
                         thursday: 'Rythm Of Being',
                         friday: 'Universal Harmony',
                         saturday: 'Transcending Transition',
                         sunday: 'Universal Harmony'
                    },
                    {
                         time: '9:00 AM - 10:00 AM',
                         monday: 'Universal Harmony',
                         tuesday: 'Transcending Transition',
                         wednesday: 'Rythm Of Being',
                         thursday: 'Universal Harmony',
                         friday: 'Transcending Transition',
                         saturday: 'Universal Harmony',
                         sunday: 'Rythm Of Being'
                    },
                    {
                         time: '11:00 AM - 4:00 PM',
                         monday: 'Shikshanapada',
                         tuesday: 'Rythm Of Being',
                         wednesday: 'Universal Harmony',
                         thursday: 'Rythm Of Being',
                         friday: 'Universal Harmony',
                         saturday: 'Transcending Transition',
                         sunday: 'Universal Harmony'
                    },
                    {
                         time: '5:00 PM - 6:00 PM',
                         monday: 'Kids Yoga',
                         tuesday: 'Kids Yoga',
                         wednesday: 'Kids Yoga',
                         thursday: 'Kids Yoga',
                         friday: 'Kids Yoga',
                         saturday: 'Kids Yoga',
                         sunday: 'Kids Yoga'
                    },
                    {
                         time: '6:00 PM - 7:00 PM',
                         monday: 'Universal Harmony',
                         tuesday: 'Transcending Transition',
                         wednesday: 'YIN Yoga',
                         thursday: 'Rythm Of Being',
                         friday: 'Rythm Of Being',
                         saturday: 'No Class',
                         sunday: 'No Class'
                    }
               ]
          },
          {
               id: 3,
               name: 'online',
               location: 'Online',
               times: [
                    {
                         time: '6:00 AM - 7:00 AM',
                         monday: 'Transcending Transition',
                         tuesday: 'Universal Harmony',
                         wednesday: 'Transcending Transition',
                         thursday: 'Rythm Of Being',
                         friday: 'Universal Harmony',
                         saturday: 'No Class',
                         sunday: 'No Class'
                    },

                    {
                         time: '8:00 AM - 9:00 AM',
                         monday: 'Transcending Transition',
                         tuesday: 'Rythm Of Being',
                         wednesday: 'Universal Harmony',
                         thursday: 'Rythm Of Being',
                         friday: 'Universal Harmony',
                         saturday: 'Transcending Transition',
                         sunday: 'Universal Harmony'
                    },

                    {
                         time: '4:00 PM - 5:00 PM',
                         monday: 'Kids Yoga',
                         tuesday: 'Kids Yoga',
                         wednesday: 'Kids Yoga',
                         thursday: 'Kids Yoga',
                         friday: 'Kids Yoga',
                         saturday: 'Kids Yoga',
                         sunday: 'Kids Yoga'
                    },
                    {
                         time: '5:00 PM - 6:00 PM',
                         monday: 'Universal Harmony',
                         tuesday: 'Transcending Transition',
                         wednesday: 'YIN Yoga',
                         thursday: 'Rythm Of Being',
                         friday: 'Rythm Of Being',
                         saturday: 'No Class',
                         sunday: 'No Class'
                    }
               ]
          }
     ]);
     const toast = useToast();
     const router = useRouter();
     const weekdays = [
          'sunday',
          'monday',
          'tuesday',
          'wednesday',
          'thursday',
          'friday',
          'saturday'
     ];
     function today() {
          return new Date();
     }
     function tomorrow() {
          return dayjs().add(1, 'day').format('YYYY-MM-DD');
     }

     console.log(tomorrow());
     const submitForm = async ({
          name,
          email,
          phone,
          gender,
          experience,
          style,
          referral,
          conditions
     }) => {
          setLoading(true);
          submitWithoutPayment({
               name,
               email,
               phone,
               gender,
               experience,
               style,
               referral,
               conditions
          });
          return;
     };

     const submitWithoutPayment = async ({
          name,
          email,
          phone,
          gender,
          experience,
          style,
          referral,
          conditions
     }) => {
          setLoading(true);
          await registerFormTrial(
               name,
               email,
               phone,
               gender,
               experience,
               style,
               capitalizeFirstLetter('trial'),
               referral,
               conditions,
               capitalizeFirstLetter('trial')
          )
               .then((response) => {
                    reset();
                    toast({
                         title: 'Successfully Submitted.',
                         description: 'We will reach back to you soon :)',
                         status: 'success',
                         duration: 5000,
                         isClosable: true
                    });
                    // Send Email
                    fetch('https://formsubmit.co/ajax/info@athayogliving.com', {
                         method: 'POST',
                         headers: {
                              'Content-Type': 'application/json',
                              Accept: 'application/json'
                         },
                         body: JSON.stringify({
                              FormType: 'Trial Form',
                              name: name,
                              email: email,
                              phone: phone,
                              gender: gender,
                              experience: experience,
                              style: style,

                              referral: referral,
                              conditions: conditions.toString()
                         })
                    });
                    router.push('/');
               })
               .catch((error) => {
                    setLoading(false);
                    toast({
                         title: 'An error occurred.',
                         description: error.message,
                         status: 'error',
                         duration: 5000,
                         isClosable: true
                    });
                    setLoading(false);
                    reset();
               });
     };

     const onDateChange = (e) => {
          const todayWeek = weekdays[dayjs(e.target.value).day()];
          setSelectedWeek(todayWeek);

          getTodaysClass(todayWeek);
     };

     const onLocationChange = (e) => {
          setLocation(e.target.value);
          console.log(e.target.value);
          getTodaysClass(selectedweek, e.target.value);
     };

     const getTodaysClass = (week, paramLocation) => {
          const activeCalendar = calendar;
          let periods = [];

          let locationPassed =
               paramLocation !== undefined ? paramLocation : location;

          activeCalendar.map((data) => {
               if (data.location == locationPassed) {
                    console.log(data.location, locationPassed);

                    data.times.map((each) => {
                         if (each[week] !== 'No Class') {
                              periods.push([each.time, each[week]]);
                         }
                    });
               }
          });

          setCurrentSchedule(periods);
     };

     const capitalizeFirstLowercaseRest = (str) => {
          return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
     };
     useEffect(() => {
          const todayWeek = weekdays[dayjs().day()];
          setSelectedWeek(todayWeek);
          getTodaysClass(todayWeek);
     }, []);

     return (
          <div>
               {' '}
               <>
                    <motion.div
                         exit={{ opacity: 0 }}
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                    >
                         <NavbarHelper />

                         <Flex
                              justifyContent="center"
                              alignItems="center"
                              height="100%"
                              bg="primaryWhite"
                              padding={{
                                   base: '2rem 0',
                                   md: '3rem 0',
                                   lg: '5rem 0'
                              }}
                              flexDirection="column"
                         >
                              <Heading
                                   fontWeight="normal"
                                   fontSize={{
                                        base: '2xl',
                                        md: '2xl',
                                        lg: '4xl'
                                   }}
                              >
                                   Register For Trial Classes
                              </Heading>
                              <Box
                                   bg="white"
                                   rounded="lg"
                                   textAlign="center"
                                   mt={{ base: 2, md: 5, lg: 10 }}
                                   padding={8}
                                   width={{ base: '95%', md: '90%', lg: '75%' }}
                                   as="form"
                                   boxshadow="base"
                                   onSubmit={handleSubmit((data) =>
                                        submitForm(data)
                                   )}
                              >
                                   <Stack spacing={5}>
                                        <SimpleGrid
                                             minChildWidth={{
                                                  base: '200px',
                                                  md: '300px',
                                                  lg: '400px'
                                             }}
                                             spacing="20px"
                                             width="100%"
                                        >
                                             <FormControl id="date">
                                                  <FormLabel>Date</FormLabel>
                                                  <Input
                                                       type="date"
                                                       name="date"
                                                       onChange={(e) =>
                                                            onDateChange(e)
                                                       }
                                                       value={tomorrow()}
                                                       min={
                                                            new Date()
                                                                 .toISOString()
                                                                 .split('T')[0]
                                                       }
                                                  />
                                                  <FormErrorMessage>
                                                       {errors.name &&
                                                            errors.name.message}
                                                  </FormErrorMessage>
                                             </FormControl>
                                             <FormControl>
                                                  {' '}
                                                  <FormLabel>
                                                       Location
                                                  </FormLabel>
                                                  <Select
                                                       onChange={(e) =>
                                                            onLocationChange(e)
                                                       }
                                                  >
                                                       <option value="Indiranagar">
                                                            Indiranagar
                                                       </option>
                                                       <option value="KR Puram">
                                                            KR Puram
                                                       </option>
                                                       <option value="Online">
                                                            Online
                                                       </option>
                                                  </Select>
                                             </FormControl>
                                             <FormControl>
                                                  <FormLabel>
                                                       Classes On{' '}
                                                       {capitalizeFirstLowercaseRest(
                                                            selectedweek
                                                                 ? selectedweek
                                                                 : 'monday'
                                                       )}
                                                  </FormLabel>
                                                  <Select>
                                                       {currentSchedule && (
                                                            <>
                                                                 {currentSchedule.map(
                                                                      (
                                                                           day,
                                                                           idx
                                                                      ) => {
                                                                           return (
                                                                                <option
                                                                                     key={
                                                                                          idx
                                                                                     }
                                                                                >
                                                                                     {day[0] +
                                                                                          '  -  ' +
                                                                                          day[1]}
                                                                                </option>
                                                                           );
                                                                      }
                                                                 )}
                                                            </>
                                                       )}
                                                  </Select>
                                             </FormControl>
                                        </SimpleGrid>
                                   </Stack>
                              </Box>
                              <Box
                                   bg="white"
                                   rounded="lg"
                                   textAlign="center"
                                   mt={{ base: 2, md: 5, lg: 10 }}
                                   padding={8}
                                   width={{ base: '95%', md: '90%', lg: '75%' }}
                                   as="form"
                                   boxshadow="base"
                                   onSubmit={handleSubmit((data) =>
                                        submitForm(data)
                                   )}
                              >
                                   <Stack spacing={5}>
                                        <SimpleGrid
                                             minChildWidth={{
                                                  base: '200px',
                                                  md: '300px',
                                                  lg: '400px'
                                             }}
                                             spacing="20px"
                                             width="100%"
                                        >
                                             <FormControl id="name">
                                                  <FormLabel>
                                                       Full Name
                                                  </FormLabel>
                                                  <Input
                                                       type="name"
                                                       name="name"
                                                       ref={register({
                                                            required:
                                                                 'Please enter your name.'
                                                       })}
                                                  />
                                                  <FormErrorMessage>
                                                       {errors.name &&
                                                            errors.name.message}
                                                  </FormErrorMessage>
                                             </FormControl>
                                             <FormControl id="phone">
                                                  <FormLabel>
                                                       Phone Number
                                                  </FormLabel>
                                                  <Input
                                                       type="number"
                                                       name="phone"
                                                       ref={register({
                                                            required:
                                                                 'Please enter your number.'
                                                       })}
                                                  />
                                                  <FormErrorMessage>
                                                       {errors.phone &&
                                                            errors.phone
                                                                 .message}
                                                  </FormErrorMessage>
                                             </FormControl>
                                             <FormControl id="email">
                                                  <FormLabel>Email</FormLabel>
                                                  <Input
                                                       type="email"
                                                       name="email"
                                                       ref={register({
                                                            required:
                                                                 'Please enter your email.'
                                                       })}
                                                  />
                                                  <FormErrorMessage>
                                                       {errors.email &&
                                                            errors.email
                                                                 .message}
                                                  </FormErrorMessage>
                                             </FormControl>
                                             <FormControl id="gender">
                                                  <FormLabel>Gender</FormLabel>
                                                  <Select
                                                       placeholder="Select option"
                                                       name="gender"
                                                       ref={register({
                                                            required:
                                                                 'Please select your gender.'
                                                       })}
                                                  >
                                                       <option value="Male">
                                                            Male
                                                       </option>
                                                       <option value="Female">
                                                            Female
                                                       </option>
                                                       <option value="Other">
                                                            Other
                                                       </option>
                                                  </Select>
                                                  <FormErrorMessage>
                                                       {errors.gender &&
                                                            errors.gender
                                                                 .message}
                                                  </FormErrorMessage>
                                             </FormControl>
                                        </SimpleGrid>
                                        <FormControl id="experience">
                                             <FormLabel>
                                                  Previous yoga experience
                                             </FormLabel>
                                             <Textarea
                                                  name="experience"
                                                  ref={register({
                                                       required:
                                                            'Please fill your yoga experience.'
                                                  })}
                                             />
                                             <FormErrorMessage>
                                                  {errors.experience &&
                                                       errors.experience
                                                            .message}
                                             </FormErrorMessage>
                                        </FormControl>
                                        <FormControl id="style">
                                             <FormLabel>
                                                  Style of yoga
                                             </FormLabel>
                                             <Textarea
                                                  name="style"
                                                  ref={register({
                                                       required:
                                                            'Please fill your style of yoga.'
                                                  })}
                                             />
                                             <FormErrorMessage>
                                                  {errors.style &&
                                                       errors.style.message}
                                             </FormErrorMessage>
                                        </FormControl>
                                        <Divider
                                             variant="dashed"
                                             colorScheme="blue"
                                             width="100%"
                                        />

                                        <FormControl id="course">
                                             <FormLabel>
                                                  Course Interested
                                             </FormLabel>
                                             <Select
                                                  placeholder="Select a option"
                                                  ref={register({
                                                       required:
                                                            'Please select your course.'
                                                  })}
                                                  name="course"
                                                  isReadOnly
                                                  value={capitalizeFirstLetter(
                                                       'trial'
                                                  )}
                                                  disabled
                                             >
                                                  <option value="Space">
                                                       AthaYog Space
                                                  </option>
                                                  <option value="Shikshana Pada">
                                                       AthaYog Shikshana Pada
                                                  </option>
                                                  <option value="Chikitsa">
                                                       AthaYog Chikitsa
                                                  </option>
                                                  <option value="Online">
                                                       AthaYog Online
                                                  </option>
                                                  <option value="Personal">
                                                       AthaYog Personal
                                                  </option>
                                                  <option value="Workshops">
                                                       AthaYog Workshops
                                                  </option>
                                                  <option value="Onsite">
                                                       AthaYog Onsite
                                                  </option>
                                                  <option value="Trial">
                                                       Free Trial
                                                  </option>
                                             </Select>
                                             <FormErrorMessage>
                                                  {errors.course &&
                                                       errors.course.message}
                                             </FormErrorMessage>
                                        </FormControl>
                                        <FormControl id="conditions">
                                             <FormLabel>
                                                  Health and medical conditions
                                             </FormLabel>
                                             <CheckboxGroup
                                                  colorScheme="green"
                                                  defaultValue={[
                                                       'Spine/Joint',
                                                       'Heart',
                                                       'Neurological/Psychological',
                                                       'Others'
                                                  ]}
                                                  name="conditions"
                                             >
                                                  <Stack
                                                       direction={{
                                                            base: 'column',
                                                            md: 'column',
                                                            lg: 'row'
                                                       }}
                                                  >
                                                       <Checkbox
                                                            value="Spine/Joint"
                                                            name="conditions"
                                                            ref={register}
                                                       >
                                                            Spine/Joint Related
                                                       </Checkbox>
                                                       <Checkbox
                                                            value="Heart"
                                                            name="conditions"
                                                            ref={register}
                                                       >
                                                            Heart Related
                                                       </Checkbox>
                                                       <Checkbox
                                                            value="Neurological/Psychological"
                                                            name="conditions"
                                                            ref={register}
                                                       >
                                                            Neurological/Psychological
                                                       </Checkbox>
                                                       <Checkbox
                                                            value="Others"
                                                            name="conditions"
                                                            ref={register}
                                                       >
                                                            Others
                                                       </Checkbox>
                                                  </Stack>
                                             </CheckboxGroup>
                                             <FormErrorMessage>
                                                  {errors.conditions &&
                                                       errors.conditions
                                                            .message}
                                             </FormErrorMessage>
                                        </FormControl>

                                        <SimpleGrid
                                             minChildWidth="400px"
                                             spacing="20px"
                                             width="100%"
                                        >
                                             <FormControl id="referral">
                                                  <FormLabel>
                                                       How did you hear about
                                                       us?
                                                  </FormLabel>
                                                  <RadioGroup>
                                                       <Stack
                                                            direction={{
                                                                 base: 'column',
                                                                 md: 'column',
                                                                 lg: 'row'
                                                            }}
                                                       >
                                                            <Radio
                                                                 value="Google"
                                                                 name="referral"
                                                                 ref={register}
                                                            >
                                                                 Google
                                                            </Radio>
                                                            <Radio
                                                                 value="Facebook"
                                                                 name="referral"
                                                                 ref={register}
                                                            >
                                                                 Facebook
                                                            </Radio>
                                                            <Radio
                                                                 value="Instagram"
                                                                 name="referral"
                                                                 ref={register}
                                                            >
                                                                 Instagram
                                                            </Radio>
                                                            <Radio
                                                                 value=" Word of Mouth"
                                                                 name="referral"
                                                                 ref={register}
                                                            >
                                                                 Word of Mouth
                                                            </Radio>
                                                            <Radio
                                                                 value="Alumni "
                                                                 name="referral"
                                                                 ref={register}
                                                            >
                                                                 Alumni
                                                            </Radio>
                                                       </Stack>
                                                  </RadioGroup>
                                                  <FormErrorMessage>
                                                       {errors.referral &&
                                                            errors.referral
                                                                 .message}
                                                  </FormErrorMessage>
                                             </FormControl>
                                        </SimpleGrid>
                                   </Stack>
                                   <Button
                                        colorScheme="aygreen"
                                        mt={10}
                                        ml="auto"
                                        type="submit"
                                        isLoading={loading}
                                        loadingText="Submitting"
                                   >
                                        Register
                                   </Button>
                              </Box>
                         </Flex>
                    </motion.div>
               </>
          </div>
     );
}

export default Trial;
Trial.Layout = HomeLayout;
