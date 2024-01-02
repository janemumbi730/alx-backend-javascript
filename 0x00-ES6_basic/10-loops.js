export default function appendToEachArrayValue(array, appendString) {
  const arraynew = [];
  for (const value of array) {
    arraynew.push(`${appendString}${value}`);
  }
  return arraynew;
}
