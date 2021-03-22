//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
    let resultArr = [];
    for(let i=0;i<arr.length;i++){
      if(arr[i]!==0) resultArr.push(arr[i]);
    }
    for(let i=resultArr.length;i<arr.length;i++){
       resultArr.push(0);
    }
    return resultArr
}


//sample test

Test.assertEquals(
    JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1])),
    JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
);

// other solutions

var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

const moveZeros = (arr) =>{
return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
];
}

