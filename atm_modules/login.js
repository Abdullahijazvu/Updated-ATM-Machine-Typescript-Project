import users from "./users.js";
import mainScreen from "./mainScreen.js";
import inquirer from "inquirer";
async function login() {
    const answer = await inquirer.prompt([{
            name: "accountNumber",
            type: "number",
            message: "Please enter your Account Number"
        },
        {
            name: "pin",
            type: "password",
            message: "Enter your password"
        }
    ]);
    let user = users.find(x => x.accountNumber == answer.accountNumber && x.pinCode == answer.pin);
    if (typeof user != "undefined") {
        console.log(`Welcome ${user.name}`);
        mainScreen(user.balance);
    }
    else {
        console.log("Invalid login, Please try again");
    }
}
export default login;
