import {
    prop,
    find,
    propEq,
    times,
    inc,
} from 'ramda';

const getReducedEquation = dataStruct => {
    const { terms: { rightSide, leftSide }, polynomialDegree } = dataStruct;
    let reducedEquation = [];
    times(i => {
        reducedEquation = [
            ...reducedEquation,
            {
                a: (prop('a', find(propEq('p', i), leftSide)) || 0) - (prop('a', find(propEq('p', i), rightSide)) || 0),
                p: i,
            },
        ]
    },inc(polynomialDegree))
    dataStruct = {
        ...dataStruct,
        reducedEquation,
    }
    return dataStruct;
};

export default getReducedEquation;