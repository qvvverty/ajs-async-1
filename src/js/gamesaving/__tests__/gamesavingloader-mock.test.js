import GameSavingLoader from '../gamesavingloader';
import read from '../reader';

jest.mock('../reader');
read.mockRejectedValue('Something bad happened');
test('Expect GameSavingLoader to throw error', () => {
  GameSavingLoader.load()
    .then((save) => {
      expect(save instanceof Error).toBe(true);
    });
});
