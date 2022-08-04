let input = require('sync-input');

const rates = {
  "USD": 1,
  "JPY": 113.5,
  "EUR": 0.89,
  "RUB": 74.36,
  "GBP": 0.75
};

console.log('Welcome to Currency Converter!');

Object.keys(rates).forEach(function (value) {
  console.log("1 USD equals " + rates[value] + " " + value);
});

let activeProggram = true;
let activeConvert = false;

choicer();

function choicer() {
  while (activeProggram) {
    console.log('What do you want to do?');
    console.log('1-Convert currencies 2-Exit program');
    
    const choice = Number(input());
    
    switch (choice) {
      case 1:
        activeConvert = true;
        activeProggram = false;
        convertor();
        break;
      case 2:
        console.log("Have a nice day!");
        activeProggram = false;
        break;
      default:
        console.log("Unknown input");
        continue;
    }
    
    /*if (input === 1) {
      activeConvert = true;
      activeProggram = false;
      convertor();
      break;
    } else if (input === 2) {
      console.log("Have a nice day!");
      activeProggram = false;
      break;
    } else {
      console.log("Unknown input");
      continue;
    }*/
  }
}

function convertor() {
  while (activeConvert) {
    console.log('What do you want to convert?');

    const FromCurrency = input('From: ').toUpperCase().trim();

    if (!Object.keys(rates).includes(FromCurrency)) {
      console.log("Unknown currency");
      continue;
    } else {
      const ToCurrency = input('To: ').toUpperCase().trim();
      
      if (!Object.keys(rates).includes(ToCurrency)) {
        console.log("Unknown currency");
        continue;
      } else {
      const amount = Number(input("Amount: "));
      
      if (amount < 1) {
        console.log("The amount cannot be less than 1");
        continue;
      } else if (!amount) {
        console.log("The amount has to be a number");
        continue;
      } else {
        let result = 1 / rates[FromCurrency] * amount * rates[ToCurrency];
        result = result.toFixed(4);
      
        console.log("Result: " + amount + " " + FromCurrency + " equals " + result + " " + ToCurrency);
        
        activeConvert = false;
        activeProggram = true;
        choicer();
        break;
      }
    }
  }
}
}