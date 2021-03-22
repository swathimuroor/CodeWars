// In this kata, you will make a function that converts between camelCase, snake_case, and kebab-case.
// You must write a function that changes to a given case. It must be able to handle all three case types:

//example: 
// js> changeCase("snakeCase", "snake")
// "snake_case"
// js> changeCase("some-lisp-name", "camel")
// "someLispName"
// js> changeCase("map_to_all", "kebab")
// "map-to-all"
// js> changeCase("doHTMLRequest", "kebab")
// "do-h-t-m-l-request"
// js> changeCase("invalid-inPut_bad", "kebab")
// undefined
// js> changeCase("valid-input", "huh???")
// undefined
// js> changeCase("", "camel")
// ""

function changeCase(identifier, targetCase){
    let count =0;
     if(identifier.split(/_/).length >1) { count+=1;}
     if(identifier.split(/[A-Z]/).length >1){ count+=1;}
     if(identifier.split(/[-]/).length >1){ count+=1;}
     
   if(count>1){
      identifier= undefined;
   }else{
     if(targetCase==="snake"){
       identifier = identifier.split(/(?=[A-Z])/).join('_').toLowerCase();
       identifier = identifier.split('-').join('_').toLowerCase();
     }else if(targetCase==="camel"){
        identifier=identifier.split('-').map((e,index) => { 
         return   index===0 ? e : e.replace(e[0],e[0].toUpperCase());
       }).join('');
         identifier=identifier.split('_').map((e,index) => { 
         return   index===0 ? e : e.replace(e[0],e[0].toUpperCase());
       }).join('');
       
     }else if(targetCase==='kebab'){
         identifier = identifier.split(/(?=[A-Z])/).join('-').toLowerCase();
         identifier = identifier.split('_').join('-');
     }else{
       identifier= undefined
     }
   }
   return identifier
 }

 
 // sample test

 // TODO: Add your own tests here!
Test.describe("changeCase", () => {
    Test.it("Should work for given examples", () => {
    
      Test.assertEquals(
        changeCase("snakeCase", "snake")
      , "snake_case");
      
      Test.assertEquals(
        changeCase("some-lisp-name", "camel")
      , "someLispName");
      
      Test.assertEquals(
        changeCase("map_to_all", "kebab")
      , "map-to-all");
      
      Test.assertEquals(
        changeCase("invalid-inPut_bad", "kebab")
      , undefined);
      
      Test.assertEquals(
        changeCase("valid-input", "huh???")
      , undefined);
      
      Test.assertEquals(
        changeCase("", "camel")
      , "");
    });
  });

  // other solutions
  function changeCase(identifier, targetCase){
    if(!/^$|^[a-z]+(([A-Z][a-z]*)+|(-[a-z]+)*|(_[a-z]+)*)$/.test(identifier)) return undefined;
     switch(targetCase){
       case 'snake': return identifier.replace(/-([a-z])|([A-Z])/g, (_,x,y) => '_'+(x||y.toLowerCase()));
       case 'camel': return identifier.replace(/[-_]([a-z])/g, (_,x) => x.toUpperCase());
       case 'kebab': return identifier.replace(/_([a-z])|([A-Z])/g, (_,x,y) => '-'+(x||y.toLowerCase()));
       default: return undefined;
     }
   }

function changeCase(i, t){
    if ( ( /[A-Z]/.test(i) + /[_]/.test(i) + /[-]/.test(i)) > 1 ) 
     return undefined;
   else if (t == "snake" ) 
     return i.replace(/[A-Z]/g,a=>'_'+a.toLowerCase()).replace(/-([a-z])/g,(_,a)=> '_'+a);
   else if ( t== 'camel') 
     return i.replace(/_/g,'-').replace(/-([a-z])/g,(_,a)=> a.toUpperCase());
   else if (t== 'kebab' )
     return i.replace(/_/g,'-').replace(/[A-Z]/g,a=>'-'+a.toLowerCase());;
 }