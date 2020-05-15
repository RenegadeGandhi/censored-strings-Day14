
const notCensored = (censored, vowels) => {
    //sets initial to 0;
    let censoredIndex = 0;
    let vowelsIndex = 0;

    //turns censored word into array;
    let censoredArr = censored.split("");

    /* Loop through censored word.
    Replace position of asterisk in censored array,
     with current index of vowel so no same letter is used twice.
     */
    while (censoredIndex <= censored.length){
        if(censored[censoredIndex] === "*"){
            censoredArr.splice(censoredIndex, 1, vowels[vowelsIndex]);
            vowelsIndex++;
        }

        //move to next index in censored word
        censoredIndex++;
    }

    //Join censored array after loop is done.
    return censoredArr.join("");
    
}

notCensored("c*ns*r*d", "eoe")