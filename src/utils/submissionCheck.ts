import { Todo } from "../types";
import dayjs from "dayjs"
export const submissionCheck = ({name, deadline, isDone}: Todo): string => {
    if (isDone){
        return `【済】${name}の宿題`;
    }
    else{
        const currentDate: Date = new Date();
        const difference: number= Math.floor(dayjs(deadline).diff(dayjs(currentDate)) / 3600000);
        if (currentDate > deadline){
            return `【未】${name}の宿題 (期限を${difference * -1}時間超過)`;
        }else{
            return `【未】${name}の宿題 (期限まで残り${difference}時間)`;
        }
    }
}