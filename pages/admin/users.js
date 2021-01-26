import AddAdminUser from '@/components/admin/AddAdminUser';
import UsersTable from '@/components/admin/UsersTable';
import {
    Box,
    Flex,
    Stack,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel
} from '@chakra-ui/react';
import React from 'react';
import Dashboard from './dashboard';

const users = () => {
    return (
        <Dashboard>
            <Tabs bg="white" padding={5} rounded="lg" boxShadow="base">
                <TabList>
                    <Tab>Users</Tab>
                    <Tab>Admin Users</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Stack
                            justifyContent="space-between"
                            width="100%"
                            direction="column"
                            spacing="5"
                        >
                            <UsersTable userType="users" />
                        </Stack>
                    </TabPanel>
                    <TabPanel>
                        <Stack
                            justifyContent="space-between"
                            width="100%"
                            direction="column"
                            spacing="5"
                        >
                            <UsersTable userType="admin/users" />
                            <AddAdminUser />
                        </Stack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Dashboard>
    );
};

export default users;
