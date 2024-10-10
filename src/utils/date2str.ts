export const date2str = (dt: Date): string => {
    const formattedDate = dt.toLocaleString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    return formattedDate;
};