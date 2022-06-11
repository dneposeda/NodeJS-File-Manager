import { messages } from '../../config/index.js';
import { readFileSync } from 'fs';
import { createHash } from 'crypto';

export const hash = (params) => {
    const [inputPath] = params;
    const encoding = 'utf8';

    const fileData = readFileSync(inputPath, encoding)

    const hash = createHash('sha256');
    const hex = hash.update(fileData).digest('hex');

    messages.show(hex);
}