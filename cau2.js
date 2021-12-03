let array = [1,2,3,4,5,6,7,8,9,10];
function findIndex(a,array) {
    for(i = 0 ; i < array.length ; i++) {
        if( a == array[i]) {
            return i;
        }
    }
}
console.log(findIndex(2,array));