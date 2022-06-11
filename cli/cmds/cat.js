import { createReadStream } from 'fs';
import { messages } from '../../config/index.js';


export const cat = (params) => {
    const [ pathFile ] = params;
    const encoding = 'utf-8';
    const readStream = createReadStream(pathFile, encoding);

    readStream.on('data', (chunk) => {
        messages.show(chunk.toString());
    });
}