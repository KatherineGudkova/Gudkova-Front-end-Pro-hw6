let command;

while (command !== "1" || command !== "2" || command !== "3" || command !== "4") {

    command = prompt(`Calculator
-----------------------------------------------------------
To select an action, enter the command number:
1 - Add
2 - Subtract
3 - Multiply
4 - Divide
-----------------------------------------------------------
*Selecting a non-existent command will result in an error`);
    
    if (command == "1") {
        const firstNumber = Number(prompt(`Enter the first number:`));
        const secondNumber = Number(prompt(`Enter the second number:`));

        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            alert(`One of the entered values ​​is not a number.`);
            break;
        } else {
            const add = firstNumber + secondNumber;

            alert(`${firstNumber} + ${secondNumber} = ${add}`);

            break; 
        }

        
    }
    else if (command == "2") {
        const firstNumber = Number(prompt(`Enter the first number:`));
        const secondNumber = Number(prompt(`Enter the second number:`));

        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            alert(`One of the entered values ​​is not a number.`);
            break;
        } else {
            const sub = firstNumber - secondNumber;

            alert(`${firstNumber} - ${secondNumber} = ${sub}`);

            break;
        }
    }
    else if (command == "3") {
        const firstNumber = Number(prompt(`Enter the first number:`));
        const secondNumber = Number(prompt(`Enter the second number:`));

        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            alert(`One of the entered values ​​is not a number.`);
            break;
        } else {
            const mult = firstNumber * secondNumber;

            alert(`${firstNumber} * ${secondNumber} = ${mult}`);

            break;
        }
    }
    else if (command == "4") {
        const firstNumber = Number(prompt(`Enter the first number:`));
        const secondNumber = Number(prompt(`Enter the second number:`));

        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            alert(`One of the entered values ​​is not a number.`);
            break;
        } else {
            const div = firstNumber / secondNumber;

            alert(`${firstNumber} / ${secondNumber} = ${div}`);

            break; 
        }
    }
    else if (command == null) {
        break;
        }
    else {
        alert(`Error. Incorrectly entered data. Try again.`);
    }
}