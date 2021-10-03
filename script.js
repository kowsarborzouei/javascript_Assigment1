console.log("tavan_2")
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

console.log("perfect_number")

// function is_perfect(number)
// {
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
// }

console.log("adad aval")
function baze(n,m){
        for (let i=n+1;i<m;i++)
            aval(i)
}
function aval(a){
        let i=2;
        for (i; i<a;i++)
            if(a%i===0) break;
        if(i===a)
            console.log(a)
}
console.log(baze(10,30))

console.log("hard code")

function isHard(n){
        let strNum =n.toString();
        let m = strNum.length;
        for(let i=0;i < m;i++){
            if(!isPrime(Number(strNum.substring(0,m-i)))){
                return false;
            }
        }
        return true;
}

function hardcode(n){
        for ( let i=10**(n-1);i<10**n;i++){
            if (hardcode(i)){
                console.log(i)
            }
        }
}

console.log(hardcode(3))


console.log("FizzBuzz")
const fizzbuzz=(num)=>{
        if(!(num%3)){
            console.log(num,'fizz')
        }else if(!(num%5)) {
            console.log(num, 'buzz')
        }else if(!(num%3) && !(num%5)){
            console.log(num,'fizzbuzz')
        }else {
            console.log(num)
        }
}

