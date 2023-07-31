import { RATE_DECIMALS } from '@/constants';

export const fixNumber = (value, float = RATE_DECIMALS) =>
  +value.toFixed(float);

export const shortenString = (str, length = 25) => {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length).concat('…');
};

export const filterObjectsByFieldPattern = (objArray, pattern) =>
  objArray.filter((obj) => checkObjectFieldsMatch(obj, pattern));

function checkObjectFieldsMatch(obj, pattern) {
  return Object.values(obj).some(
    (value) => typeof value === 'string' && checkStringMatch(value, pattern),
  );
}

function checkStringMatch(str, pattern) {
  return str.toLowerCase().includes(pattern.trim().toLowerCase());
}
