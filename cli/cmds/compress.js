import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream/promises';

export const compress = (params) => {
    const [inputPath, outputPath] = params;

    const zip = createBrotliCompress();
    const input = createReadStream(inputPath);
    const output = createWriteStream(outputPath);

    pipeline(input, zip, output);
}