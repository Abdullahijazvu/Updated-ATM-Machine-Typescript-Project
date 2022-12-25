import inquirer from "inquirer";
import cashwithdraw from "./cashWithdraw.js";
import cashDeposit from "./cashDeposit.js";
import transfer from "./transfer.js";
import Utility from "./utilityBill.js";
import chalk from "chalk";
async function anotherTranction() {
    const OTrans = await inquirer.prompt([{
            name: "otherTrans",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want another transaction? "
        }]);
    return OTrans.otherTrans;
}
async function mainScreen(balance) {
    do {
        const options = await inquirer.prompt([{
                name: "menu",
                type: "list",
                choices: ['Balance Inquiry', 'Cash Widthraw', 'Cash Deposit', 'Transfer', 'Utility Bill', 'Exit'],
                message: "Please select your Transaction Type"
            }]);
        switch (options.menu) {
            case "Balance Inquiry":
                console.log(chalk.yellow(`Your current balance is: ${balance}`));
                break;
            case "Cash Widthraw":
                balance = await cashwithdraw(balance);
                break;
            case "Cash Deposit":
                balance = await cashDeposit(balance);
                break;
            case "Transfer":
                balance = await transfer(balance);
                break;
            case "Utility Bill":
                balance = await Utility(balance);
                break;
            case "Exit":
                anothertranc = "No";
                break;
        }
        if (options.menu !== "Exit") {
            console.log(chalk.green(`Your transaction is successful & new balance is ${balance}`));
            var anothertranc = await anotherTranction();
        }
        if (anothertranc == "No") {
            console.log("Thank you for using our services");
        }
    } while (anothertranc != "No");
}
export default mainScreen;
