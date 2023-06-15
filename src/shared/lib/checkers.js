const isZero = (value) => (value === 0);
const isOne = (value) => (value === 1);
const isMoreThanZero = (value) => (value > 0);
const isMoreThanFour = (value) => (value > 4);
const isLessOrEqualFour = (value) => (value <= 4);
const getLastDigit = (lastDigit) => (lastDigit % 10)
const isFromTwelveToFourteen = (digit) => (digit > 11 && digit < 15)

export {
  isZero,
  isOne,
  isMoreThanZero,
  isMoreThanFour,
  isLessOrEqualFour,
  getLastDigit,
  isFromTwelveToFourteen,
}