import { WS_CMD } from '../app.enum';
import { DrawingService } from './drawing.service';

export class DrawingController {
  static drawCircle = async (radius: number) => {
    await DrawingService.drawCircle(radius);
    return WS_CMD.DRAW_CIRCLE;
  };

  static drawRestangle = async (x: number, y: number) => {
    await DrawingService.drawRestangle(x, y);
    return WS_CMD.DRAW_RECTANGLE;
  };

  static drawSquare = async (x: number) => {
    await DrawingService.drawRestangle(x, x);
    return WS_CMD.DRAW_SQUARE;
  };
}
