import inquirer from "inquirer";
const Electric = Math.ceil(Math.random() * 1000 + 1);
const Gas = Math.ceil(Math.random() * 1000 + 1);
const Phone = Math.ceil(Math.random() * 1000 + 1);
async function Utility(balance) {
    const input = await inquirer.prompt([{
            name: "Billtype",
            type: "list",
            choices: ["Electricity", "Gas", "Phone"],
            message: "Please select your Bill Type ?"
        }]);
    if (input.Billtype == "Electicity") {
        console.log(`Your Electricity bill amount is ${Electric}`);
        balance -= Electric;
    }
    else if (input.Billtype == "Gas") {
        console.log(`Your Gas bill amount is ${Gas}`);
        balance -= Gas;
    }
    else if (input.Billtype == "Phone") {
        console.log(`Your Phone bill amount is ${Phone}`);
        balance -= Phone;
    }
    return balance;
}
export default Utility;
