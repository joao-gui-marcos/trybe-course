abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log('Melee attack executed');
  }
  specialMove(): void {
    console.log('Special move by melee character executed');
  }
}

class LongRangeCharacter extends Character {
  talk(): void {
    console.log('Long range attack executed');
  }
  specialMove(): void {
    console.log('Special move by range character executed');
  }
}

const myFunc = (character: Character) => {
  character.talk();
  character.specialMove();
};

const knight = new MeleeCharacter();
const bowMan = new LongRangeCharacter();

myFunc(knight);
myFunc(bowMan);
