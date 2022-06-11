import { cwd } from 'process';
import { createWriteStream } from 'fs';

export const add = (params) => {
    const [ fileName ] = params;
    const path = cwd();

    createWriteStream(`${path}/${fileName}`)
}