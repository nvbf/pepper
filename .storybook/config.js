/* eslint-disable */
import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/playerlist/playerListStory');
  require('../stories/playerlist/barStory');
  require('../stories/playerlist/barListStory');
  require('../stories/playerlist/headerStory');
  // require('../stories/screenStory');
  require('../stories/scoreboardStory');
  require('../stories/lineupStory');
  require('../stories/admin/navBarStory');
  require('../stories/admin/playerDataStory');
  require('../stories/admin/playerDataEditStory');
}

configure(loadStories, module);
