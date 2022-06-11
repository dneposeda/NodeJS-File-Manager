import { cwd } from 'process';
import { checkValidCommand } from '../utils/index.js';
import { commands, exitCli, messages } from '../config/index.js';

export const runCliCommand = (input) => {
    if (!input) return;

    if (input === exitCli) throw exitCli;

    const [command, ...params] = input.split(' ');

    if (checkValidCommand(commands, command, params)) {
        const cmd = commands.find(cmd => cmd.cmd === command)

        try {
            cmd.run(params)
        }
        catch {
            messages.showOperationFailed();
        }
    } else {
        messages.showInvalidInput();
    }

    messages.showCurrentPath(cwd())
}
