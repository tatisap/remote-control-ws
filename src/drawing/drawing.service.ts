import { MouseService } from '../mouse/mouse.service';
import { CIRCLE } from './drawing.constants';
import { convertDegToRad } from './drawing.utilities';

export class DrawingService {
  static drawCircle = async (radius: number) => {
    const [x, y] = await MouseService.getPosition();
    const points: [number, number][] = [];
    for (let i = 0; i <= CIRCLE.ROUND_ANGLE; i += CIRCLE.STEP_ANGLE) {
      const coordX = Math.cos(convertDegToRad(i)) * radius + x;
      const coordY = Math.sin(convertDegToRad(i)) * radius + y;
      points.push([coordX, coordY]);
    }
    await MouseService.moveRight(radius);
    await MouseService.pressLeftButton();
    await points.reduce(async (prevAction: Promise<void>, nextPoint): Promise<void> => {
      return prevAction.then(() => {
        const [x, y] = nextPoint;
        return MouseService.moveStraightTo(x, y);
      });
    }, Promise.resolve());
    await MouseService.releaseLeftButton();
  };

  static drawRestangle = async (x: number, y: number) => {
    await MouseService.pressLeftButton();
    await MouseService.moveDown(y);
    await MouseService.moveRight(x);
    await MouseService.moveUp(y);
    await MouseService.moveLeft(x);
    await MouseService.releaseLeftButton();
  };
}
