import React from 'react';
import { Container } from './container/Container.styled';
import { Section } from './Section/Section';
import { ContactList } from './contactList/ContactList';
import { Form } from './form/Form';
import { SearchInput } from './searchInput/SearchInput';

export const App = () => {
  return (
    <Container>
      <Section title="Add contact" className="aside">
        <Form />
      </Section>

      <Section title="Contact List">
        <SearchInput />
        <ContactList />
      </Section>
    </Container>
  );
};
