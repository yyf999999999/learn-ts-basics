export {};

const grades: number[] = [1, 2, 3, 4, 5];
const gradeListItems = grades.map((grade) => `<li>${grade}年</li>`);
// ▲▲▲ ここまでが着目してほしいところ

console.log(grades);
console.log(gradeListItems);