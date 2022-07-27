const input = require('sync-input');

const currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

const board = () => {
    console.log(`Welcome to Currency Converter!`);
    for (const currency in currencies) {
        console.log(`1 USD equals  ${currencies[currency]} ${currency}`);
    }
    console.log(`I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP`);
    console.log(`Type the currency you wish to convert: USD`)
}

const converter = () => {
    let currency = input("To: ");
    //.toUpperCase();
    if (currencies[currency] === undefined) {
        console.log("Unknown currency");
    } else {
        const amount = Number(input("Amount: "));
        if (isNaN(amount)) {
            console.log("The amount has to be a number");
        } else if (amount < 1) {
            console.log("The amount has to be less than 1");
        } else {
            const converted = amount * currencies[currency].toFixed(4);
            console.log(`Result: ${amount} USD equals ${converted.toFixed(4)} ${currency}`);
        }
    }
}

function main() {
    board();
    converter();
}

main();