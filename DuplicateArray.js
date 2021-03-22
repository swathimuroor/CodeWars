// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
// For example:
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces. See test cases for more examples.
// Good luck!

function dup(s) {
    let resultArr = [];
      for(let i=0;i<s.length;i++){
        let strArray=s[i].split('');
        let newString="";
        for(let k=0;k<strArray.length;k++){
          if(k===0) {
            newString+=strArray[k];
            }else{
              let lastString =newString.split('') 
                if(!lastString[lastString.length-1].includes(strArray[k])){
                  newString+=strArray[k];
                }
              }
        }
        resultArr.push(newString)
    }
    return resultArr;
};

//samplte test

describe("Basic tests", function(){
    Test.assertDeepEquals(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']);
    Test.assertDeepEquals(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
    Test.assertDeepEquals(dup(["kelless","keenness"]), ['keles','kenes']);
    Test.assertDeepEquals(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);
    Test.assertDeepEquals(dup(["adanac","soonness","toolless","ppellee"]), ['adanac','sones','toles','pele']);
    Test.assertDeepEquals(dup(["callalloo","feelless","heelless"]), ['calalo','feles','heles']);
    Test.assertDeepEquals(dup(["putteellinen","keenness"]), ['putelinen','kenes']);
    Test.assertDeepEquals(dup(["kelless","voorraaddoosspullen","achcha"]), ['keles','voradospulen','achcha']);
});


// other solutions
function dup(s) {
    return s.map(x => x.replace(/(.)\1+/g,'$1'))
};

function dup(s) {
    return s.map(w => {
        return w.split('').filter((c, i, arr) => {
        return c !== arr[i - 1];
        }).join('');
    });
};