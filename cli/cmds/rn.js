import { renameSync } from 'fs';

export const rn = (params) => {
    const [inputPath, outputPath] = params;
    renameSync(inputPath, outputPath);
}