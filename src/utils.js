import {
    equals,
    length,
    map,
} from 'ramda'

import { ARGS_NUMBER } from './constants/parsing';
import { argsExit } from './exit';

export const getArg = () => {
    const args = process.argv;
    if(!equals(length(args), ARGS_NUMBER)) argsExit();
    return args[2];
};

export const getPolynomialDegree = dataStruct => {
    const { terms: { rightSide, leftSide } } = dataStruct;
    let maxDegree = 0;
    map(term => {
        let { p } = term;
        if(p > maxDegree) maxDegree = p;
    },rightSide);
    map(term => {
        let { p } = term;
        if(p > maxDegree) maxDegree = p;
    },leftSide);
    return maxDegree;
};