import { chdir } from 'process';

export const cd = (params) => {
    const [ path ] = params;

    chdir(path);
}