import Character from './Character';

export default class Zombie extends Character {
    constructor(name) {
        super(name);
        this.type = 'zombie';
        this.attack = 25;
        this.protection = 25;
    }
}
