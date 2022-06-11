import { createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

export const decompress = (params) => {
    const [inputPath, outputPath] = params;

    const zip = createBrotliDecompress();
    const input = createReadStream(inputPath);
    const output = createWriteStream(outputPath);

    pipeline(input, zip, output);
}