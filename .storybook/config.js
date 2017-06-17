/* eslint-disable */
import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/playerListStory');
  require('../stories/screenStory');
  require('../stories/scoreboardStory');
  require('../stories/lineupStory');
}

configure(loadStories, module);
