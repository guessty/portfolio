import React, { PureComponent } from 'react';
import { Flex, Clickable, Container } from '@firestudio/ui';
//
import Contact from '@partials/Contact';

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className="h-full bg-gray-900 text-white">
        <Container className="h-full px-8 py-4">
          <Flex className="gap-around-4 justify-center items-center">
            <Clickable
              href="/"
              as="a"
              styledAs="none"
              className="flex h-full items-center text-white text-2xl font-bold"
            >
              Christian Guest
            </Clickable>
            <Contact />
          </Flex>
        </Container>
      </footer>
    );
  }
}
