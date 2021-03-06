import {
     Breadcrumb,
     BreadcrumbItem,
     BreadcrumbLink,
     BreadcrumbSeparator,
     useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { capitalizeFirstLetter } from '../helper/Capitalize';

function UsersHeader({ siteLink, defaultName }) {
     const bg = useColorModeValue('white', 'gray.800');

     return (
          <Breadcrumb bg={bg} padding={3} rounded="lg" boxShadow="base">
               <BreadcrumbItem>
                    <Link href="/admin/customers">
                         <BreadcrumbLink href="#">{defaultName}</BreadcrumbLink>
                    </Link>
               </BreadcrumbItem>

               <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">
                         {capitalizeFirstLetter(siteLink) || ''}
                    </BreadcrumbLink>
               </BreadcrumbItem>
          </Breadcrumb>
     );
}

export default UsersHeader;
