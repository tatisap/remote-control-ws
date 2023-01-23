import { Region, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';
import { MouseService } from '../mouse/mouse.service';
import { SCREENSHOT } from './image.constants';

export class ImageService {
  static printScreen = async () => {
    const [x, y] = await MouseService.getPosition();
    const region = new Region(x - SCREENSHOT.WIDTH / 2, y - SCREENSHOT.HEIGHT / 2, SCREENSHOT.WIDTH, SCREENSHOT.HEIGHT);
    const screenshot = await screen.grabRegion(region);
    const rgbScreenshot = await screenshot.toRGB();
    const { width, height, data } = rgbScreenshot;
    const image = await Jimp.read({ width, height, data } as unknown as Jimp);
    return (await image.getBufferAsync(Jimp.MIME_PNG)).toString('base64');
  };
}
