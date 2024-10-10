export {};
import { Todo } from "./types";
import { printTodo } from "./utils/printTodo";

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
    deadline: new Date(2024, 9, 10, 16, 0),
};

console.log(printTodo(todo1));
console.log(printTodo(todo2));