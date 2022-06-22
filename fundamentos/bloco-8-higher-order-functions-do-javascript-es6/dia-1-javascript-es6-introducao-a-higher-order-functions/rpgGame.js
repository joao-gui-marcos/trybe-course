const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.floor(Math.random()*(dragon.strength-15+1)+15);

const warriorDamage = () => Math.floor(Math.random()*(warrior.strength*warrior.weaponDmg-warrior.strength+1)+warrior.strength);

const mageDamage = () => {
  const mageDamageAndManaSpent = {
    damage: Math.floor(Math.random()*(mage.intelligence*2-mage.intelligence+1)+mage.intelligence),
    mana: 15,
  }
  if (mage.mana < 15) {
    mageDamageAndManaSpent.damage = 'Não possui mana suficiente'
    mageDamageAndManaSpent.mana = 0
  }
  return mageDamageAndManaSpent
}

const gameActions = {
  warriorTurn(warriorDamage) {
    const damage = warriorDamage()
    dragon.healthPoints -= damage
    warrior.damage = damage
  },
  mageTurn(mageDamage) {
    const damage = mageDamage().damage
    dragon.healthPoints -= damage
    mage.damage = damage
    mage.mana -= mageDamage().mana
  },
  dragonTurn(dragonDamage) {
    const damage = dragonDamage()
    mage.healthPoints -= damage
    warrior.healthPoints -= damage
    dragon.damage = damage
  },
  showBattleStatus() {
    console.log(battleMembers)
    return battleMembers
  }
};

gameActions.showBattleStatus()

gameActions.warriorTurn(warriorDamage)
gameActions.mageTurn(mageDamage)
gameActions.dragonTurn(dragonDamage)

gameActions.showBattleStatus()



