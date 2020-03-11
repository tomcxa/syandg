import Character from './Character';

export default class Bowman extends Character {
    constructor(name) {
        super(name);
        this.type = 'bowman';
        this.attack = 25;
        this.protection = 25;
    }
}
