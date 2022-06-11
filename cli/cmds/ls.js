import { cwd } from 'process';
import { readdirSync } from 'fs';
import { messages } from '../../config/index.js';

export const ls = () => {
    const currenPath = cwd();
    messages.show(readdirSync(currenPath));
}