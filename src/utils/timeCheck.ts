import { Todo } from "../types";
export const timeCheck = ({deadline, isDone}: Todo): boolean => {
    const currentDate = new Date();
    return currentDate > deadline && !isDone;
};