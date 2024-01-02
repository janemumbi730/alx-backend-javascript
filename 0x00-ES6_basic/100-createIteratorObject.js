export default function createIteratorObject(report) {
  const answer = [];
  for (const idx of Object.values(report.allEmployees)) {
    answer.push(...idx);
  }
  return answer;
}
