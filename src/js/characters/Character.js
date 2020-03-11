/* eslint-disable no-mixed-operators */
export default class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('нельзя повысить левел умершего');
        }
        this.health = 100;
        this.level += 1;
        this.attack += (this.attack * 20 / 100);
        this.protection += (this.protection * 20 / 100);
    }
}
