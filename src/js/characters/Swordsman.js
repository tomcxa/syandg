import Character from './Character';

export default class Swordsman extends Character {
    constructor(name) {
        super(name);
        this.type = 'swordsman';
        this.attack = 25;
        this.protection = 25;
    }
}
