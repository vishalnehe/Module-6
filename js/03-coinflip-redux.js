/*eslint-env browser*/
/*jslint-env browser*/

var coinFlip;
var result = "";

for(var i = 0; i < 10; i++){
    coinFlip = Math.round(Math.random());
    if(coinFlip === 0){
        result += ("Heads" + "\n");
    }
    else{
        result += ("Tails" + "\n");
    }
}

window.console.log(result);