const getIntegerNumber = (min, max) => {
    const intNumber = Math.floor(Math.random() * (max - min));
    return intNumber;
};

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


export { getIntegerNumber, getRandomOperator, sumRandomArguments, restRandomArguments, multRandomArguments };
