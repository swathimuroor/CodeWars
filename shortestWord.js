//Simple, given a string of words, return the length of the shortest word(s).

//String will never be empty and you do not need to account for different data types.

function findShort(s){
    return  (s.split(' ')).map(e => e.length).sort(compareNumbers)[0]
  }
  function compareNumbers(a, b) {
    return a - b;
  }

 
//sample test

  Test.describe("Example tests",_=>{
    Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
    });


// other solutions

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}

const findShort = (s) => s.split(' ')
                        .sort((a, b) => b.length - a.length)
                        .pop().length;