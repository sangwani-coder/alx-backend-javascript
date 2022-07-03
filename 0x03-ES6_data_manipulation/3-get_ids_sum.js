export default function getStudentIdsSum(value) {
  return value.reduce((prev, curr) => prev + curr.id, 0);
}