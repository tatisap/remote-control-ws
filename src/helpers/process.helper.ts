export const processClientMessage = (message: string): [string, number[]] => {
  const [command, ...payload] = message.split(' ');
  const args: number[] = payload.map((value: string): number => Number(value));
  console.log(`Recieved command: ${command}${args.length > 0 ? ` , arguments: ${args}` : ''}`);
  return [command, args];
};
