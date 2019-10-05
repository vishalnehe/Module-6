/*eslint-env browser*/
/*jslint-env browser*/

var i;
result = "";

for(i = 1; i <=100; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        result += ("Marco! Polo!" + "\n");
    }else if(i % 3 === 0){
        result += ("Marco!" + "\n");
    }else if(i % 5 === 0){
        result += ("Polo!" + "\n");
    }else{
        result += (String(i) + "\n");
    }
}

window.console.log(result);