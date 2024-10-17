export {};
import { Todo } from "./types";
import { submissionCheck } from "./utils/submissionCheck";
import { timeCheck } from "./utils/timeCheck";

const todo1: Todo = {
    id: 1,
    name: "TypeScriptの勉強",
    priority: 3,
    isDone: true,
    deadline: new Date(2024, 9, 16, 15, 45),
};

const todo2: Todo = {
    id: 1,
    name: "基礎物理3の宿題",
    priority: 1,
    isDone: false,
    deadline: new Date(2024, 9, 8, 16, 0),
};

console.log(submissionCheck(todo1));
console.log(submissionCheck(todo2));