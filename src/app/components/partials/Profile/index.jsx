import React, { PureComponent } from 'react';
import { Flex } from '@firestudio/ui';

export default class Profile extends PureComponent {
  render() {
    return (
      <Flex className="gap-between-2">
        <p>I am a front end developer with 5 years of commercial experience (3 years using ReactJS).</p>
        <p>I am adaptable and have worked on a variety of projects using a range of rendering techniques (static export, SPA, and SSR).</p>
        <p>I am passionate about what I do and am not afraid to get my hands dirty when it comes to the topics of security, authentication, API configuration, and site performance.</p>
        <p>
          I am very detail-oriented and value any process that improves the quality of a codebase, such as well defined coding standards, type checking, and peer reviews.
          I also always ensure my code is cleanly written, appropriately documented, fully tested, and focused on reusability.
        </p>
        <p>On a personal level, I have a keen interest in animation, accessibility, semantic design, and progressive enhancement. I am also a fan of Google’s Firebase platform and am currently developing an open-source front end solution to complement its services.</p>
      </Flex>
    );
  }
}
