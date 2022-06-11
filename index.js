import { argv, stdin, stdout, cwd } from 'process';
import { homedir } from 'os';
import { createInterface } from 'readline';
import { getArgValue } from './utils/index.js';
import { closeCliInterface, runCliCommand } from './cli/index.js';
import { exitCli, messages } from "./config/index.js";


const init = async () => {
    const username = getArgValue(argv,'--username=');
    process.chdir(homedir());

    messages.showWelcome(username);
    messages.showCurrentPath(cwd());

    const cliInterface = createInterface({
        input: stdin,
        output: stdout,
    });

    cliInterface.prompt();

    cliInterface.on('line', (input) => {
        try {
            runCliCommand(input);
        } catch (e) {
            if (e === exitCli) cliInterface.close();
        }

        cliInterface.prompt()
    });

    cliInterface.on('SIGINT', () => {
        cliInterface.close();
    });

    cliInterface.on('close', () => {
        closeCliInterface(username)
    });
};


init();