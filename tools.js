export function length(array) {
  let count = 0;
  for (const element of array) {
    count++;
  }

  return count;
}

export const arrayPush = (arrayToPush, data) => {
  arrayToPush[length(arrayToPush)] = data;
  const newArrayLength = length(arrayToPush);
  return newArrayLength;
};

export const singularPop = (arr) => {
  if (arr.length === 0) return [];
  arr.length -= 1;
  return arr;
};
