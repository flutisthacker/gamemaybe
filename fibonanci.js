
var n,i,count;
let memo=[]
count=25;
for(i=0;i<count;++i){
console.log(fib(i,memo))
}

function fib(i,memo){
    if(i==0){
        return 0;
    }else if(i==1){
        return 1;
    }else{
        memo[i]=fib(i-1,memo)+fib(i-2,memo);
    }
    return memo[i];
}