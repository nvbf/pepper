import { action, observable } from 'mobx';

export default class UiStore {
  @observable topLeft = {
    position: 'topLeft',
    isShowing: true,
    id: 'Scoreboard',
    showLogos: true,
    showColors: true,
  };
  @observable topMiddle = { isShowing: false };
  @observable topRight = { isShowing: false };
  @observable main = { isShowing: true, position: 'main', id: 'PlayerList' };

  @action hideTopLeft() {
    this.topLeft.isShowing = false;
  }

  @action showTopLeft() {
    this.topLeft.isShowing = true;
  }
}
