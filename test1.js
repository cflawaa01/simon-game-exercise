var string_test = [];
var pair = 0;
var testa = 0;
function stringTest(target){


var open = {
    "{" : "}",
    "[" : "]",
    "(" : ")"
}
var close = {
    "}" : true,
    "]" : true,
    ")" : true
}
for(i=0;i<target.length;i++){
    if (open.hasOwnProperty(target[i]) ){
        string_test.push(open[target[i]]);
        testa +=1
        
    }
    else if (close[target[i]]){
        if (target[i] != string_test[string_test.length-1] ){
            
            return 0
        }
        else {

        
       
         pair += 1;
         testa -= 1;
    
            string_test.pop();}
    }
}
if ( testa != 0){
    return 0
}
else{
return ("1"+pair)
}
}

console.log(stringTest("(b([ob]er)) b(ob[e])"))