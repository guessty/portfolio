import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Flex, Clickable } from '@firestudio/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//

export default class Footer extends PureComponent {
  static propTypes = {
    iconSize: PropTypes.number,
  }

  static defaultProps = {
    iconSize: 2,
  }

  render() {
    const { iconSize } = this.props;
    const size = `${iconSize}x`;

    return (
      <Flex className="flex-row gap-between-8">
        <Clickable
          className="p-0"
          href="mailto:christian.guest@outlook.com"
          isExternal
          as="a"
          styledAs="button"
        >
          <FontAwesomeIcon icon={['fas', 'envelope-square']} size={size} />
        </Clickable>
        <Clickable
          className="p-0"
          href="https://github.com/guessty"
          isExternal
          target="_blank"
          as="a"
          styledAs="button"
        >
          <FontAwesomeIcon icon={['fab', 'github-square']} size={size} />
        </Clickable>
        <Clickable
          className="p-0"
          href="https://www.linkedin.com/in/christian-guest-b16a2515a"
          isExternal
          target="_blank"
          as="a"
          styledAs="button"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} size={size} />
        </Clickable>
      </Flex>
    );
  }
}
