import {
    equals,
    prop,
    find,
    propEq,
} from 'ramda';

import { printPolynomialDegree } from '../print/solution';
import { FgGreen, FgRed } from '../constants/colors';
import print from '../print';
import { getSqrt } from '../utils';

export const solverZeroDegree = dataStruct => {
    const { reducedEquation, polynomialDegree } = dataStruct;
    const a = prop('a', find(propEq('p', 0), reducedEquation));
    printPolynomialDegree(polynomialDegree);
    if (equals(a, 0)) {
        print('All real number are the solution.', FgGreen);
    } else {
        print('Their is no solution.', FgRed);
    }
};

export const solveFirstDegree = dataStruct => {
    const { reducedEquation, polynomialDegree } = dataStruct;
    const a = prop('a', find(propEq('p', 1), reducedEquation));
    const b = prop('a', find(propEq('p', 0), reducedEquation));
    const res = -b/a;
    printPolynomialDegree(polynomialDegree);
    print('The solution is: ', FgGreen)
    print(res, FgGreen);
};

export const solveSecondDegree = dataStruct => {
    const { reducedEquation, discriminant } = dataStruct;
    let res1 = 0;
    let res2 = 0;
    const a = prop('a', find(propEq('p', 2), reducedEquation));
    const b = prop('a', find(propEq('p', 1), reducedEquation));
    if(discriminant > 0) {
        const r = getSqrt(discriminant, 0, discriminant);
        res1 = (-b + r) / (2 * a);
        res2 = (-b - r) / (2 * a);
        print('Discriminant is strictly positive, the two solutions are:', FgGreen);
        print(res1, FgGreen);
        print(res2, FgGreen);
    } else if(discriminant === 0) {
        res1 = -b / (2 * a)
        print('Discriminant is null, the only solution is:', FgGreen);
        print(res1, FgGreen);
    } else {
        print('Discriminant is negative, their is no solution.', FgGreen);
    };
};