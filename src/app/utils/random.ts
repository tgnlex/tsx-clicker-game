function random(max: number, min: number = 0): number {
  let diff = max - min;
  let result = min + Math.floor(Math.random() * Math.floor(diff));
  return result;
}

export default random;
