/* eslint-disable */
import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/playerListStory');
  require('../stories/screenStory');
}

configure(loadStories, module);
