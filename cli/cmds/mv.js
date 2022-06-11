import { constants, copyFileSync, unlinkSync } from 'fs';

export const mv = (params) => {
    const [inputPath, outputPath] = params;

    copyFileSync(inputPath, outputPath, constants.COPYFILE_EXCL);
    unlinkSync(inputPath);
}