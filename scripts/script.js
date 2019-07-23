const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};
const chooseOption = (opt1, opt2) => {
  let randNum = Math.round(Math.random());
  return randNum === 0 ? opt1 : opt2;
};
const attackPlayer = function(health) {
  return health - randomDamage();
};
const logHealth = (player, health) => {
  console.log(`${player} health:${health}`);
};
const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};
const isDead = health => {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }
};
function fight() {
  const player1 = "Veronica";
  const player2 = "Eric";
  let player1Health = 100;
  let player2Health = 100;
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health) === true) {
        logDeath(player1, player2);
        break;
      } else {
        player1Health = attackPlayer(player1Health);
        logHealth(player1, player1Health);
        if (isDead(player1Health) === true) {
          logDeath(player2, player1);
          break;
        }
      }
    }
  }
}
fight();
