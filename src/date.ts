let deadline: Date = new Date(2024, 10, 2, 11, 45);

console.log(deadline);

const formattedDate = deadline.toLocaleString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
});

console.log(formattedDate);