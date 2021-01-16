import UsersTable from '@/components/admin/UsersTable';
import React from 'react';
import Dashboard from './dashboard';

const users = () => {
     return (
          <Dashboard>
               <UsersTable />
          </Dashboard>
     );
};

export default users;
