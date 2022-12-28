import EventRegister from '@/components/jayanti/EventRegister';
import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import Script from 'next/script';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Register() {
     return (
          <div>
               <Script id="page-view">
                    {`!function(f,b,e,v,n,t,s)
                              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                              n.queue=[];t=b.createElement(e);t.async=!0;
                              t.src=v;s=b.getElementsByTagName(e)[0];
                              s.parentNode.insertBefore(t,s)}(window,document,'script',
                              'https://connect.facebook.net/en_US/fbevents.js');
                              fbq('init', '341795334013939'); 
                              fbq('track', 'Lead');`}
               </Script>

               <NavbarHelper />
               <EventRegister />
          </div>
     );
}

export default Register;
Register.Layout = HomeLayout;
