import {
    equals,
    length,
} from 'ramda'

import { ARGS_NUMBER } from './constants/parsing';
import { argsExit } from './exit';

export const getArg = () => {
    const args = process.argv;
    if(!equals(length(args), ARGS_NUMBER)) argsExit();
    return args[2];
}