import {
     Box,
     Button,
     HStack,
     Skeleton,
     AlertDialog,
     AlertDialogBody,
     AlertDialogFooter,
     AlertDialogHeader,
     AlertDialogContent,
     AlertDialogOverlay,
     useToast,
     ButtonGroup,
     Badge,
     Stack,
     Center,
     Text,
     Spinner,
     useColorModeValue,
     Flex,
     Grid
} from '@chakra-ui/react';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import Image from 'next/image';
import { useState, useRef } from 'react';
import {
     FiCornerRightDown,
     FiCornerRightUp,
     FiFrown,
     FiTrash2
} from 'react-icons/fi';
import { useAuth } from '@/lib/auth';
import { deleteImage, updateImageStatus } from '@/lib/db/images';

const ImageGrid = ({ imageType, isMobile }) => {
     // Authenticated User
     const { user } = useAuth();
     //  ----------------------

     //  API Data

     const { data, error } =
          isMobile === 'mobile'
               ? useSWR(
                      user
                           ? [
                                  `/api/images/${imageType}?mobile=true`,
                                  user.token
                             ]
                           : null,
                      fetcher,
                      {
                           refreshInterval: 500
                      }
                 )
               : useSWR(
                      user
                           ? [
                                  `/api/images/${imageType}${
                                       isMobile === 'mobile'
                                            ? '?mobile=true'
                                            : ''
                                  }`,
                                  user.token
                             ]
                           : null,
                      fetcher,
                      {
                           refreshInterval: 500
                      }
                 );
     //  ----------------------

     //  Global Colors
     const borderColor = useColorModeValue('gray.200', 'gray.700');
     //  ----------------------

     //  Chakra UI Init
     const toast = useToast();
     //  ----------------------

     //  Custom App States
     const [isOpen, setIsOpen] = useState(false);
     const [isloading, setIsLoading] = useState(false);
     const [isActiveLoading, setIsActiveLoading] = useState({
          imageId: 'imageId',
          status: false
     });
     const [selectedImage, setSelectedImage] = useState({
          imageId: '',
          imageType: '',
          imageName: ''
     });
     //  ----------------------

     //  Custom App Functions
     const cancelRef = useRef();
     const onClose = () => setIsOpen(false);
     const setDeletedImage = (imageId, imageType, imageName) => {
          setIsOpen(true);
          setSelectedImage({
               imageId,
               imageType,
               imageName
          });
     };

     const deleteImageFirestore = async () => {
          setIsLoading(true);
          const { imageId, imageType, imageName } = selectedImage;
          const checkMobile = isMobile === 'mobile' ? true : false;
          await deleteImage(imageId, imageType, imageName, checkMobile)
               .then((response) => {
                    toast({
                         title: 'Image Deleted.',
                         description:
                              "We've have deleted the image from storage.",
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
               })
               .catch((error) => {
                    toast({
                         title: 'Something Happend.',
                         description: errror.message,
                         status: 'danger',
                         duration: 9000,
                         isClosable: true
                    });
               });
          setIsLoading(false);
          setIsOpen(false);
     };

     const changePublishStatus = async (imageId, status) => {
          const checkMobile = isMobile === 'mobile' ? true : false;
          setIsActiveLoading({ imageId: imageId, status: true });
          await updateImageStatus(imageId, !status, checkMobile);
          setIsActiveLoading({ imageId: imageId, status: false });
          toast({
               title: `Image ${!status ? 'Published' : 'Unpublished'}.`,
               description: `We've have ${
                    !status ? 'published' : 'unpublished'
               }. the image.`,
               status: 'success',
               duration: 9000,
               isClosable: true
          });
     };
     //  ----------------------

     //  API Change State
     if (error)
          return (
               <Center height="350px">
                    <FiFrown />
                    <Text ml={2}> Something Happend Try Again!</Text>
               </Center>
          );

     if (!data) {
          return (
               <Center height="350px">
                    <Spinner />
               </Center>
          );
     }

     if (data.images.length <= 0) {
          return (
               <Center height="350px">
                    <FiFrown />
                    <Text ml={2}> No Images Found. Upload one!</Text>
               </Center>
          );
     }

     return (
          <Box>
               <Grid
                    my={5}
                    gridGap={5}
                    width="100%"
                    flexWrap="wrap"
                    templateColumns={{
                         sm: 'repeat(auto-fit, minmax(200px,1fr))',
                         base: 'repeat(auto-fit, minmax(250px,1fr))',
                         md: 'repeat(auto-fit, minmax(250px,1fr))',
                         lg: 'repeat(auto-fit, minmax(250px,1fr))'
                    }}
               >
                    {data.images.length > 0 ? (
                         data.images.map((image) => {
                              return (
                                   <Box
                                        key={image.id}
                                        d="flex"
                                        flexDirection="column"
                                        alignItems="stretch"
                                        border="1px"
                                        borderColor={borderColor}
                                        rounded="lg"
                                        overflow="hidden"
                                        maxW="100%"
                                   >
                                        <Image
                                             src={image.imageUrl}
                                             key={image.id}
                                             height="250px"
                                             width="250px"
                                             objectFit="cover"
                                             border="none"
                                        />
                                        <Box px={4} py={4}>
                                             <Stack direction="row">
                                                  {image.isActive ? (
                                                       <Badge colorScheme="green">
                                                            Active
                                                       </Badge>
                                                  ) : (
                                                       <Badge colorScheme="gray">
                                                            InActive
                                                       </Badge>
                                                  )}
                                             </Stack>

                                             <ButtonGroup
                                                  size="sm"
                                                  width="100%"
                                                  pt={2}
                                                  variant="solid"
                                             >
                                                  <Button
                                                       colorScheme="red"
                                                       mt={3}
                                                       onClick={() =>
                                                            setDeletedImage(
                                                                 image.id,
                                                                 image.imageType,
                                                                 image.imageName
                                                            )
                                                       }
                                                       leftIcon={<FiTrash2 />}
                                                  >
                                                       Delete
                                                  </Button>
                                                  {image.isActive ? (
                                                       <Button
                                                            colorScheme="blue"
                                                            mt={3}
                                                            _active={{
                                                                 transform:
                                                                      'scale(0.95)'
                                                            }}
                                                            onClick={() =>
                                                                 changePublishStatus(
                                                                      image.id,
                                                                      image.isActive
                                                                 )
                                                            }
                                                            isLoading={
                                                                 isActiveLoading.imageId ===
                                                                 image.id
                                                                      ? isActiveLoading.status
                                                                      : false
                                                            }
                                                            leftIcon={
                                                                 <FiCornerRightDown />
                                                            }
                                                       >
                                                            Unpublish
                                                       </Button>
                                                  ) : (
                                                       <Button
                                                            colorScheme="green"
                                                            mt={3}
                                                            _active={{
                                                                 transform:
                                                                      'scale(0.95)'
                                                            }}
                                                            onClick={() =>
                                                                 changePublishStatus(
                                                                      image.id,
                                                                      image.isActive
                                                                 )
                                                            }
                                                            isLoading={
                                                                 isActiveLoading.imageId ===
                                                                 image.id
                                                                      ? isActiveLoading.status
                                                                      : false
                                                            }
                                                            leftIcon={
                                                                 <FiCornerRightUp />
                                                            }
                                                       >
                                                            Publish
                                                       </Button>
                                                  )}
                                             </ButtonGroup>
                                        </Box>
                                   </Box>
                              );
                         })
                    ) : (
                         <>
                              <Text>No Data</Text>
                         </>
                    )}
               </Grid>

               <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
               >
                    <AlertDialogOverlay>
                         <AlertDialogContent>
                              <AlertDialogHeader
                                   fontSize="lg"
                                   fontWeight="bold"
                              >
                                   Delete Image
                              </AlertDialogHeader>

                              <AlertDialogBody>
                                   Are you sure? You can't undo this action
                                   afterwards.
                              </AlertDialogBody>

                              <AlertDialogFooter>
                                   <Button
                                        size="sm"
                                        ref={cancelRef}
                                        onClick={onClose}
                                   >
                                        Cancel
                                   </Button>
                                   <Button
                                        colorScheme="red"
                                        isLoading={isloading}
                                        onClick={() => deleteImageFirestore()}
                                        ml={3}
                                        size="sm"
                                   >
                                        Delete
                                   </Button>
                              </AlertDialogFooter>
                         </AlertDialogContent>
                    </AlertDialogOverlay>
               </AlertDialog>
          </Box>
     );
};

export default ImageGrid;
