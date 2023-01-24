export const processClientMessage = (message: string): [string, number[]] => {
  const [command, ...payload] = message.split(' ');
  const args: number[] = payload.map((value: string): number => Number(value));
  console.log(`Recieved command: ${command}${args.length > 0 ? ` , arguments: ${args}` : ''}`);
  return [command, args];
};

export const processError = (error: unknown): void => {
  if (
    error instanceof Error &&
    (error.message === 'Error: Given width exceeds display dimensions' ||
      error.message === 'Error: x coordinate outside of display' ||
      error.message === 'Error: Given height exceeds display dimensions' ||
      error.message === 'Error: y coordinate outside of display')
  ) {
    console.log('You try to print region outside of screen');
    return;
  }
  console.log(error);
};
