import { WS_CMD } from './app.enum';
import { DrawingController } from './drawing/drawing.controller';
import { ImageController } from './image/image.controller';
import { MouseController } from './mouse/mouse.controller';

export const appRouter = async (command: string, ...args: number[]): Promise<string | null> => {
  switch (command) {
    case WS_CMD.MOUSE_UP:
      return MouseController.moveUp(...(args as [number]));
    case WS_CMD.MOUSE_DOWN:
      return MouseController.moveDown(...(args as [number]));
    case WS_CMD.MOUSE_LEFT:
      return MouseController.moveLeft(...(args as [number]));
    case WS_CMD.MOUSE_RIGHT:
      return MouseController.moveRight(...(args as [number]));
    case WS_CMD.MOUSE_POSITION:
      return MouseController.getPosition();
    case WS_CMD.DRAW_CIRCLE:
      return DrawingController.drawCircle(...(args as [number]));
    case WS_CMD.DRAW_RECTANGLE:
      return DrawingController.drawRestangle(...(args as [number, number]));
    case WS_CMD.DRAW_SQUARE:
      return DrawingController.drawSquare(...(args as [number]));
    case WS_CMD.PRNT_SCRN:
      return ImageController.printScreen();
    default:
      return null;
  }
};
