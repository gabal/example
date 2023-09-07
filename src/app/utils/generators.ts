export const getIdList = (amount: number = 1) => {
    return Array.apply(null, Array(amount)).map((y, i) => ({ id: i }));
}

export const getRandomWidth = (max: number = 1, min: number = 0) => {
    return Math.max(max * Math.random(), min);
}
