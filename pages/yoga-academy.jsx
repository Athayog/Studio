import Hero from '@/components/lakshayan/Hero';
import HomeLayout from '@/components/layout/HomeLayout';

function YogaAcademy() {
     const images = [
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_1.jpg?alt=media&token=a1e26fd3-48cc-475c-ab4c-3acd06707a69',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_10.jpg?alt=media&token=3c64db9f-7f4f-47b4-acbd-c66203c51d4d',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_2.jpg?alt=media&token=65ba3605-486f-4055-a821-46ad3a06d276',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_3.jpg?alt=media&token=aaba99a7-41af-4abe-bd77-0f08dba2a871',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_4.jpg?alt=media&token=6c8c03e2-673f-480b-9652-c5b4226b54db',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_5.jpg?alt=media&token=79424732-3f5d-4d32-8d5a-8c384c6093f4',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_6.jpg?alt=media&token=147eaabc-e8c2-4246-b816-f59efe14378c',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_7.jpg?alt=media&token=40b0bdf9-5571-4568-8313-b30dcac2b7e0',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_8.jpg?alt=media&token=6ee9d17b-4fcb-479a-86cb-5ba64506a678',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_9.jpg?alt=media&token=e9f7c68d-c154-466c-a91f-b25284e6ad84'
     ];
     return (
          <section>
               <Hero heroImage={images[1]} />
          </section>
     );
}
export default YogaAcademy;
YogaAcademy.Layout = HomeLayout;
