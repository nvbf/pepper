import { observable } from 'mobx';

export default class LineupStore {
  teamStore;

  constructor(teamStore) {
    this.teamStore = teamStore;
  }

  updateFromJson(json) {
    this.one = this.teamStore.resolvePlayer(json.one);
    this.two = this.teamStore.resolvePlayer(json.two);
    this.three = this.teamStore.resolvePlayer(json.three);
    this.four = this.teamStore.resolvePlayer(json.four);
    this.five = this.teamStore.resolvePlayer(json.five);
    this.six = this.teamStore.resolvePlayer(json.six);
    this.libero = this.teamStore.resolvePlayer(json.libero);
  }

  @observable one = null;
  @observable two = null;
  @observable three = null;
  @observable four = null;
  @observable five: null;
  @observable six: null;
  @observable libero: null;
}
