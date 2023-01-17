import HomeLayout from '@/components/layout/HomeLayout';
import ContactMore from '@/components/shared/ContactMore';
import CoursesLayout from '@/components/shared/CoursesLayout';
import CTA from '@/components/shared/CTA';
import HeaderLayout from '@/components/shared/offerings/HeaderLayout';
import ShikshanaCalendarTable from '@/components/shared/ShikshanaCalendarTable';
import { Heading, Stack, Text } from '@chakra-ui/layout';
import Head from 'next/head';
import React from 'react';

function SpecialEvent() {
     const specialEvent = [
          {
               time: null,
               months: [
                    'January',
                    'February',
                    'March',
                    'June',
                    'July',
                    'September',
                    'October',
                    'December'
               ],
               courseName: null,
               details: [
                    {
                         name: 'Swami Vivekananda Birthday',
                         date: 'Thu, 12th Jan 2023'
                    },
                    {
                         name: 'Rata Saptami',
                         date: 'Sat, 28th Jan 2023 '
                    },
                    {
                         name: 'Maha Shivratri Homam',
                         date: 'Sat, 18th Feb 2023'
                    },
                    {
                         name: 'International Day of Yoga ',
                         date: 'Wed, 21st June 2023 '
                    },
                    {
                         name: 'Guru Purnima ',
                         date: 'Mon, 3rd July 2023 '
                    },
                    {
                         name: 'Teachers Day',
                         date: 'Tue, 5th Sep 2023'
                    },
                    {
                         name: 'KR Puram 3rd Anniversary',
                         date: 'Wed, 4th October 2023'
                    },
                    {
                         name: 'Indiranagar Sat, 2nd Anniversary',
                         date: '2nd December 2023'
                    }
               ]
          }
     ];
     const events = [
          {
               name: 'Special Events',
               data: specialEvent
          }
     ];
     return (
          <>
               <Head>
                    <title>Special Event - AthayogLiving</title>
               </Head>
               <CoursesLayout>
                    <Heading>Special Events</Heading>
                    <Stack spacing={2} my={5}>
                         {/* <Text>
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
                    </Text> */}
                    </Stack>
                    <ShikshanaCalendarTable calendar={events} />
               </CoursesLayout>
               <ContactMore registerTo="special_events" />
          </>
     );
}

export default SpecialEvent;
SpecialEvent.Layout = HomeLayout;
