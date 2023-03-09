import React from 'react';
import { Container, Section, ContactList, Form, SearchInput } from 'components';

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
