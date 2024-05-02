export function marsRover(commandString) {
  if (!commandString) return '0:0:N';

  const commands = commandString.split('');

  let xCoordinate = 0;
  let yCoordinate = 0;
  let direction = 'N';

  const navigationParser = {
    N: { L: 'W', R: 'E' },
    S: { L: 'E', R: 'W' },
    E: { L: 'N', R: 'S' },
    W: { L: 'S', R: 'N' },
  };

  commands.forEach((command) => {
    switch (command) {
      case 'M':
        yCoordinate++;
        if (yCoordinate === 10) yCoordinate = 0;
        break;
      case 'L':
      case 'R':
        direction = navigationParser[direction][command];
        break;
      default:
    }
  });

  return `${xCoordinate}:${yCoordinate}:${direction}`;
}
