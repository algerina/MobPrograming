
function plusMinus(arr) {
    // Write your code here
    let pos = arr.filter(n => n > 0).length/arr.length
    let min = arr.filter(n => n < 0).length/arr.length
    let zero = arr.filter(n => n ==0).length/arr.length
    
    console.log(pos.toFixed(6),
    "\n", min.toFixed(6), 
     "\n", zero.toFixed(6),
);
    

}