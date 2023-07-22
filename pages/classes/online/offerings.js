import Navbar from '@/components/home/Navbar';
import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import Pricing from '@/components/shared/Pricing';
import { getOffer } from '@/lib/db/offerings';

export async function getStaticProps(context) {
     const { offers } = await getOffer('online');

     if (!offers) {
          return {
               notFound: true
          };
     }

     return {
          props: {
               offers: JSON.parse(JSON.stringify(offers)),
               notFound: false
          }
     };
}

function Offerings({ offers }) {
     const apiPricing = [];
     offers.map((data) => {
          if (data.isActive) {
               apiPricing.push({
                    id: data.id,
                    courseName: data.name,
                    description: data.description,
                    duration: data.isTrial
                         ? data.days + ' Days Trial'
                         : data.days + ' Days',
                    durationNum: data.days,
                    isTrial: data.isTrial,
                    old_price: data.old_price,
                    isGeneral: data.isGeneral,
                    price: data.price,
                    sub_category: data.sub_category
               });
          }
     });
     return (
          <div>
               <NavbarHelper />
               <Pricing registerTo="Online" pricing={apiPricing} />
          </div>
     );
}

export default Offerings;
Offerings.Layout = HomeLayout;
