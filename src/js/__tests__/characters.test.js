import Bowman from '../characters/Bowman';
import Daemon from '../characters/Daemon';
import Magician from '../characters/Magician';
import Swordsman from '../characters/Swordsman';
import Zombie from '../characters/Zombie';
import Undead from '../characters/Undead';
import Character from '../characters/Character';

describe('Тестим персонажей', () => {
    test('Лучник', () => {
        const bowman = new Bowman('Лучара');
        const isBowman = bowman instanceof Bowman;
        const isCharacter = bowman instanceof Character;
        const result = [bowman.name, isBowman, isCharacter];
        const expected = ['Лучара', true, true];

        expect(result).toEqual(expected);
    });
    test('Демон', () => {
        const bowman = new Daemon('Демонюга');
        const isBowman = bowman instanceof Daemon;
        const isCharacter = bowman instanceof Character;
        const result = [bowman.name, isBowman, isCharacter];
        const expected = ['Демонюга', true, true];

        expect(result).toEqual(expected);
    });
    test('Маг', () => {
        const bowman = new Magician('Ватный');
        const isBowman = bowman instanceof Magician;
        const isCharacter = bowman instanceof Character;
        const result = [bowman.name, isBowman, isCharacter];
        const expected = ['Ватный', true, true];

        expect(result).toEqual(expected);
    });
    test('Мечник', () => {
        const bowman = new Swordsman('Вар');
        const isBowman = bowman instanceof Swordsman;
        const isCharacter = bowman instanceof Character;
        const result = [bowman.name, isBowman, isCharacter];
        const expected = ['Вар', true, true];

        expect(result).toEqual(expected);
    });
    test('Зомби', () => {
        const bowman = new Zombie('Ходячий Мертвяк');
        const isBowman = bowman instanceof Zombie;
        const isCharacter = bowman instanceof Character;
        const result = [bowman.name, isBowman, isCharacter];
        const expected = ['Ходячий Мертвяк', true, true];

        expect(result).toEqual(expected);
    });
    test('Мертвяк', () => {
        const bowman = new Undead('Мертвячий Ходяк');
        const isBowman = bowman instanceof Undead;
        const isCharacter = bowman instanceof Character;
        const result = [bowman.name, isBowman, isCharacter];
        const expected = ['Мертвячий Ходяк', true, true];

        expect(result).toEqual(expected);
    });
});
