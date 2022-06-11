import { unlinkSync } from 'fs';

export const rm = (params) => {
    const [inputPath] = params;
    unlinkSync(inputPath);
}