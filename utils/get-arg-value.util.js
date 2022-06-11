export const getArgValue = (args, prefixArg) => {
    let attrValue = '';

    args.forEach((value) => {
        if (value.startsWith(prefixArg)) {
            attrValue = value.replace(prefixArg,'');
        }
    });

    return attrValue;
}
