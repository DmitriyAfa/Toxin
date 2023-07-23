import {
  isLessOrEqualFour, isMoreThanFour, isMoreThanZero, isOne, isZero,
} from '@/shared/lib/checkers';

function createAmenitiesText(amenities) {
  if (+amenities.first === 0 && +amenities.second === 0) {
    return 'Выберите удобства';
  }

  const isFourOrLessAndMoreFour = (digit) => (
    isLessOrEqualFour(digit) && isMoreThanZero(digit)
  );

  const createBedroomText = () => {
    const text = [];
    if (isOne(amenities.first)) text.push(`${amenities.first} спальня`);

    if (isFourOrLessAndMoreFour(amenities.first) && !isOne(amenities.first)) text.push(`${amenities.first} спальни`);
    if (isMoreThanFour(amenities.first) || isZero(amenities.first)) text.push(`${amenities.first} спален`);

    return text;
  };

  const createBedText = () => {
    const text = [];
    if (isOne(amenities.second)) text.push(`${amenities.second} кровать`);

    if (isFourOrLessAndMoreFour(amenities.second) && !isOne(amenities.second)) text.push(`${amenities.second} кровати`);
    if (isMoreThanFour(amenities.second) || isZero(amenities.second)) text.push(`${amenities.second} кроватей`);

    return text;
  };

  const result = [...createBedroomText(), ...createBedText()].join(', ');

  return `${result}...`;
}

export default createAmenitiesText;
