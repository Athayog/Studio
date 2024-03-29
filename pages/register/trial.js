import { capitalizeFirstLetter } from '@/components/helper/Capitalize';
import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { checkForTrial, registerFormTrial } from '@/lib/db/forms';
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
     Text,
     Textarea,
     useToast,
     chakra
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useReactToPrint } from 'react-to-print';
const dayjs = require('dayjs');

function Trial() {
     const [loading, setLoading] = useState(false);
     const { handleSubmit, register, errors, reset } = useForm();
     const [currentSchedule, setCurrentSchedule] = useState();
     const [selectedweek, setSelectedWeek] = useState();
     const [location, setLocation] = useState('Indiranagar');
     const [selectedDate, setSelectedDate] = useState();
     const [confirm, setConfirm] = useState(true);
     const [calendar, setCalendar] = useState([
          {
               id: 1,
               name: 'space',
               location: 'Indiranagar',
               times: [
                    {
                         time: '6:00 AM - 7:00 AM',
                         monday: 'Ashtanga Yoga',
                         tuesday: 'Universal Harmony',
                         wednesday: 'Transcending Transitions',
                         thursday: 'Sivananda Yoga',
                         friday: 'Rhythm Of Being',
                         saturday: 'Universal Harmony',
                         sunday: 'Transcending Transitions'
                    },

                    {
                         time: '7:00 AM - 8:00 AM',
                         monday: 'Transcending Transitions',
                         tuesday: 'Rhythm Of Being',
                         wednesday: 'Ashtanga Yoga',
                         thursday: 'Universal Harmony',
                         friday: 'Ashtanga Yoga',
                         saturday: 'Transcending Transitions',
                         sunday: 'Deep Space (Pranayama intensive)'
                    },
                    {
                         time: '8:00 AM - 9:00 AM',
                         monday: 'Deep Space (Pranayama intensive)',
                         tuesday: 'Ashtanga Yoga',
                         wednesday: 'Universal Harmony',
                         thursday: 'Rhythm Of Being',
                         friday: 'Transcending Transitions',
                         saturday: 'Ashtanga Yoga',
                         sunday: 'Rhythm Of Being'
                    },
                    {
                         time: '9:00 AM - 10:00 AM',
                         monday: 'Special Yoga for Women',
                         tuesday: 'Transcending Transitions',
                         wednesday: 'Rhythm Of Being',
                         thursday: 'Deep Space (Pranayama intensive)',
                         friday: 'Universal Harmony',
                         saturday: 'Rhythm Of Being',
                         sunday: 'Sivananda Yoga'
                    },
                    {
                         time: '10:00 AM - 11:00 AM',
                         monday: 'Prenatal Yoga - Week 4 - 15',
                         tuesday: 'Prenatal Yoga - Week 4 - 15',
                         wednesday: 'Prenatal Yoga - Week 4 - 15',
                         thursday: 'Prenatal Yoga - Week 4 - 15',
                         friday: 'Prenatal Yoga - Week 4 - 15',
                         saturday: 'No Class',
                         sunday: 'No Class'
                    },
                    {
                         time: '4:00 PM - 5:00 PM',
                         monday: 'Prenatal Yoga - Week 16 - 30',
                         tuesday: 'Prenatal Yoga - Week 16 - 30',
                         wednesday: 'Prenatal Yoga - Week 16 - 30',
                         thursday: 'Prenatal Yoga - Week 16 - 30',
                         friday: 'Prenatal Yoga - Week 16 - 30',
                         saturday: 'No Class',
                         sunday: 'No Class'
                    },
                    {
                         time: '5:00 PM - 6:00 PM',
                         monday: 'Deep Space (Pranayama intensive)',
                         tuesday: 'Rhythm Of Being',
                         wednesday: 'Universal Harmony',
                         thursday: 'Transcending Transitions',
                         friday: 'Universal Harmony',
                         saturday: 'Rhythm Of Being',
                         sunday: 'Sivananda Yoga'
                    },
                    {
                         time: '6:00 PM - 7:00 PM',
                         monday: 'Transcending Transitions',
                         tuesday: 'Deep Space (Pranayama intensive)',
                         wednesday: 'Rhythm Of Being',
                         thursday: 'Universal Harmony',
                         friday: 'Rhythm Of Being',
                         saturday: 'Sivananda Yoga',
                         sunday: 'Deep Space (Pranayama intensive)'
                    },
                    {
                         time: '7:00 PM - 8:00 PM',
                         monday: 'Inner World',
                         tuesday: 'Transcending Transitions',
                         wednesday: 'Universal Harmony',
                         thursday: 'Deep Space (Pranayama intensive)',
                         friday: 'Transcending Transitions',
                         saturday: 'Cyclic Meditation',
                         sunday: 'Transcending Transitions'
                    },
                    {
                         time: '8:00 PM - 9:00 PM',
                         monday: 'Rhythm Of Being',
                         tuesday: 'Cyclic Meditation',
                         wednesday: 'Rhythm Of Being',
                         thursday: 'Transcending Transitions',
                         friday: 'Inner World',
                         saturday: 'Rhythm Of Being',
                         sunday: 'OM Meditation'
                    }
               ]
          },

          {
               id: 2,
               name: 'Online',
               location: 'Online',
               times: [
                    {
                         time: '6:00 AM - 7:00 AM',
                         monday: 'Ashtanga Yoga',
                         tuesday: 'Universal Harmony',
                         wednesday: 'Transcending Transitions',
                         thursday: 'Sivananda Yoga',
                         friday: 'Rhythm Of Being',
                         saturday: 'Universal Harmony',
                         sunday: 'Transcending Transitions'
                    },

                    {
                         time: '9:00 AM - 10:00 AM',
                         monday: 'Transcending Transitions',
                         tuesday: 'Rhythm Of Being',
                         wednesday: 'Ashtanga Yoga',
                         thursday: 'Universal Harmony',
                         friday: 'Ashtanga Yoga',
                         saturday: 'Transcending Transitions',
                         sunday: 'Deep Space (Pranayama intensive)'
                    },

                    {
                         time: '5:00 PM - 6:00 PM',
                         monday: ' Transcending Transitions',
                         tuesday: 'Universal Harmony',
                         wednesday: 'Rhythm Of Being',
                         thursday: 'Transcending Transitions',
                         friday: 'Universal Harmony',
                         saturday: 'Rhythm Of Being',
                         sunday: ' Transcending Transitions'
                    }
               ]
          }
     ]);
     const [customer, setCustomer] = useState({});
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
          return dayjs().format('YYYY-MM-DD');
     }
     function tomorrow() {
          return dayjs().add(1, 'day').format('YYYY-MM-DD');
     }

     const submitForm = async ({
          name,
          email,
          phone,
          gender,
          experience,
          style,
          referral,
          conditions,
          date,
          selected_calendar,
          location
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
               conditions,
               date,
               selected_calendar,
               location
          });
          return;
     };
     const componentRef = useRef();
     const handlePrint = useReactToPrint({
          content: () => componentRef.current
     });

     let updatedValues;

     const submitWithoutPayment = async ({
          name,
          email,
          phone,
          gender,
          experience,
          style,
          referral,
          conditions,
          date,
          selected_calendar,
          location
     }) => {
          updatedValues = {
               name: name,
               email: email,
               date: date,
               selected_calendar: selected_calendar,
               location: location
          };

          await checkForTrial(email, phone)
               .then((response) => {
                    if (response.code == 200) {
                         postRegister(
                              name,
                              email,
                              phone,
                              gender,
                              experience,
                              style,
                              referral,
                              conditions,
                              date,
                              selected_calendar,
                              location
                         );
                    } else {
                         toast({
                              title: 'Cannot Register',
                              description: 'Already registered for trial class',
                              status: 'error',
                              duration: 5000,
                              isClosable: true
                         });
                         setLoading(false);
                         reset();
                    }
               })
               .catch((error) => {
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

     const postRegister = async (
          name,
          email,
          phone,
          gender,
          experience,
          style,
          referral,
          conditions,
          date,
          selected_calendar,
          location
     ) => {
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
               capitalizeFirstLetter('trial'),
               date,
               selected_calendar,
               location
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

                    sendCustomerEmail();
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
                              conditions: conditions.toString(),
                              date: date,
                              selected_class: selected_calendar,
                              location: location
                         })
                    });
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

     const sendCustomerEmail = async () => {
          setConfirm(false);
          setCustomer({
               name: updatedValues.name,
               date: updatedValues.date,
               selected_calendar: updatedValues.selected_calendar,
               location: updatedValues.location,
               email: updatedValues.email
          });
          await emailjs
               .send(
                    'service_5d1bzlp',
                    'template_mnbmufr',
                    {
                         name: updatedValues.name,
                         date: updatedValues.date,
                         selected_calendar: updatedValues.selected_calendar,
                         location: updatedValues.location,
                         email: updatedValues.email
                    },
                    'user_Zp6dTdYGxn4E5rxeiLLCh'
               )
               .then(
                    (result) => {
                         setLoading(false);
                         toast({
                              title: 'Success',
                              description:
                                   'A confirmation has been sent to your email',
                              status: 'success',
                              duration: 9000,
                              isClosable: true
                         });
                    },
                    (error) => {
                         setLoading(false);
                         console.log(error.text);
                    }
               );
     };
     function getWeekOfMonth(date) {
          const startWeekDayIndex = 1; // 1 MonthDay 0 Sundays
          const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
          const firstDay = firstDate.getDay();

          let weekNumber = Math.ceil((date.getDate() + firstDay) / 7);
          if (startWeekDayIndex === 1) {
               if (date.getDay() === 0 && date.getDate() > 1) {
                    weekNumber -= 1;
               }

               if (
                    firstDate.getDate() === 1 &&
                    firstDay === 0 &&
                    date.getDate() > 1
               ) {
                    weekNumber += 1;
               }
          }
          return weekNumber;
     }

     const onDateChange = (e) => {
          const todayWeek = weekdays[dayjs(e.target.value).day()];
          setSelectedWeek(todayWeek);

          getTodaysClass(todayWeek);
          let isSecond = getWeekOfMonth(new Date(e.target.value));
          if (isSecond == 2) {
               toast({
                    title: 'We are closed on this day',
                    description: 'We are closed on every second saturday',
                    status: 'warning',
                    duration: 5000,
                    isClosable: true
               });
               setLoading(false);
               reset();
          }
     };

     const onLocationChange = (e) => {
          setLocation(e.target.value);

          getTodaysClass(selectedweek, e.target.value);
     };

     const getTodaysClass = (week, paramLocation) => {
          const activeCalendar = calendar;
          let periods = [];

          let locationPassed =
               paramLocation !== undefined ? paramLocation : location;

          activeCalendar.map((data) => {
               if (data.location == locationPassed) {
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
          <Box bg="primaryWhite" minH="100vh">
               {confirm ? (
                    <>
                         <Box
                              exit={{ opacity: 0 }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              as="form"
                              onSubmit={handleSubmit((data) =>
                                   submitForm(data)
                              )}
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
                                        width={{
                                             base: '95%',
                                             md: '90%',
                                             lg: '75%'
                                        }}
                                        boxshadow="base"
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
                                                       <FormLabel>
                                                            Date
                                                       </FormLabel>
                                                       <Input
                                                            ref={register({
                                                                 required:
                                                                      'Please enter your name.'
                                                            })}
                                                            type="date"
                                                            name="date"
                                                            onChange={(e) =>
                                                                 onDateChange(e)
                                                            }
                                                            defaultValue={today()}
                                                            min={
                                                                 new Date()
                                                                      .toISOString()
                                                                      .split(
                                                                           'T'
                                                                      )[0]
                                                            }
                                                       />
                                                       <FormErrorMessage>
                                                            {errors.name &&
                                                                 errors.name
                                                                      .message}
                                                       </FormErrorMessage>
                                                  </FormControl>
                                                  <FormControl>
                                                       {' '}
                                                       <FormLabel>
                                                            Location
                                                       </FormLabel>
                                                       <Select
                                                            name="location"
                                                            id="location"
                                                            ref={register({
                                                                 required:
                                                                      'Please select your location.'
                                                            })}
                                                            onChange={(e) =>
                                                                 onLocationChange(
                                                                      e
                                                                 )
                                                            }
                                                       >
                                                            <option value="Indiranagar">
                                                                 Indiranagar
                                                            </option>

                                                            {/* <option value="Online">
                                                                 Online
                                                            </option> */}
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
                                                       <Select
                                                            name="selected_calendar"
                                                            id="selected_calendar"
                                                            ref={register({
                                                                 required:
                                                                      'Please select your schedule.'
                                                            })}
                                                       >
                                                            {currentSchedule && (
                                                                 <>
                                                                      {currentSchedule.map(
                                                                           (
                                                                                day,
                                                                                idx
                                                                           ) => {
                                                                                return (
                                                                                     <option
                                                                                          value={
                                                                                               day[0] +
                                                                                               '  -  ' +
                                                                                               day[1]
                                                                                          }
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
                                        width={{
                                             base: '95%',
                                             md: '90%',
                                             lg: '75%'
                                        }}
                                        boxshadow="base"
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
                                                                 errors.name
                                                                      .message}
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
                                                       <FormLabel>
                                                            Email
                                                       </FormLabel>
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
                                                       <FormLabel>
                                                            Gender
                                                       </FormLabel>
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
                                                            errors.style
                                                                 .message}
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
                                                            AthaYog Shikshana
                                                            Pada
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
                                                            errors.course
                                                                 .message}
                                                  </FormErrorMessage>
                                             </FormControl>
                                             <FormControl id="conditions">
                                                  <FormLabel>
                                                       Health and medical
                                                       conditions
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
                                                                 Spine/Joint
                                                                 Related
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
                                                            How did you hear
                                                            about us?
                                                       </FormLabel>
                                                       <RadioGroup defaultValue="Word of Mouth">
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
                                                                      ref={
                                                                           register
                                                                      }
                                                                 >
                                                                      Google
                                                                 </Radio>
                                                                 <Radio
                                                                      value="Facebook"
                                                                      name="referral"
                                                                      ref={
                                                                           register
                                                                      }
                                                                 >
                                                                      Facebook
                                                                 </Radio>
                                                                 <Radio
                                                                      value="Instagram"
                                                                      name="referral"
                                                                      ref={
                                                                           register
                                                                      }
                                                                 >
                                                                      Instagram
                                                                 </Radio>
                                                                 <Radio
                                                                      value="Word of Mouth"
                                                                      name="referral"
                                                                      ref={
                                                                           register
                                                                      }
                                                                 >
                                                                      Word of
                                                                      Mouth
                                                                 </Radio>
                                                                 <Radio
                                                                      value="Alumni "
                                                                      name="referral"
                                                                      ref={
                                                                           register
                                                                      }
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
                         </Box>
                    </>
               ) : (
                    <>
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
                              <Stack
                                   bg="white"
                                   maxW="md"
                                   mt={10}
                                   p={6}
                                   boxShadow="md"
                                   spacing={5}
                                   rounded="md"
                                   ref={componentRef}
                              >
                                   <Text fontSize="2xl" fontWeight="bold">
                                        Confirmation For Trial Class
                                   </Text>
                                   <Text>
                                        Hello{' '}
                                        <chakra.span fontWeight="medium">
                                             {' '}
                                             {customer.name},
                                        </chakra.span>
                                   </Text>
                                   <Text>
                                        {' '}
                                        You have successfully registred for a
                                        trial class from{' '}
                                        <chakra.span fontWeight="medium">
                                             Athayogliving on
                                        </chakra.span>{' '}
                                        on{' '}
                                        <chakra.span fontWeight="medium">
                                             {customer.date}
                                        </chakra.span>{' '}
                                        for{' '}
                                        <chakra.span fontWeight="medium">
                                             {customer.selected_calendar}{' '}
                                        </chakra.span>
                                        at{' '}
                                        <chakra.span fontWeight="medium">
                                             {customer.location}
                                        </chakra.span>
                                   </Text>
                                   <Text>
                                        {' '}
                                        Please show this ticket at the location
                                   </Text>
                                   <Text fontWeight="medium">
                                        {' '}
                                        Athayog Living.
                                   </Text>
                              </Stack>
                              <Button
                                   onClick={handlePrint}
                                   width="100%"
                                   maxW="md"
                                   mt={3}
                                   colorScheme="green"
                                   boxShadow="md"
                              >
                                   Download
                              </Button>
                              <Box
                                   maxW="md"
                                   bg="teal.50"
                                   mt={3}
                                   boxShadow="md"
                                   rounded="md"
                                   p={3}
                              >
                                   A confimration mail also has been sent to
                                   your email if not received please download
                                   this pdf from here
                              </Box>
                         </Flex>
                    </>
               )}
          </Box>
     );
}

export default Trial;
Trial.Layout = HomeLayout;
