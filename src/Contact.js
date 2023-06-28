import React, { useState, useEffect } from 'react';
import { Box, Button, Container, FormLabel, Heading, Input, Stack, Text, UnorderedList, List, ListItem, Flex,} from '@chakra-ui/react'

function Contact() {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUsers();
    }, []);

    const handleChange = (event) => {
      setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const filtered = users.filter((user) => user.email === email);
      setFilteredUsers(filtered);
    };

    return (

    <Container maxW={'5xl'} pt={'8'}>
        <Stack spacing={20} >
            <Heading
                as={'h1'}
                size={'2xl'}
                fontWeight={'semibold'}
                textAlign={'center'}
            >
                Contacts
            </Heading>
            <form onSubmit={handleSubmit} >
                <Stack spacing={'5'} >
                    <FormLabel>Email:</FormLabel>
                    <Input type="email" value={email} onChange={handleChange} />
                    <Button type="submit" colorScheme={'blue'}
                            bg={'#0D74FF'}
                            color={'white'}
                            _hover={{
                            bg:'blue.500',
                            }}
                            >Retrieve Contact Details
                    </Button>
                </Stack>
            </form>
            {filteredUsers.length === 0 ? (
                <Text>No user found.</Text>
            ) : (
                <UnorderedList>
                {filteredUsers.map((user) => (
                    <Flex key={user.id} flexDirection={'column'} >
                        <Box p={'6'}>
                            <Heading as={'h2'} size={'lg'} fontWeight={'semibold'} pb={'4'}>Contact Information</Heading>
                            <List spacing={'2'}>
                                <ListItem><Text as={'span'} fontWeight={'bold'}>Name:</Text>{' '}
                                {user.name}
                                </ListItem>
                                <ListItem><Text as={'span'} fontWeight={'bold'}>Username:</Text>{' '}
                                    {user.username}
                                </ListItem>
                                <ListItem><Text as={'span'} fontWeight={'bold'}>Email:</Text>{' '}
                                    {user.email}
                                </ListItem>
                                <ListItem><Text as={'span'} fontWeight={'bold'}>Phone:</Text>{' '}
                                    {user.phone}
                                </ListItem>
                            </List>
                        </Box>
                        <Box p={'6'}>
                            <Heading as={'h2'} size={'lg'} fontWeight={'semibold'} pb={'4'}>Address</Heading>
                            <List spacing={'2'}>
                            <ListItem><Text as={'span'} fontWeight={'bold'}>Street:</Text>{' '}
                                {user.address.street}
                            </ListItem>
                            <ListItem><Text as={'span'} fontWeight={'bold'}>Suite:</Text>{' '}
                                {user.address.suite}
                            </ListItem>
                            <ListItem><Text as={'span'} fontWeight={'bold'}>City:</Text>{' '}
                                {user.address.city}
                            </ListItem>
                            <ListItem><Text as={'span'} fontWeight={'bold'}>Zipcode:</Text>{' '}
                                {user.address.zipcode}
                            </ListItem>
                            </List>
                        </Box>
                        <Box p={'6'}>
                            <Heading as={'h2'} size={'lg'} fontWeight={'semibold'} pb={'4'}>Company Details</Heading>
                            <List spacing={'2'}>
                            <ListItem><Text as={'span'} fontWeight={'bold'}>Company Name:</Text>{' '}
                                {user.company.name}
                            </ListItem>
                            <ListItem><Text as={'span'} fontWeight={'bold'}>Website:</Text>{' '}
                                    {user.website}
                                </ListItem>
                            <ListItem><Text as={'span'} fontWeight={'bold'}>Company Catchphrase:</Text>{' '}
                                {user.company.catchPhrase}
                            </ListItem>
                            <ListItem><Text as={'span'} fontWeight={'bold'}>Business Services:</Text>{' '}
                                {user.company.bs}
                            </ListItem>
                            </List>
                        </Box>
                    </Flex>
                ))}
                </UnorderedList>
            )}
        </Stack>
    </Container>
    );
  }

  export default Contact;
