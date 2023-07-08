import { isLessOrEqualFour, isMoreThanFour, isMoreThanZero, isOne, isZero } from "@/shared/lib/checkers"

function makeAmenitiesText(amenities) {

  if (+amenities.first === 0 && +amenities.second === 0) {
    return 'Выберите удобства';
  }

  const makeBedroomText = () => {
    const text = []
    if (isOne(amenities.first)) text.push(`${amenities.first} спальня`)
    if (isLessOrEqualFour(amenities.first) && isMoreThanZero(amenities.first) && !isOne(amenities.first)) text.push(`${amenities.first} спальни`)
    if (isMoreThanFour(amenities.first) || isZero(amenities.first)) text.push(`${amenities.first} спален`)

    return text;
  }

  const makeBedText = () => {
    const text = []
    if (isOne(amenities.second)) text.push(`${amenities.second} кровать`)
    if (isLessOrEqualFour(amenities.second) && isMoreThanZero(amenities.second) && !isOne(amenities.second)) text.push(`${amenities.second} кровати`)
    if (isMoreThanFour(amenities.second) || isZero(amenities.second)) text.push(`${amenities.second} кроватей`)

    return text;
  }

  const result = [...makeBedroomText(), ...makeBedText()].join(', ');

  return `${result}...`;
}

export { makeAmenitiesText };