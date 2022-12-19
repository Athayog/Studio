import Gallery from '@/components/jayanti/Gallery';
import JayantiHero from '@/components/jayanti/JayantiHero';
import HomeLayout from '@/components/layout/HomeLayout';
import { Box } from '@chakra-ui/react';
import { getPlaiceholder } from 'plaiceholder';

export const getStaticProps = async () => {
     const imagePaths = [
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F288796974_520218189848299_6176589280401669977_n.jpg?alt=media&token=458ed03e-81bf-493e-9356-0ad913c2e666',

          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F289026287_520219753181476_448275034222452503_n.jpg?alt=media&token=3c6d606c-11a5-4b21-a2ee-fb7033cf6b76',

          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F289191983_520217903181661_7141037457741334647_n.jpg?alt=media&token=805d0bdd-e00b-40d8-b68d-452b86f31933',

          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F289329059_520218019848316_5309322960236158034_n.jpg?alt=media&token=dceb9867-b3e5-48a0-9d48-248854edeb5c',

          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F289503425_520217363181715_1019717573375665672_n.jpg?alt=media&token=8f325775-d6de-4d63-922c-4494f19359d5',

          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F289581053_520217863181665_3017915133278764722_n.jpg?alt=media&token=b81de9ba-5bc4-4730-803b-a3f22a163125',

          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F289593922_520217399848378_4449167734903602887_n.jpg?alt=media&token=6b162c29-8b6a-47ea-8352-7392530f94ea',

          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F290691168_520217969848321_5924281493344089850_n.jpg?alt=media&token=8007202f-a69a-4816-a125-ac332f3aadb4',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F290744278_520217336515051_9188597379435712362_n.jpg?alt=media&token=3e2aaea1-9d30-4c80-9eb6-a9af1443983b'
     ];

     const images = [];
     // const images = await Promise.all(
     //      imagePaths.map(async (src) => {
     //           const { blurhash, img } = await getPlaiceholder(src);

     //           return {
     //                ...img,
     //                alt: 'Paint Splashes',
     //                title: 'Photo from Unsplash',
     //                blurhash
     //           };
     //      })
     // ).then((values) => values);

     return {
          props: {
               images,
               title: 'Q',
               heading: 'Q'
          }
     };
};
function SwamiVivekanandaJayanti() {
     // console.log(images);
     return (
          <Box overflow="hidden">
               <JayantiHero />
               {/* <Gallery images={idyImages} /> */}
          </Box>
     );
}

export default SwamiVivekanandaJayanti;
SwamiVivekanandaJayanti.Layout = HomeLayout;
