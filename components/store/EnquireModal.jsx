import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  RadioGroup,
  Radio,
  HStack,
  Stack,
  Flex,
  useToast,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function EnquireModal({ product, colors }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    setIsLoading(true);
    fetch("https://formsubmit.co/ajax/info@athayogliving.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: "Athayog Store Enquiry About " + product.name,
        product: product.name,
        variant: values.variant,
        quantity: values.quantity,
        name: values.name,
        email: values.email,
        phone: values.phone,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast({
          title: "Enquiry Submitted",
          description: "Our team will reach out to you",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setIsLoading(false);
        handleClose();
      })
      .catch((error) => {
        toast({
          title: "Somethig went wrong",
          description: "Please try again",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setIsLoading(false);
        handleClose();
      });
  }

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        mt={10}
        variant="solid"
        colorScheme="green"
        width={{ base: "100%", sm: "100%", md: "100%", lg: "md" }}
      >
        ENQUIRE NOW
      </Button>
      <Modal isOpen={isOpen} onClose={() => handleClose()} isCentered>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{product.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={5}>
                {colors && (
                  <FormControl isInvalid={errors.variant}>
                    <FormLabel htmlFor="variant">Variant</FormLabel>
                    <Select
                      placeholder="Select option"
                      id="variant"
                      {...register("variant", {
                        required: "This is required",
                      })}
                    >
                      {colors.map((color, idx) => {
                        return (
                          <option key={idx} value={color.name}>
                            {color.name}
                          </option>
                        );
                      })}
                    </Select>
                    <FormErrorMessage>
                      {errors.variant && errors.variant.message}
                    </FormErrorMessage>
                  </FormControl>
                )}

                <FormControl isInvalid={errors.qty}>
                  <FormLabel htmlFor="qty ">Quantity</FormLabel>
                  <Input
                    id="qty"
                    type="number"
                    {...register("qty", {
                      required: "This is required",
                      message: "This is required",
                      min: { value: 1, message: "Minimum length should be 1" },
                      max: {
                        value: 99,
                        message: "Maximum length should be 99",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.qty && errors.qty.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    id="name"
                    type="text"
                    {...register("name", {
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 4",
                      },
                    })}
                  />
                </FormControl>
                <FormControl isInvalid={errors.email}>
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "This is required",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.phone}>
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <Input
                    id="phone"
                    type="text"
                    {...register("phone", {
                      required: "This is required",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.phone && errors.phone.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button
                isLoading={isLoading}
                variant="solid"
                type="submit"
                colorScheme="green"
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
