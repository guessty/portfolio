import React, { PureComponent } from 'react';
import {
  Avatar, BackgroundImage, Container, Flex, Hr,
} from '@firestudio/ui';
//
import Profile from '@partials/Profile';
import Skills from '@partials/Skills';
import Experience from '@partials/Experience';
import Contact from '@partials/Contact';

export default class extends PureComponent {
  render() {
    return (
      <div>
        <div className="relative hidden lg:block bg-black">
          <BackgroundImage url="/static/images/profile-image.jpg" />
          <Container className="relative lg:py-16">
            <Flex className="gap-around-8">
              <div className="w-1/2">
                <Flex>
                  <h1 className="text-5xl text-white" id="profile">Christian Guest</h1>
                  <p className="text-2xl text-gray-200">Front End Developer</p>
                </Flex>
              </div>
              <div className="w-1/2 text-gray-200 text-sm">
                <Profile />
              </div>
              <div className="w-1/2">
                <Flex className="items-center text-white">
                  <Contact iconSize={3} />
                </Flex>
              </div>
            </Flex>
          </Container>
        </div>

        <div className="relative lg:hidden">
          <div
            className="absolute h-40 w-full"
            style={{
              backgroundImage: 'linear-gradient(to right, #4a5568 , #2d3748)',
            }}
          />
          <Container className="relative">
            <Flex className="gap-around-8 items-center" childClassName="w-full">
              <Flex className="gap-between-2 items-center">
                <Avatar picture="/static/images/profile.jpeg" className="border-white w-40 h-40 bg-gray-900" />
                <div className="text-center">
                  <h1 className="text-3xl">Christian Guest</h1>
                  <p className="text-lg">Front End Developer</p>
                </div>
                <Contact />
              </Flex>
              <Hr className="w-full" />
              <Flex className="gap-between-2">
                <h2 className="text-4xl" id="profile">Profile</h2>
                <Profile />
              </Flex>
              <Hr className="w-full" />
            </Flex>
          </Container>
        </div>

        <Container className="relative">
          <Flex className="gap-around-8 items-center" childClassName="w-full">
            <Flex className="gap-between-2">
              <h2 className="text-4xl" id="skills">Skills</h2>
              <Skills />
            </Flex>
            <Hr className="w-full" />
            <Flex className="gap-between-2">
              <h2 className="text-4xl" id="experience">Experience</h2>
              <Experience />
            </Flex>
          </Flex>
        </Container>
      </div>
    );
  }
}
