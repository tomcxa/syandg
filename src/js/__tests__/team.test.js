import Bowman from '../characters/Bowman';
import Daemon from '../characters/Daemon';
import Magician from '../characters/Magician';
import Swordsman from '../characters/Swordsman';
import Zombie from '../characters/Zombie';
import Undead from '../characters/Undead';
import Team from '../characters/Team';


describe('Тестим тиму', () => {
    test('Проверка Team.add()', () => {
        const bowman = new Bowman('Лучара');
        const team = new Team();
        team.add(bowman);
        const result = team.toArray();
        const expected = [bowman];

        expect(result).toEqual(expected);

        expect(() => {
            team.add(bowman);
        }).toThrow();
    });
    test('Проверка Team.addAll()', () => {
        const team = new Team();
        const bowman = new Bowman('Лучара');
        const daemon = new Daemon('Демонюга');
        const mag = new Magician('Ватный');
        const war = new Swordsman('Вар');
        const zombie = new Zombie('Ходячий Мертвяк');
        const undead = new Undead('Мертвячий Ходяк');
        team.addAll(bowman, bowman, daemon, mag, war, zombie, undead);
        const result = team.toArray();
        const expected = [
            bowman, daemon, mag, war, zombie, undead,
        ];

        expect(result).toEqual(expected);
    });
});
