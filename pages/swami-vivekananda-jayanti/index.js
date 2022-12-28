import EventRegister from '@/components/jayanti/EventRegister';
import Gallery from '@/components/jayanti/Gallery';
import JayantiHero from '@/components/jayanti/JayantiHero';
import HomeLayout from '@/components/layout/HomeLayout';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Script from 'next/script';

function SwamiVivekanandaJayanti() {
     const idyImages = [
          {
               id: '18Rra6p9GyaaThugkKqD',

               imageUrl:
                    'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F288796974_520218189848299_6176589280401669977_n.jpg?alt=media&token=458ed03e-81bf-493e-9356-0ad913c2e666'
          },
          {
               id: '8j50ZU2DkXJvMq91LwsR',

               imageUrl:
                    'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F289026287_520219753181476_448275034222452503_n.jpg?alt=media&token=3c6d606c-11a5-4b21-a2ee-fb7033cf6b76'
          },
          {
               id: 'HZ3YUR0qE1CerX2SRUL9',

               imageUrl:
                    'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F289191983_520217903181661_7141037457741334647_n.jpg?alt=media&token=805d0bdd-e00b-40d8-b68d-452b86f31933'
          },
          {
               id: 'L0C4ZbvAMamAK0aZ4HQb',

               imageUrl:
                    'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F289329059_520218019848316_5309322960236158034_n.jpg?alt=media&token=dceb9867-b3e5-48a0-9d48-248854edeb5c'
          },
          {
               id: 'OA1IUVEAkEEZwjh0NyMd',
               imageUrl:
                    'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F289503425_520217363181715_1019717573375665672_n.jpg?alt=media&token=8f325775-d6de-4d63-922c-4494f19359d5'
          },
          {
               id: 'PFuHBaBpr0o89ngsPvYP',

               imageUrl:
                    'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F289581053_520217863181665_3017915133278764722_n.jpg?alt=media&token=b81de9ba-5bc4-4730-803b-a3f22a163125'
          },
          {
               id: 'cRs2cnHN6Gl6E5U04iQ6',

               imageUrl:
                    'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F289593922_520217399848378_4449167734903602887_n.jpg?alt=media&token=6b162c29-8b6a-47ea-8352-7392530f94ea'
          },
          {
               id: 'drfn4DDTVLEIh5r5Vjp3',

               imageUrl:
                    'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F290691168_520217969848321_5924281493344089850_n.jpg?alt=media&token=8007202f-a69a-4816-a125-ac332f3aadb4'
          },

          {
               id: 'naZuVj3sTgGaWksns5Am',

               imageUrl:
                    'https://firebasestorage.googleapis.com/v0/b/authentication-test-7c342.appspot.com/o/gallery%2F289538217_520218813181570_6495305059650775859_n.jpg?alt=media&token=3d15a41e-78d4-43a5-87d9-4241afc911f2'
          },

          {
               id: 'roIzWNGFWPTgoWdipWDr',

               imageUrl:
                    'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/gallery%2F290744278_520217336515051_9188597379435712362_n.jpg?alt=media&token=3e2aaea1-9d30-4c80-9eb6-a9af1443983b'
          }
     ];

     const fbScript = () => {
          !(function (f, b, e, v, n, t, s) {
               if (f.fbq) return;
               n = f.fbq = function () {
                    n.callMethod
                         ? n.callMethod.apply(n, arguments)
                         : n.queue.push(arguments);
               };
               if (!f._fbq) f._fbq = n;
               n.push = n;
               n.loaded = !0;
               n.version = '2.0';
               n.queue = [];
               t = b.createElement(e);
               t.async = !0;
               t.src = v;
               s = b.getElementsByTagName(e)[0];
               s.parentNode.insertBefore(t, s);
          })(
               window,
               document,
               'script',
               'https://connect.facebook.net/en_US/fbevents.js'
          );
          fbq('init', '341795334013939');
          fbq('track', 'PageView');
     };
     return (
          <Box overflow="hidden">
               <Head>
                    <title>Swami Vivekananda Jayanti</title>
                    <meta
                         name="keywords"
                         content="swami vivekananda jayanti, national youth day, register, free registration, marathon, yogathon, cultural activities, chanting, pooja, yoga for differently abled, talent showcasing, swami vivekananda, free event"
                    ></meta>
               </Head>
               <Script id="page-view" src={fbScript}></Script>
               <noscript>
                    <img
                         height="1"
                         width="1"
                         src="https://www.facebook.com/tr?id=407786137819809&ev=PageView
                                   &noscript=1"
                    />
               </noscript>
               <JayantiHero images={idyImages} />
               <Gallery images={idyImages} />
          </Box>
     );
}

export default SwamiVivekanandaJayanti;
SwamiVivekanandaJayanti.Layout = HomeLayout;
