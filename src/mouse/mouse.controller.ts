import { WS_CMD } from '../app.enum';
import { MouseService } from './mouse.service';

export class MouseController {
  static moveUp = async (px: number): Promise<string> => {
    await MouseService.moveUp(px);
    return WS_CMD.MOUSE_UP;
  };

  static moveDown = async (px: number): Promise<string> => {
    await MouseService.moveDown(px);
    return WS_CMD.MOUSE_DOWN;
  };

  static moveLeft = async (px: number): Promise<string> => {
    await MouseService.moveLeft(px);
    return WS_CMD.MOUSE_LEFT;
  };

  static moveRight = async (px: number): Promise<string> => {
    await MouseService.moveRight(px);
    return WS_CMD.MOUSE_RIGHT;
  };

  static getPosition = async (): Promise<string> => {
    const position = await MouseService.getPosition();
    return `${WS_CMD.MOUSE_POSITION} ${position.join(',')}`;
  };
}
