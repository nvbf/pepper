import React from 'react';
import { storiesOf } from '@storybook/react';
import PlayerDataEdit from '../../components/admin/playerdata/PlayerDataEdit';
import { Bayern } from '../../mocks/teams';

storiesOf('PlayerDataEdit', module).add('default', () => <PlayerDataEdit team={Bayern} />);
