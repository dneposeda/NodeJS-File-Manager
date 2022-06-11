import { exit } from 'process';
import { messages } from '../config/index.js';

export const closeCliInterface = (username) => {
    if (username) messages.showBye(username);
    exit();
}
