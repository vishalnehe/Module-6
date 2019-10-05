/*eslint-env browser*/
/*jslint-env browser*/

var number1;
var number2;

number1 = parseInt(window.prompt("Enter the 1st number"));
number2 = parseInt(window.prompt("Enter the 2nd number"));

if(number1 > number2) {
    window.document.write(number1 + " is greater than " + number2);
} else if(number2 > number1){
    window.document.write(number2 + " is greater than " + number1);
} else{
    window.document.write("Both the numbers are equal");
}
