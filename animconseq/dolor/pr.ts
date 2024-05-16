// Assuming myTuple is a tuple of unknown elements
const myTuple: [number, string, boolean] = [1, 'string', true];

// Convert tuple to array
const anArr: (number | string | boolean)[] = [...myTuple];
