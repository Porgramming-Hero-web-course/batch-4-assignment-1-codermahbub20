{
    //

    const countWordOccurrences = (sentance: string, word: string): number => {
        const lowerCaseSentance = sentance.toLowerCase();
        const lowerCaseWord = word.toLowerCase();

        const words = lowerCaseSentance.split(" ");
        const count = words.filter(T => T === lowerCaseWord).length;

        return count;
    }

    const result = countWordOccurrences("I love typescript", "typescript");
    console.log(result)

    //
}