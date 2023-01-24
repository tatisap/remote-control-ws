import { Button, down, left, mouse, Point, right, straightTo, up } from '@nut-tree/nut-js';

export class MouseService {
  static moveUp = async (px: number) => {
    await mouse.move(up(px));
  };

  static moveDown = async (px: number) => {
    await mouse.move(down(px));
  };

  static moveLeft = async (px: number) => {
    await mouse.move(left(px));
  };

  static moveRight = async (px: number) => {
    await mouse.move(right(px));
  };

  static moveStraightTo = async (x: number, y: number) => {
    const point = new Point(x, y);
    await mouse.move(straightTo(point));
  };

  static getPosition = async (): Promise<[number, number]> => {
    const position = await mouse.getPosition();
    const { x, y } = position;
    return [x, y];
  };

  static pressLeftButton = async (): Promise<void> => {
    await mouse.pressButton(Button.LEFT);
  };

  static releaseLeftButton = async (): Promise<void> => {
    await mouse.releaseButton(Button.LEFT);
  };
}
