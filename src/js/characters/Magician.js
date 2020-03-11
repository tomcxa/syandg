import Character from './Character';

export default class Magician extends Character {
    constructor(name) {
        super(name);
        this.type = 'magician';
        this.attack = 25;
        this.protection = 25;
    }
}
