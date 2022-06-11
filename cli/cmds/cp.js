import { copyFileSync, constants } from 'fs';

export const cp = (params) => {
    const [inputPath, outputPath] = params;

    copyFileSync(inputPath, outputPath, constants.COPYFILE_EXCL)
}