function evenOdd (){
    let choice = prompt("Enter 'odd' or 'even' to display numbers accordingly:");

let range = prompt("Enter the range (how many numbers):");
range = parseInt(range);

if (choice.toLowerCase() === 'odd') {
document.write("Odd numbers from 1 to " + range + `: <br>`);
for (var i = 1; i <= range; i++) {
    if (i % 2 !== 0) {
     document.write(`<br>` + i);
    }
}
} else if (choice.toLowerCase() === 'even') {
document.write("Even numbers from 1 to "+ range + `: <br>`);
for (var i = 1; i <= range; i++) {
    if (i % 2 === 0) {
        document.write(`<br>` + i);  
    }
}
} else {
console.log("Invalid choice! Please enter 'odd' or 'even'.");
}
}
// 2nd Assignment
function Infinite () {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    const result = num1 / num2;

    if (isFinite(result)) {
        console.log("Result of : " + result);
    } else {
        alert("Error: Infinite division result!");
    }
}
