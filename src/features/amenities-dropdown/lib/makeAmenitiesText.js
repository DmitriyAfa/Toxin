function makeAmenitiesText(amenities) {
  const isZero = (value) => (value === 0);
  const isOne = (value) => (value === 1);
  const isMoreThanZero = (value) => (value > 0);
  const isMoreThanFour = (value) => (value > 4);
  const isLessOrEqualFour = (value) => (value <= 4);

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

  const makeBathroomText = () => {
    const text = []
    if (isOne(amenities.third)) text.push(`${amenities.third} ванная комната`)
    if (isLessOrEqualFour(amenities.third) && isMoreThanZero(amenities.third) && !isOne(amenities.third)) text.push(`${amenities.third} ванные комнаты`)
    if (isMoreThanFour(amenities.third) || isZero(amenities.third)) text.push(`${amenities.third} ванных комнат`)

    return text;
  }

  return [...makeBedroomText(), ...makeBedText(), ...makeBathroomText()];
}

export { makeAmenitiesText };