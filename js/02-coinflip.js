/*eslint-env browser*/
/*jslint-env browser*/

var coinFlip;
var decision;
var choice;
var quit = false;

while(!quit){
    choice = window.prompt("Enter your choice: Heads or Tails");
    coinFlip = Math.floor(Math.random() * 10);
    (coinFlip < 6) ? decision = "Heads" : decision = "Tails"

    switch(choice){
        case "Heads": 
            if(decision === "Heads"){
                window.alert("The flip was heads and you chose heads...you win!");
            }else{
                window.alert("The flip was heads but you chose tails...you lose!");
            }
            quit = true;
            break;
        
        case "Tails":
            if(decision === "Tails"){
                window.alert("The flip was tails and you chose tails...you win!");
            }else{
                window.alert("The flip was tails but you chose heads...you lose!");
            }
            quit = true;
            break;
        
        default:
            window.alert("Please enter a valid choice!");
            break;
    }
}
