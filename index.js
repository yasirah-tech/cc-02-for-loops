//1 RAN
//function countToTen(){ 
 for(var i = 1; i <= 10; i++) {
    console.log(i);
}

//2 RAN 
function countFromOne(num){
const array = [];
  for(let i = 1; i < num; i++) {
    array.push(i);
  }
 return array 
 }

//3 RAN
//function countEveryEven(){
    for (var i=0; i<=15; i++) {
        if ( i === 0 || i % 2 === 0)
        console.log(i);
  
}


//4 RAN
//function countEveryOdd(){
    for (var i=0; i<=15; i++) {
        if ( i % 2 === 1)
        console.log(i);
  }

//5
// function countEvens(){
    function countEvens(){
    for (var i=0; i<=15; i++) {
        if ( i === 1 || i % 2 === 0)
        
        console.log(i);}

    }
console.log(countFromOne(13))
