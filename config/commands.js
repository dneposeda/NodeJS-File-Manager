import { add, cat, cd, compress, cp, decompress, hash, ls, mv, os, rm, rn, up } from '../cli/cmds/index.js';

export const commands = [
    {
        cmd: 'up',
        countParams: 0,
        run: () => up(),
    },
    {
        cmd: 'cd',
        countParams: 1,
        run: (params) => cd(params),
    },
    {
        cmd: 'ls',
        countParams: 0,
        run: () => ls(),
    },
    {
        cmd: 'cat',
        countParams: 1,
        run: (params) => cat(params),
    },
    {
        cmd: 'add',
        countParams: 1,
        run: (params) => add(params),
    },
    {
        cmd: 'rn',
        countParams: 2,
        run: (params) => rn(params),
    },
    {
        cmd: 'cp',
        countParams: 2,
        run: (params) => cp(params),
    },
    {
        cmd: 'mv',
        countParams: 2,
        run: (params) => mv(params),
    },
    {
        cmd: 'rm',
        countParams: 1,
        run: (params) => rm(params),
    },
    {
        cmd: 'os',
        countParams: 1,
        run: (params) => os(params),
    },
    {
        cmd: 'hash',
        countParams: 1,
        run: (params) => hash(params),
    },
    {
        cmd: 'compress',
        countParams: 2,
        run: (params) => compress(params),
    },
    {
        cmd: 'decompress',
        countParams: 2,
        run: (params) => decompress(params),
    },
];

export const exitCli = '.exit';
