/* eslint-disable no-plusplus */
import Bowman from './Bowman';
import Daemon from './Daemon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Zombie from './Zombie';
import Undead from './Undead';

export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Персонаж уже в команде!');
        }
        this.members.add(character);
    }

    addAll(...allCharacters) {
        allCharacters.forEach((character) => this.members.add(character));
    }

    toArray() {
        return [...this.members];
    }

    * [Symbol.iterator]() {
        for (let i = 0; i < this.members.size; i++) {
            yield [...this.members][i];
        }
    }
}

const team = new Team();
const bowman = new Bowman('Лучара');
const daemon = new Daemon('Демонюга');
const mag = new Magician('Ватный');
const war = new Swordsman('Вар');
const zombie = new Zombie('Ходячий Мертвяк');
const undead = new Undead('Мертвячий Ходяк');
team.addAll(bowman, bowman, daemon, mag, war, zombie, undead);
for (const person of team) {
    console.log(person);
}
console.log(team);
