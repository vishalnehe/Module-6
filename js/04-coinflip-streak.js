/*eslint-env browser*/
/*jslint-env browser*/

var coinFlip;
var result = "";

do{
    coinFlip = Math.round(Math.random());
    if(coinFlip === 0){
        result += ("Heads" + "\n");
    }
    else{
        result += ("Tails" + "\n");
    }
}while(coinFlip != 1)

window.console.log(result);