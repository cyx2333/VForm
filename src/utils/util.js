export const generateId = function () {
  return Math.floor(Math.random() * 100000 + Math.random() * 20000 + Math.random() * 5000);
};

export function deepCopyArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array");
  }

  const copy = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      copy[i] = deepCopyArray(arr[i]);
    } else if (typeof arr[i] === 'object' && arr[i] !== null) {
      copy[i] = deepCopyObject(arr[i]);
    } else {
      copy[i] = arr[i];
    }
  }

  return copy;
}

export function deepCopyObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const copy = {};

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      copy[key] = deepCopyArray(obj[key]);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      copy[key] = deepCopyObject(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }

  return copy;
}