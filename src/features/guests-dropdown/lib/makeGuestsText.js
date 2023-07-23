import {
  isLessOrEqualFour,
  isMoreThanFour,
  isMoreThanZero,
  isOne,
  isZero,
  getLastDigit,
  isFromTwelveToFourteen,
} from '@/shared/lib/checkers';

function createGuestsText(guests) {
  if (+guests.first === 0 && +guests.second === 0) {
    return 'Сколько гостей';
  }
  const sum = guests.first + guests.second + guests.third;
  const lastDigit = getLastDigit(sum);
  const lastDigitsAreOne = (digit1, digit2) => (isOne(digit1) || isOne(digit2));

  if (lastDigitsAreOne(sum, lastDigit) && sum !== 11) return `${sum} гость`;
  const isFourOrLessAndIsNotOne = (digit) => (
    isLessOrEqualFour(digit) && isMoreThanZero(digit) && !isOne(digit)
  );
  const sumIsNotFrom12To14AndLastDigitIsLessOrEqualFour = (_sum, _lastDigit) => (
    !isFromTwelveToFourteen(_sum) && isLessOrEqualFour(_lastDigit)
  );
  const isFourOrLessOrSumIsNotFrom12To14AndLastDigitIsLessOrEqualFour = () => (
    isFourOrLessAndIsNotOne(sum) || sumIsNotFrom12To14AndLastDigitIsLessOrEqualFour(sum, lastDigit)
  );
  const isMoreThanZeroAndIsNotOne = (_lastDigit) => (
    isMoreThanZero(_lastDigit) && !isOne(_lastDigit)
  );
  /**
   !!!
    Чтобы корректно передать смысл приходиться использовать на столько длинные названия.
    Пока не пойму как именно могу изменить название и оставить весь смысл
  */
  if (isFourOrLessOrSumIsNotFrom12To14AndLastDigitIsLessOrEqualFour() && isMoreThanZeroAndIsNotOne(lastDigit)) return `${sum} гостя`;
  if (isMoreThanFour(sum) || isZero(sum)) return `${sum} гостей`;

  return '';
}

export default createGuestsText;
