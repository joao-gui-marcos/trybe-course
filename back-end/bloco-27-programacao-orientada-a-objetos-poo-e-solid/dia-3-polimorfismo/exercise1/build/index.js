"use strict";
class Character {
}
class MeleeCharacter extends Character {
    talk() {
        console.log('Melee attack executed');
    }
    specialMove() {
        console.log('Special move by melee character executed');
    }
}
class LongRangeCharacter extends Character {
    talk() {
        console.log('Long range attack executed');
    }
    specialMove() {
        console.log('Special move by range character executed');
    }
}
const myFunc = (character) => {
    character.talk();
    character.specialMove();
};
const knight = new MeleeCharacter();
const bowMan = new LongRangeCharacter();
myFunc(knight);
myFunc(bowMan);
