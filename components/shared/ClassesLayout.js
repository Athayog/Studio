import NavbarHelper from '@/components/shared/NavbarHelper';
import { Button } from '@chakra-ui/button';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';

function ClassesLayout({ children }) {
     const router = useRouter();
     return (
          <>
               {' '}
               <Box margin="auto" width="100%" bg="white">
                    <Button
                         leftIcon={<ArrowBackIcon />}
                         size="md"
                         variant="outline"
                         mb={10}
                         ml={10}
                         mt={10}
                         onClick={() => router.push('/classes')}
                    >
                         Back To Classes
                    </Button>
                    {children}
               </Box>
          </>
     );
}

export default ClassesLayout;
