module.exports = function getStatistics(numbers) {

    let result = {};

    //reportsNaNForEmptyInput
    if (numbers.length === 0) {
        result.average=Number.NaN;
        result.max = Number.NaN;
        result.min = Number.NaN;
        return result;
    }

    // reportsAverageMinMaxx
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;
    let avg = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        if (numbers[i] < min) {
            min = numbers[i];
        }
        avg += numbers[i];
    }

    result.min = min;
    result.max = max;
    result.average = (avg / numbers.length);
    return result;

}

