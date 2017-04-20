/* eslint-disable */
import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/playerListStory');
}

configure(loadStories, module);
