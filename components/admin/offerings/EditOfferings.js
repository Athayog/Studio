import React, { useState } from 'react';
import {
     Modal,
     ModalOverlay,
     ModalContent,
     ModalHeader,
     ModalFooter,
     ModalBody,
     ModalCloseButton,
     useDisclosure,
     Button,
     FormControl,
     FormLabel,
     Input,
     FormHelperText,
     Stack,
     Select,
     FormErrorMessage,
     Box,
     useColorModeValue,
     Textarea,
     NumberInput,
     NumberInputField,
     Checkbox,
     HStack,
     Switch,
     RadioGroup,
     Radio,
     useToast
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { updateOffering } from '@/lib/db/offerings';
// import { createFaq } from '@/lib/db';

const EditOfferings = ({
     type,
     id,
     ogName,
     ogDescription,
     ogDays,
     ogPrice,
     ogIsTrial
}) => {
     const { isOpen, onOpen, onClose } = useDisclosure();
     const [trial, setTrial] = useState(ogIsTrial);
     const [loading, setLoading] = useState(false);
     const toast = useToast();

     const { handleSubmit, register, errors } = useForm();
     const bg = useColorModeValue('white', 'gray.800');

     const setTrialChange = () => {
          setTrial(!trial);
     };

     const onCreateOffering = async ({ name, description, days, price }) => {
          setLoading(true);
          console.log(id, name, description, days, price, trial, type);
          await updateOffering(id, name, description, days, price, trial, type)
               .then((response) => {
                    toast({
                         title: 'Offer Updated',
                         description:
                              "We've have updated the offerings and it's live.",
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
                    setLoading(false);
               })
               .catch((error) => {
                    toast({
                         title: 'Something Happend',
                         description: error.message,
                         status: 'error',
                         duration: 9000,
                         isClosable: true
                    });
                    setLoading(false);
               });
     };

     return (
          <>
               <Button onClick={onOpen} size="sm" colorScheme="teal">
                    Edit
               </Button>

               <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent
                         onSubmit={handleSubmit((data) =>
                              onCreateOffering(data)
                         )}
                         as="form"
                    >
                         <ModalHeader>Edit Offering</ModalHeader>
                         <ModalCloseButton />
                         <ModalBody>
                              <Stack spacing={5}>
                                   <FormControl id="name">
                                        <FormLabel>Name</FormLabel>
                                        <Input
                                             type="text"
                                             aria-label="name"
                                             defaultValue={ogName}
                                             name="name"
                                             ref={register({
                                                  required:
                                                       'Please enter the name.'
                                             })}
                                        />

                                        <FormErrorMessage>
                                             {errors.name &&
                                                  errors.name.message}
                                        </FormErrorMessage>
                                   </FormControl>
                                   <FormControl id="description">
                                        <FormLabel>Description</FormLabel>
                                        <Textarea
                                             name="description"
                                             defaultValue={ogDescription}
                                             ref={register({
                                                  required:
                                                       'Please enter the description.'
                                             })}
                                        />

                                        <FormErrorMessage>
                                             {errors.description &&
                                                  errors.description.message}
                                        </FormErrorMessage>
                                   </FormControl>
                                   <HStack alignItems="start">
                                        {' '}
                                        <FormControl id="days">
                                             <FormLabel>Days</FormLabel>
                                             <NumberInput defaultValue={ogDays}>
                                                  <NumberInputField
                                                       name="days"
                                                       ref={register({
                                                            required:
                                                                 'Please enter the days.'
                                                       })}
                                                  />
                                             </NumberInput>

                                             <FormErrorMessage>
                                                  {errors.days &&
                                                       errors.days.message}
                                             </FormErrorMessage>
                                        </FormControl>
                                        <FormControl id="price">
                                             <FormLabel>Price</FormLabel>
                                             <NumberInput
                                                  defaultValue={Number(ogPrice)}
                                             >
                                                  <NumberInputField
                                                       name="price"
                                                       ref={register({
                                                            required:
                                                                 'Please enter the price.'
                                                       })}
                                                  />
                                             </NumberInput>

                                             <FormErrorMessage>
                                                  {errors.price &&
                                                       errors.price.message}
                                             </FormErrorMessage>
                                        </FormControl>
                                   </HStack>
                                   <FormControl id="isTrial">
                                        <FormLabel>Is it Trial?</FormLabel>
                                        <Switch
                                             name="isTrial"
                                             isChecked={trial}
                                             onChange={(e) => setTrialChange()}
                                        />
                                   </FormControl>
                              </Stack>
                         </ModalBody>

                         <ModalFooter>
                              <Button
                                   colorScheme="blue"
                                   mr={3}
                                   onClick={onClose}
                              >
                                   Close
                              </Button>
                              <Button
                                   isLoading={loading}
                                   variant="solid"
                                   colorScheme="teal"
                                   type="submit"
                              >
                                   Create
                              </Button>
                         </ModalFooter>
                    </ModalContent>
               </Modal>
          </>
     );
};

export default EditOfferings;
