import Character from './Character';

export default class Undead extends Character {
    constructor(name) {
        super(name);
        this.type = 'undead';
        this.attack = 25;
        this.protection = 25;
    }
}
