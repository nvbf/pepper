import { observable } from 'mobx';

export default class TeamStore {
  constructor({ name, shortName, logo, players, color }) {
    this.name = name || '';
    this.shortName = shortName || '';
    this.logo = logo || '';
    this.players = players || [];
    this.color = color || '#444444';
  }

  @observable name;
  @observable shortName;
  @observable logo;
  @observable players;
  @observable color;

  resolvePlayer(playerNr) {
    return this.players.find(player => player.number === playerNr);
  }
}
