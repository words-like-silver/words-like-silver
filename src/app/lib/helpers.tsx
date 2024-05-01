export function debounce(func: Function, delay: number) {
    let time: NodeJS.Timeout | undefined;
    return (...arg: any) => {
        clearTimeout(time);
        time = setTimeout(() => {
            return func(...arg);
        }, delay);
    };
}
