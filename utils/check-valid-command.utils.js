export const checkValidCommand = (commands, command, params = []) => {
    const clearParams = params.filter(param => param.trim() !== '');

    return commands.some(item => (
        item.cmd === command && item.countParams === clearParams.length
    ));
}
