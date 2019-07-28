import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faTimes,
  faBars,
  faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

require('@fortawesome/fontawesome-svg-core/styles.css');

export default () => {
  library.add(faTimes);
  library.add(faBars);
  library.add(faEnvelopeSquare);
  library.add(faGithubSquare);
  library.add(faLinkedin);
};
