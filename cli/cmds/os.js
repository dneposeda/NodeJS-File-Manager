import { arch, cpus, EOL, homedir, userInfo } from 'os';
import { messages } from '../../config/index.js';

export const os = (params) => {
    const param = params[0];
    const informationOsCommands = {
        '--EOL': () => JSON.stringify(EOL),
        '--cpus': () => cpus(),
        '--homedir': () => homedir(),
        '--username': () => userInfo().username,
        '--architecture': () => arch(),
    };

    messages.show(informationOsCommands[param]());
}
