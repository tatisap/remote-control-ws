import { Region, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';
import { MouseService } from '../mouse/mouse.service';

export class ImageService {
  static printScreen = async () => {
    const [x, y] = await MouseService.getPosition();
    const screenshot = await (await screen.grabRegion(new Region(x, y, 200, 200))).toRGB();
    const { width, height, data } = screenshot;
    const image = await Jimp.read({ width, height, data } as unknown as Jimp);
    return (await image.getBufferAsync(Jimp.MIME_PNG)).toString('base64');
  };
}
