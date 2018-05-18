import {
    split,
    flatten,
    equals,
    map,
    replace,
    drop,
    dropLast,
    dropWhile,
    dropLastWhile,
    find,
    prop,
    propEq,
} from 'ramda';

import {
    SEPARATOR,
    LESS,
    ADD,
    MULT,
    POWER,
} from '../constants/symbols';
import getReducedEquation from './reduce';
import { getPolynomialDegree } from '../utils';

const storeTerms = (dataStruct, rightSideTerms, leftSideTerms) => {
    map(rightSideTerm => {
        let a = parseFloat(dropLast(1, dropLastWhile(c => c !== MULT , rightSideTerm)));
        let p = parseFloat(drop(1, dropWhile(c => c !== POWER , rightSideTerm)));
        dataStruct.terms.rightSide = [
            ...dataStruct.terms.rightSide,
            {a,p},
        ];
    }, rightSideTerms);

    map(leftSideTerm => {
        let a = parseFloat(dropLast(1, dropLastWhile(c => c !== MULT , leftSideTerm)));
        let p = parseFloat(drop(1, dropWhile(c => c !== POWER , leftSideTerm)));
        dataStruct.terms.leftSide = [
            ...dataStruct.terms.leftSide,
            {a,p},
        ];
    }, leftSideTerms);
    return dataStruct;
};

const getTerms = side => {
    side = replace(/ /g, '', side);
    let terms = split(ADD, side);
    terms = flatten(map(term => term.split(/(?=-)/g), terms));
    return terms;
};

const detDiscriminant = dataStruct => {
    const { reducedEquation } = dataStruct;
    const a = prop('a', find(propEq('p', 2), reducedEquation));
    const b = prop('a', find(propEq('p', 1), reducedEquation));
    const c = prop('a', find(propEq('p', 0), reducedEquation));
    const discriminant = (b * b) - (4 * a * c);
    return {
        ...dataStruct,
        discriminant,
    }
};

const parse = (dataStruct, arg) => {
    const sides = split(SEPARATOR, arg);
    const leftSide = sides[0];
    const rightSide = sides[1];
    const leftSideTerms = getTerms(leftSide);
    const rightSideTerms = getTerms(rightSide);
    dataStruct = storeTerms(dataStruct, rightSideTerms, leftSideTerms);
    dataStruct = getPolynomialDegree(dataStruct);
    dataStruct = getReducedEquation(dataStruct);
    dataStruct = detDiscriminant(dataStruct);
    return dataStruct;
};

export default parse;