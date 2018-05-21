import {
    equals,
    prop,
    find,
    propEq,
} from 'ramda';
import { printPolynomialDegree, printReducedEquation } from '../print/solution';
import print from '../print';
import { FgGreen } from '../constants/colors';

const solveFirstDegree = dataStruct => {
    const { reducedEquation } = dataStruct;
    const a = prop('a', find(propEq('p', 1), reducedEquation));
    const b = prop('a', find(propEq('p', 0), reducedEquation));
    const res = -b/a;
    print('The solution is: ', FgGreen)
    print(res, FgGreen);
};

const solveSecondDegree = dataStruct => {
    const { reducedEquation, discriminant } = dataStruct;
    let res1 = 0;
    let res2 = 0;
    const a = prop('a', find(propEq('p', 2), reducedEquation));
    const b = prop('a', find(propEq('p', 1), reducedEquation));
    if(discriminant > 0) {
        const r = Math.sqrt(discriminant);
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

const solve = dataStruct => {
    const { polynomialDegree } = dataStruct;
    printReducedEquation(dataStruct);
    if (equals(polynomialDegree, 1)) {
        printPolynomialDegree(polynomialDegree);
        solveFirstDegree(dataStruct);
    } else if (equals(polynomialDegree, 2)) {
        solveSecondDegree(dataStruct);
    }
    else {
        printPolynomialDegree(polynomialDegree);
        maxDegreeExit();
    }
};

export default solve;