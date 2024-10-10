export {};
import dayjs from "dayjs";
import 'dayjs/locale/ja';

dayjs.locale('ja');

const deadline: Date = new Date(2024, 10, 2, 11, 45);
const createdAt: Date = new Date();

const str =
    `期日 ${dayjs(deadline).format("YYYY/MM/DD(ddd) HH:mm")}` +
    `(登録日: ${dayjs(createdAt).format("YYYY/MM/DD(ddd) HH:mm")})`;
console.log(str);