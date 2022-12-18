import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js";

function Character(data) {
  Object.assign(this, data);
  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  this.takeDamage = function (attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce(function (total, currentEle) {
      return total + currentEle;
    });

    this.health -= totalAttackScore;

    console.log(`totalAttackScore: ${totalAttackScore}`);

    // console.log(
    //   `${this.name} = ${this.health} - ${totalAttackScore} = ${
    //     this.health - totalAttackScore
    //   }`
    // );
  };

  this.getDiceHtml = function () {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map(function (num) {
        return `<div class="dice">${num}</div>`;
      })
      .join("");
  };

  this.getCharacterHtml = function () {
    const { name, avatar, health, diceCount, diceArray } = this;

    return `
    <div class="character-card">
    <h4 class="name"> ${name} </h4>
    <img class="avatar" src="${avatar}" />
    <div class="health">health: <b> ${health} </b></div>
    <div class="dice-container">
    ${diceArray}
    </div>
    </div>
    `;
  };
}

export default Character;
