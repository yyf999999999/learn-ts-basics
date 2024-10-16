export {};
import { Todo } from "./types";
import { check } from "./utils/check";

const todo1: Todo = {
    name: "TypeScriptの勉強",
    priority: 3,
    isDone: false,
    deadline: new Date(2024, 9, 11, 9, 45),
};

const todo2: Todo = {
    name: "基礎物理3の宿題",
    priority: 1,
    isDone: false,
    deadline: new Date(2024, 9, 8, 16, 0),
};

console.log(check(todo1));
console.log(check(todo2));