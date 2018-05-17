import {
    prop,
    find,
    propEq,
} from 'ramda';

const getReducedEquation = dataStruct => {
    const { terms: { rightSide, leftSide } } = dataStruct;
    let reducedEquation = [
        {
            a: (prop('a', find(propEq('p', 0), leftSide)) || 0) - (prop('a', find(propEq('p', 0), rightSide)) || 0),
            p: 0,
        },
        {
            a: (prop('a', find(propEq('p', 1), leftSide))|| 0) - (prop('a', find(propEq('p', 1), rightSide))|| 0),
            p: 1,
        },
        {
            a: (prop('a', find(propEq('p', 2), leftSide)) || 0) - (prop('a', find(propEq('p', 2), rightSide)) || 0),
            p: 2,
        },
    ];
    dataStruct = {
        ...dataStruct,
        reducedEquation,
    }
    return dataStruct;
};

export default getReducedEquation;