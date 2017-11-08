import React from 'react';
import { storiesOf } from '@storybook/react';
import FullMatchInfo from '../components/FullMatchInfo';

storiesOf('Full Match Info', module).add('default', () => (
  <FullMatchInfo matchId={1111} />
));
