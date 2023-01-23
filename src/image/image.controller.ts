import { WS_CMD } from '../app.enum';
import { ImageService } from './image.service';

export class ImageController {
  static printScreen = async (): Promise<string> => {
    const image = await ImageService.printScreen();
    console.log(`${WS_CMD.PRNT_SCRN} ${image}`);
    return `${WS_CMD.PRNT_SCRN} ${image}`;
  };
}
