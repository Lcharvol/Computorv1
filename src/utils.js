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
    return {
        ...dataStruct,
        polynomialDegree: maxDegree,
    };
};

export const getSqrt = (nb, min, max) => {
    let middle = (min + max) / 2;
    let x = middle * middle;
    if (x === nb) {
        return middle;
    } else if (x < nb) {
        return getSqrt(nb, middle, max);
    } else {
        return getSqrt(nb, min, middle);
    }
};