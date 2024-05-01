import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

function WorkshopTable({ heading, data }) {
    return (
        <TableContainer border='0.6px solid purple' mb={1}>
            <Table variant='simple' colorScheme='purple' >
                <Thead>
                    <Tr background='purple.50'>
                        <Th colSpan={4} textAlign="left">{heading}</Th>
                    </Tr>
                    <Tr fontWeight='normal' color="purple.600">
                        <Th>Date</Th>
                        <Th>Time</Th>
                        <Th>Topic</Th>
                        <Th>Teacher</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((row, index) => (
                        <Tr key={index}>
                            <Td>{row.date}</Td>
                            <Td>{row.time}</Td>
                            <Td>{row.topic}</Td>
                            <Td>{row.teacher}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table></TableContainer>

    );
}

export default WorkshopTable;
