import { observable, computed } from 'mobx';

export default class ScoreStore {
  @observable
  homeTeam = {
    setOne: 25,
    setTwo: 25,
    setThree: 5,
    setFour: 0,
    setFive: 0,
  };

  @observable
  awayTeam = {
    setOne: 21,
    setTwo: 27,
    setThree: 3,
    setFour: 0,
    setFive: 0,
  };

  static setResult(homeSet, awaySet) {
    const hasTwentyFive = homeSet >= 25 || awaySet >= 25;
    const wonByTwo = Math.abs(homeSet - awaySet) >= 2;
    if (hasTwentyFive && wonByTwo) {
      if (homeSet > awaySet) {
        return 1;
      }
      return -1;
    }
    return 0;
  }

  static setFinished(homeSet, awaySet) {
    return ScoreStore.setResult(homeSet, awaySet) !== 0;
  }

  @computed
  get setOneFinished() {
    return ScoreStore.setFinished(this.homeTeam.setOne, this.awayTeam.setOne);
  }

  @computed
  get setTwoFinished() {
    return ScoreStore.setFinished(this.homeTeam.setTwo, this.awayTeam.setTwo);
  }

  @computed
  get setThreeFinished() {
    return ScoreStore.setFinished(this.homeTeam.setThree, this.awayTeam.setThree);
  }

  @computed
  get setFourFinished() {
    return ScoreStore.setFinished(this.homeTeam.setFour, this.awayTeam.setFour);
  }

  @computed
  get setFiveFinished() {
    return ScoreStore.setFinished(this.homeTeam.setFive, this.awayTeam.setFive);
  }

  @computed
  get currentPoints() {
    if (!this.setOneFinished) {
      return { homeTeam: this.homeTeam.setOne, awayTeam: this.awayTeam.setOne };
    }
    if (!this.setTwoFinished) {
      return { homeTeam: this.homeTeam.setTwo, awayTeam: this.awayTeam.setTwo };
    }
    if (!this.setThreeFinished) {
      return { homeTeam: this.homeTeam.setThree, awayTeam: this.awayTeam.setThree };
    }
    if (!this.setFourFinished) {
      return { homeTeam: this.homeTeam.setFour, awayTeam: this.awayTeam.setFour };
    }
    return { homeTeam: this.homeTeam.setFive, awayTeam: this.awayTeam.setFive };
  }

  @computed
  get currentSets() {
    const setResults = [
      ScoreStore.setResult(this.homeTeam.setOne, this.awayTeam.setOne),
      ScoreStore.setResult(this.homeTeam.setTwo, this.awayTeam.setTwo),
      ScoreStore.setResult(this.homeTeam.setThree, this.awayTeam.setThree),
      ScoreStore.setResult(this.homeTeam.setFour, this.awayTeam.setFour),
      ScoreStore.setResult(this.homeTeam.setFive, this.awayTeam.setFive),
    ];
    return {
      homeTeam: setResults.filter(result => result === 1).length,
      awayTeam: setResults.filter(result => result === -1).length,
    };
  }
}
