
// write a function to check if the string contains vowels or not

// return true if it contains true or else return false

// count of vowel ----> true 
// count of consonents----> false 

let string = "abcde";

function checkVowels(string){

    const vowels = "aeiou";

    for(let i=0; i<string.length; i++){

        if (vowels.includes(string[i].toLowerCase())){

            return true;
        }

            return false;
    }
};

  console.log(checkVowels(string));
