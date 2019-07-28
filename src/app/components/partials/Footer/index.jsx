import React, { PureComponent } from 'react';
import { Flex, Clickable, Container } from '@firestudio/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//

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
            <Flex className="flex-row gap-between-8">
              <Clickable
                className="p-0"
                href="mailto:christian.guest@outlook.com"
                isExternal
                as="a"
                styledAs="button"
              >
                <FontAwesomeIcon icon={['fas', 'envelope-square']} size="2x" />
              </Clickable>
              <Clickable
                className="p-0"
                href="https://github.com/guessty"
                isExternal
                target="_blank"
                as="a"
                styledAs="button"
              >
                <FontAwesomeIcon icon={['fab', 'github-square']} size="2x" />
              </Clickable>
              <Clickable
                className="p-0"
                href="https://www.linkedin.com/in/christian-guest-b16a2515a"
                isExternal
                target="_blank"
                as="a"
                styledAs="button"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
              </Clickable>
            </Flex>
          </Flex>
        </Container>
      </footer>
    );
  }
}
