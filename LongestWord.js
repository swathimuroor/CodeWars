// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.
// There will only be one 'longest' word.


function findLongest(str) {
  
    const spl = str.split(" ");
    let longest = 0

    for (let i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length
        }
    }
    return longest
}

//sample test
Test.describe("Basic tests",_=>{
    Test.assertEquals(findLongest("The quick white fox jumped around the massive dog"), 7);
    Test.assertEquals(findLongest("Take me to tinseltown with you"), 10); 
    Test.assertEquals(findLongest("Sausage chops"), 7); 
    Test.assertEquals(findLongest("Wind your body and wiggle your belly"), 6); 
    Test.assertEquals(findLongest("Lets all go on holiday"), 7); 
})

//other solutions
const findLongest = s => Math.max(...s.split(" ").map(x => x.length));




