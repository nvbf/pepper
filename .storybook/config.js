/* eslint-disable */
import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/playerListStory');
  require('../stories/screenStory');
  require('../stories/scoreboardStory');
  require('../stories/lineupStory');
  require('../stories/admin/navBarStory');
  require('../stories/admin/playerDataStory');
}

configure(loadStories, module);
