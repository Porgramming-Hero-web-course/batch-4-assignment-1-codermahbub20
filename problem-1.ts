{
    //////


    const sumArray = (num: number[]): number => {
        let sum: number = 0;
        for (let index of num) {
            sum = sum + index;
        }
        return sum;
    }

    const result = sumArray([1, 2, 3, 4, 5])
    console.log(result)
    
    ////
}