import { isLessOrEqualFour, isMoreThanFour, isMoreThanZero, isOne, isZero, getLastDigit, isFromTwelveToFourteen } from "@/shared/lib/checkers"

function makeGuestsText(guests) {
  let sum = guests.first + guests.second + guests.third;
  let lastDigit = getLastDigit(sum);
  let text = '';

  if (isOne(sum) || isOne(lastDigit) && sum !== 11) return `${sum} гость`
  if (isLessOrEqualFour(sum) && isMoreThanZero(sum) && !isOne(sum) || !isFromTwelveToFourteen(sum) && isLessOrEqualFour(lastDigit) && isMoreThanZero(lastDigit) && !isOne(lastDigit)) return `${sum} гостя`
  if (isMoreThanFour(sum) || isZero(sum)) return `${sum} гостей`
}

export { makeGuestsText };