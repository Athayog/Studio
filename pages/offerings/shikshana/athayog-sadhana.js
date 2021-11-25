import HomeLayout from '@/components/layout/HomeLayout';
import HeaderLayout from '@/components/shared/offerings/HeaderLayout';
import ShikshanaCalendarTable from '@/components/shared/ShikshanaCalendarTable';
import { Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';

function AthayogSadhana() {
     const athayogSadhanaEvents = [
          {
               time: '6pm - 7:30pm',
               months: ['January  ', 'May', 'September'],
               courseName: 'AthaYog Sadhana Abhyasa - Asana ',
               details: [
                    {
                         date: '5th Jan - 25th Jan'
                    },
                    {
                         date: '1st May - 21st May '
                    },
                    {
                         date: '1st May - 21st May'
                    }
               ]
          },
          {
               time: '6pm - 7:30pm',
               months: ['February  ', 'June', 'October'],
               courseName: 'AthaYog Sadhana Abhyasa - Pranayama',
               details: [
                    {
                         date: '1st Feb - 21st Feb'
                    },
                    {
                         date: '1st June - 21st June'
                    },
                    {
                         date: '1st Oct - 21st Oct'
                    }
               ]
          },
          {
               time: null,
               months: ['March  ', 'July', 'November'],
               courseName: 'AthaYog Sadhana Manayog - Meditation',
               details: [
                    {
                         date: '1st March - 21st March'
                    },
                    {
                         date: '1st July - 21st July'
                    },
                    {
                         date: '1st Nov - 21st Nov'
                    }
               ]
          },
          {
               time: '6pm - 7:30pm',
               months: ['April  ', 'August', 'December'],
               courseName: 'AthaYog Sadhana Manayog - Kaivalya 1',
               details: [
                    {
                         date: '1st April - 21st April'
                    },
                    {
                         date: '1st Aug - 21st Aug'
                    },
                    {
                         date: '1st Dec - 21st Dec'
                    }
               ]
          }
     ];
     const events = [
          {
               name: 'AthaYog Sadhana',
               data: athayogSadhanaEvents
          }
     ];
     return (
          <HeaderLayout>
               <Heading>Athayog Sadhana </Heading>
               <Stack spacing={2} my={5}>
                    <Text>
                         Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Reiciendis sint, eos delectus sed reprehenderit
                         itaque. Eveniet consequuntur nobis veniam debitis at,
                         sit doloribus ipsum ea adipisci quos unde ad! Nihil.
                         Excepturi quaerat eaque debitis tempore dolorum
                         assumenda voluptatem modi quibusdam minima ipsum minus
                         suscipit porro, ex sunt quas iusto? Possimus,
                         recusandae labore? Dolorum corporis optio, earum totam
                         nisi numquam ipsa. Tempora sed nam laborum consequuntur
                         neque laboriosam est in totam officia veritatis ipsam
                         doloribus accusamus nostrum iste aliquid adipisci,
                         dolorum dolorem velit enim necessitatibus quaerat
                         tenetur, excepturi repellendus numquam. Perferendis!
                         Explicabo et similique officia ex eos, sit optio totam
                         dolor voluptatum inventore. Id iusto nam accusantium,
                         nesciunt aliquid doloribus eveniet quo laborum eligendi
                         quos tempora provident vitae numquam voluptates modi?
                         Magnam laudantium possimus, dignissimos quisquam cumque
                         animi ipsam hic totam. Dolorum quasi a recusandae minus
                         magni rerum, neque maiores, veniam deserunt aspernatur
                         porro ipsa enim modi nemo! Atque, architecto et.
                    </Text>
               </Stack>
               <ShikshanaCalendarTable calendar={events} />
          </HeaderLayout>
     );
}

export default AthayogSadhana;
AthayogSadhana.Layout = HomeLayout;
