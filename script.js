//####### 4 #######
console.log("QUESTION=> tavan_2?")
function tavan(number){
    let i=0;
    while (number>2**i)
    i++;
    return 2**i;
}
console.log(tavan(95))
console.log(tavan(1010))
console.log(tavan(3512))
console.log(tavan(72))
console.log(tavan(31))
console.log(tavan(64))


//####### 5 #######
console.log("QUESTION=> Find of perfect_number?")
function is_perfect(number)
{
    for (let j=0;j<2000;j++){
        let temp = 0;
        for(let i=1;i<=j/2;i++)
        {
            if(j%i === 0)
            {
                temp += i;
            }
        }
        if(temp === j && temp !== 0)
        {
            console.log(j);
        }
    }
}
//######## 6 #######
console.log("QUESTION=> Find of number prime?")

function isPrime(n){
    for (let i = 2; i < n; i++){
        if (n%i === 0){
            return false;
        }
    }
    if (n === 1) return false;
    else return true;
}
function numPrime(a,b){
    let n = a;
    let arr = [];
    while( n < b ){
        if (isPrime(n)){
            arr.push(n);

        }
        n++;
    }
    return arr;
}
console.log(numPrime(10,30))


// ###### 7 #######
console.log("QUESTION=> hard code")

function isHard(n){
    let strNum = n.toString();
    let m = strNum.length;
    for (let i = 0; i < m; i++){
        if (!isPrime(Number(strNum.substring(0,m-i)))){
            return false;
        }
    }
    return true;
}

function HardPass(n){
    for (let i = 10**(n-1); i < 10**n; i++){
        if (isHard(i)){
            console.log(i)
        }
    }
}

HardPass(3)


// //####### 3 #######
console.log("QUESTION=>Find of FizzBuzz or fizz or buzz")
const fizzbuzz=(num)=>{
        if(!(num%3) && !(num%5)){
            console.log(num,'fizzbuzz')
        }else if(!(num%5)) {
            console.log(num, 'buzz')
        }else if(!(num% 3)){
            console.log(num,'fizzbuzz')
        }else {
            console.log(num)
        }
}
fizzbuzz(15)

// // ####### 2 #######
console.log('QUESTION=> type of string?')

function type_string(val){

    if (typeof(val) === 'string') {
        console.log('Variable is a string');
    }
    else {
        console.log('Variable is not a string');
    }
}
console.log(type_string("kowsar"))

// // ####### 1 #######

console.log('QUESTION=> find of max number?')
function max(a,b){
    if (a>b) return a;
    else return b;
}

console.log(max(70,20))
// ###### or ######
console.log("max,min")
function max(a,b){
console.log(Math.max(a,b))
}

max(5,70)