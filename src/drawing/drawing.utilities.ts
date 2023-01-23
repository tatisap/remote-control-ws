import { CIRCLE } from './drawing.constants';

export const convertDegToRad = (deg: number): number => (deg * Math.PI) / CIRCLE.STRAIGHT_ANGLE;
