import type { Screen } from '../types/types';

export const emptyScreen: Screen = {
  topLeft: { component: 'none', isShowing: false },
  topMiddle: { isShowing: false },
  topRight: { isShowing: false },
  main: { isShowing: false },
};

export const hiddenScoreScreen: Screen = {
  topLeft: { component: 'Scoreboard', isShowing: false },
  topMiddle: { isShowing: false },
  topRight: { isShowing: false },
  main: { isShowing: false },
};

export const scoreScreen: Screen = {
  topLeft: { component: 'Scoreboard', isShowing: true },
  topMiddle: { isShowing: false },
  topRight: { isShowing: false },
  main: { isShowing: false },
};

export const hiddenPlayerListScreen: Screen = {
  topLeft: { isShowing: false },
  topMiddle: { isShowing: false },
  topRight: { isShowing: false },
  main: { component: 'PlayerList', isShowing: false },
};

export const playerListScreen: Screen = {
  topLeft: { isShowing: false },
  topMiddle: { isShowing: false },
  topRight: { isShowing: false },
  main: { component: 'PlayerList', isShowing: true },
};

export const hiddenPlayerListScoreScreen: Screen = {
  topLeft: { component: 'Scoreboard', isShowing: false },
  topMiddle: { isShowing: false },
  topRight: { isShowing: false },
  main: { component: 'PlayerList', isShowing: false },
};

export const playerListScoreScreen: Screen = {
  topLeft: { component: 'Scoreboard', isShowing: true },
  topMiddle: { isShowing: false },
  topRight: { isShowing: false },
  main: { component: 'PlayerList', isShowing: true },
};
