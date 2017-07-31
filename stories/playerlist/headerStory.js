import React from 'react';
import { storiesOf } from '@storybook/react';
import BigHeader from '../../components/playerlist/BigHeader';
import { Bayern, ManUnited } from '../../mocks/teams';

storiesOf('BigHeader', module)
  .add('Bayern', () => <BigHeader isShowing logo={Bayern.logo} text={Bayern.name} />)
  .add('ManUnited', () => <BigHeader isShowing logo={ManUnited.logo} text={ManUnited.name} />);
