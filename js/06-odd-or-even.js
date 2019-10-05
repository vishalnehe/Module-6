/*eslint-env browser*/
/*jslint-env browser*/

var i;
result = "";

for(i = 0; i <= 15; i++){
    (i % 2 === 0) ? result += ("\"" + String(i) + " is even\"" + "\n") : result += ("\"" + String(i) + " is odd\"" + "\n")
}

window.console.log(result);
