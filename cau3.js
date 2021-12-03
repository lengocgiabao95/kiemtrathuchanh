let randomword = "day la poiewaijfafgag"
var vcount = 0
const vowel= ['a','o','i','e','u']
var stringToArray = Array.from(randomword.toLowerCase());
function vowelCount(stringToArray) {
    for ( i = 0 ; i < stringToArray.length ; i++) {
        
        if (stringToArray.include(vowel)) {
            vcount ++ ; 
        
    
   
   
    }
    console.log(vcount);
}
vowelCount(stringToArray);

