import React, { PureComponent } from 'react';
import {
  Flex,
} from '@firestudio/ui';

const advanced = [
  'Javascript ES6/7', 'React / Next', 'Redux / Unstated', 'Jest / Enzyme',
  'NPM / Yarn', 'Node / Express', 'Webpack', 'HTML5',
  'CSS / SASS / PostCSS', 'Tailwind CSS', 'Google Firebase', 'Git',
  'Prismic.io', 'Atlassian Suite',
];

const intermediate = [
  'Javascript ES5', 'TypeScript', 'CoffeeScript' , 'Vue / Nuxt',
  'Docker', 'Sketch', 'InVision', 'PhotoShop / Illustrator',
  'JQuery', 'Bootstrap', 'Stylus', 'MapBoxGL / D3 / DataTables',
];

const basic = [
  'Ruby on Rails', 'AWS', 'GraphQL', 'CodeShip',
  'Python / Django', 'MongoDB', 'MySQL', 'Wordpress',
];

export default class Skills extends PureComponent {
  static renderSkill(skill) {
    return (
      <span key={skill} className="block px-4 py-2 border rounded-lg bg-gray-900 text-white text-sm">
        {skill}
      </span>
    );
  }

  render() {
    return (
      <Flex className="gap-between-8">
        <Flex className="gap-between-4">
          <h3 className="text-xl text-gray-700">Thorough knowledge of:</h3>
          <Flex className="flex-row flex-wrap gap-between-2">
            {advanced.map(skill => Skills.renderSkill(skill))}
          </Flex>
        </Flex>
        <Flex className="gap-between-4">
          <h3 className="text-xl text-gray-700">Good working knowledge of:</h3>
          <Flex className="flex-row flex-wrap gap-between-2">
            {intermediate.map(skill => Skills.renderSkill(skill))}
          </Flex>
        </Flex>
        <Flex className="gap-between-4">
          <h3 className="text-xl text-gray-700">Other experience working with:</h3>
          <Flex className="flex-row flex-wrap gap-between-2">
            {basic.map(skill => Skills.renderSkill(skill))}
          </Flex>
        </Flex>
      </Flex>
    );
  }
}
