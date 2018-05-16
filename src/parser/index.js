import {
    split,
    flatten,
    equals,
    map,
    replace,
    drop,
    dropWhile,
} from 'ramda';

import {
    SEPARATOR,
    LESS,
    ADD,
} from '../constants/symbols';

const storeTerms = (dataStruct, rightSideTerms, leftSideTerms) => {
    map(rightSideTerm => {
        let a = 0;
        let p = drop(1, dropWhile(c => c !== '^' , rightSideTerm));
        dataStruct.terms.rightSide = [
            ...dataStruct.terms.rightSide,
            {
                a,
                p,
            },
        ];
    }, rightSideTerms);

    map(leftSideTerm => {
        let a = 0;
        let p = drop(1, dropWhile(c => c !== '^' , leftSideTerm));
        dataStruct.terms.leftSide = [
            ...dataStruct.terms.leftSide,
            {
                a,
                p,
            },
        ];
    }, leftSideTerms);
    return dataStruct;
};

const getTerms = side => {
    side = replace(/ /g, '', side);
    let terms = split(ADD, side);
    terms = flatten(map(term => split(LESS, term), terms));
    return terms;
};

const parse = (dataStruct, arg) => {
    const sides = split(SEPARATOR, arg);
    const leftSide = sides[0];
    const rightSide = sides[1];
    const leftSideTerms = getTerms(leftSide);
    const rightSideTerms = getTerms(rightSide);
    console.log('leftSideTerms: ', leftSideTerms);
    dataStruct = storeTerms(dataStruct, rightSideTerms, leftSideTerms)
    return dataStruct;
};

export default parse;