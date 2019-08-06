import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Flex, Clickable, Container, Hr,
} from '@firestudio/ui';
//
import Drawer from '@elements/Drawer';
import Contact from '@partials/Contact';

export default class Nav extends PureComponent {
  static renderLink(to, text) {
    return (
      <Drawer.Trigger
        target="menu"
        render={({ toggleDialog }) => (
          <Clickable
            as="button"
            styledAs="a"
            className="flex h-full text-xl items-center mx-4 hover:underline"
            onClick={async () => {
              await toggleDialog();
              document.getElementById(to.replace('#', '')).scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {text}
          </Clickable>
        )}
      />
    );
  }

  render() {
    return (
      <nav className="nav h-20 text-white font-medium">
        <Container className="flex h-full px-8">
          <Flex className="flex-row flex-grow items-center gap-between-4" childClassName="h-full">
            <Clickable
              href="/"
              as="a"
              styledAs="none"
              className="flex items-center h-full text-gray-900 text-2xl font-bold"
            >
              christianguest.dev
            </Clickable>
            <div className="flex-grow" />
            <Drawer.Trigger
              target="menu"
              render={({ toggleDialog }) => (
                <Clickable
                  className="flex items-center h-full text-gray-500 hover:text-gray-900 p-3"
                  onClick={toggleDialog}
                >
                  <FontAwesomeIcon icon={['fas', 'bars']} size="2x" />
                </Clickable>
              )}
            />
          </Flex>
        </Container>
        <Drawer
          name="menu"
        >
          <Drawer.Trigger
            target="menu"
            render={({ toggleDialog }) => (
              <Clickable
                className="absolute top-0 right-0 w-20 h-20 p-0 text-gray-500 hover:text-gray-900"
                onClick={toggleDialog}
              >
                <FontAwesomeIcon icon={['fas', 'times']} size="2x" />
              </Clickable>
            )}
          />
          <Flex className="flex-grow gap-between-6">
            <Hr />
            {Nav.renderLink('#profile', 'Profile')}
            {Nav.renderLink('#skills', 'Skills')}
            {Nav.renderLink('#experience', 'Experience')}
            <Hr />
            <Flex className="items-center">
              <Contact iconSize={3} />
            </Flex>
          </Flex>
        </Drawer>
      </nav>
    );
  }
}
