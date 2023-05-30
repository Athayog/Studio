import { Grid, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function ImageGallery() {
     const images = [
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/arambha%2FIDY_1.png?alt=media&token=1234b60f-8e99-4ed9-b147-298fad06fdc1',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/arambha%2FIDY_10.png?alt=media&token=e7ec05ce-b4f9-46d8-a8dc-0f57ab81ffe7',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/arambha%2FIDY_11.png?alt=media&token=368035a8-2076-4e07-a2f8-19e3f2788f23',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/arambha%2FIDY_12.png?alt=media&token=b2ce6e97-aa92-4959-93bb-38bea78178a4',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/arambha%2FIDY_13.png?alt=media&token=7b11e3eb-bd60-4289-8389-7625a27a4cd3',
          // 'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/arambha%2FIDY_14.png?alt=media&token=08a7962a-5f38-47ee-98df-4b59bed16422',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/arambha%2FIDY_15.png?alt=media&token=bd4367ab-b458-470d-8869-677271c03afc',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/arambha%2FIDY_2.png?alt=media&token=86a33d9c-ec62-4899-b075-4c9b025ab0c6',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/arambha%2FIDY_3.png?alt=media&token=e98a2524-6bc2-406b-8110-3d2628bab9ba',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/arambha%2FIDY_4.png?alt=media&token=d27b535a-00e9-421b-a486-6402c69e3707',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/arambha%2FIDY_5.png?alt=media&token=f5275006-e638-483e-9c34-3f591410c7c6',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/arambha%2FIDY_6.png?alt=media&token=32affa16-5550-421f-895f-75af1cf44f2e',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/arambha%2FIDY_7.png?alt=media&token=c5352c54-3e49-4f90-b4d2-ca48016090ff',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/arambha%2FIDY_8.png?alt=media&token=0f9dcb21-1fdf-4e7c-8722-35c5db59305a',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/arambha%2FIDY_9.png?alt=media&token=b83a93dd-7d16-438d-850a-c16a22b7bc71'
     ];
     return (
          <div>
               <Grid gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))">
                    {images.map((image, idx) => {
                         return (
                              <Image
                                   key={idx}
                                   layout="responsive"
                                   height={100}
                                   alt="yoga arambha event 2022"
                                   width={100}
                                   src={image}
                                   blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                                   placeholder="blur"
                              />
                         );
                    })}
               </Grid>
          </div>
     );
}

export default ImageGallery;
