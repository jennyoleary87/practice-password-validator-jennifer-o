/*
Task
Write a program to prompt the user for a password. The password should meet all
these requirements:
● The password must be at least 8 characters long.
● The password must contain at least one uppercase letter.
● The password must contain at least one number.
● If the password does not meet all the requirements, the program should
keep asking the user for a new password until they provide a valid one.
Your application should:
● Use readlineSync.question() to prompt a user for input.
● Prompt a user to enter a password.
● Loop through the password to ensure that it meets the password
requirements, using the appropriate iteration statement(s) to do so. Make
sure you consider how iteration affects top-to-bottom execution of your code
and when a while or do-while loop would be more appropriate.
● Return one of the following statements:
○ If the password meets the requirements, a statement to let the user
know they have been successful
○ If the password does NOT meet the requirements, a statement to let
the user know their password does not meet the requirements
*/

const readlineSync = require('readline-sync');

function validatePassword() {
    let isValid = false;
    let password;

    // Use readlineSync.question() to prompt user for input    
    // prompt user to enter a password    
    do {
        password = readlineSync.question('Enter password: ');

        let isLongEnough = false
        let hasUpperCase = false;
        let hasNumber = false;

        // must be at least 8 characters long
        if (password.length >= 8) {
            isLongEnough = true;
        }

        // check for uppercase and number
        for (let i = 0; i < password.length; i++) {
            const char = password.charAt(i);

            // must contain at least one number
            if (!isNaN(parseInt(char))) {
                hasNumber = true;
            }

            // must contain at least one uppercase letter
            if (char === char.toUpperCase() && char !== char.toLowerCase()) {
                hasUpperCase = true;
            }
        }

        isValid = isLongEnough && hasNumber && hasUpperCase;

        if (isValid) {
            console.log("Success! Your password meets all requirements.");
        } else {
            console.log("Password does not meet the requirements:");
            if (!isLongEnough) console.log("- Password must be at least 8 characters long");
            if (!hasUpperCase) console.log("- Password must contain at least one uppercase letter");
            if (!hasNumber) console.log("- Password must contain at least one number");
            console.log("Please try again.");
        }
    } while (!isValid);
}

validatePassword();
