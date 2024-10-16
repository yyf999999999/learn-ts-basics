import { Todo } from "../types";
export const check = ({deadline, isDone}: Todo): boolean => {
    const currentDate = new Date();
    return currentDate > deadline && !isDone;
};