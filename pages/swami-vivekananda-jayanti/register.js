import EventRegister from '@/components/jayanti/EventRegister';
import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import React from 'react';

function Register() {
     return (
          <div>
               <NavbarHelper />
               <EventRegister />
          </div>
     );
}

export default Register;
Register.Layout = HomeLayout;
