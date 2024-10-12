
const getRandomOperator = (operatorsArray) => {

    operatorsArray = ['+', '-', '*'];
    const randomOperatorIndex = Math.floor(Math.random() * (operatorsArray.length));
    return operatorsArray[randomOperatorIndex];
}

const sumRandomArguments = (firstFactor, secondFactor) => {

    const resultSum = firstFactor + secondFactor;
    return resultSum;
}

const restRandomArguments = (firstFactor, secondFactor) => {

    const resultDiff = firstFactor - secondFactor;
    return resultDiff;
}

const multRandomArguments = (firstFactor, secondFactor) => {

    const resultMult = firstFactor * secondFactor;
    return resultMult;
}


export { getRandomOperator, sumRandomArguments, restRandomArguments, multRandomArguments };
