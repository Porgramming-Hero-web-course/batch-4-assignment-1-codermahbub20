{
/// Problem Number Two

    const removeDuplicates = (numbers: number[]):number[]=>{
        const singleNumbers : number[] = [];
        for(const num of numbers){
            if(!singleNumbers.includes(num)){
                singleNumbers.push(num)
            }
        }

        return singleNumbers;
    }

    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    console.log(result)



}