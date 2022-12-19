import { Grid } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function Gallery({ images }) {
     return (
          <div>
               <Grid gridTemplateColumns=" repeat(auto-fit, minmax(500px, 1fr))">
                    {' '}
                    {images.map((image) => {
                         return (
                              <Image
                                   key={image.id}
                                   placeholder="blur"
                                   blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
                                   layout="responsive"
                                   height="200"
                                   width="300"
                                   alt="IDY IMAGES"
                                   src={image.imageUrl}
                              />
                         );
                    })}
               </Grid>
          </div>
     );
}

export default Gallery;
