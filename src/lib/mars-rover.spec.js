import { marsRover } from './mars-rover';
describe('marsRover', () => {
  it('should return the starting position when given no commands', () => {
    expect(marsRover()).toEqual('0:0:N');
  });
  it('should return correct new position when given only M commands', () => {
    expect(marsRover('M')).toBe('0:1:N');
    expect(marsRover('MMM')).toBe('0:3:N');
    expect(marsRover('MMMMMMMMMM')).toBe('0:0:N');
  });
  it('should return the correct new direction when given only directional commands', () => {
    expect(marsRover('L')).toBe('0:0:W');
    expect(marsRover('R')).toBe('0:0:E');
    expect(marsRover('LL')).toBe('0:0:S');
  });
});
