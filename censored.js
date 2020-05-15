
function notCensored(censored, vowels) {
    let newCensored = censored.split("*"); //removes all * in the censored word
    let i = 0;
    while (i < vowels.length) {
        result =  vowels[i];
        console.log(newCensored.join(result)); //joins elements of vowels
        i++;  
    }
    
}

notCensored("c*ns*r*d", "eoe")