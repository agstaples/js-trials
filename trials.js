// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map([
  ['home', '510-867-5309'],
  ['mobile', "415-555-1212"],
  ["business", "415-123-4567"]
]);



// ///////////////////////////////////////////////////////
// Create User Info Display:

function work( name, number, business) {
  console.log(`Account Holder Name: ${name}`);
  console.log(`Account Holder Number: ${number}`);
  console.log(`Business Name: ${business}`);
}


function showAddresses(addresses) {
  console.log('Addresses:');
  for (let address of addresses) {
    console.log(`- ${address}`);
  } 
}


function showPhoneNums(numbers) {
  for (let [key, number] of numbers) {
  	console.log(`-${key}: ${number}`);
  }
}


// ///////////////////////////////////////////////////////
// Transactions:

let transactions = new Map([
  ['May-2', -500],
  ['May-13', 1,200],
  ['May-15', -100],
  ['May-21', -359],
  ['May-29', 2,200]
]);

function addTransaction(date, amount) {
	transactions.set(date, amount);
}


function showBalanceStatus(balance) {
  if (balance < 0) {
  	  return 'YOU ARE OVERDRAWN';
  } else if (balance > 0 && balance < 20) {
  	  return 'Warning: You are close to 0 balance.';
  } else {
      return 'Thank you for your business.';
  }
}


function showTransactions(transactions, balance) {
  
  console.log(`Starting balance: ${balance}`);
  
  let endingBalance;
  let endMessage;

  for (let [date, amount] of transactions) {
  	if (amount < 0) {
  	    endingBalance = balance - amount;
  	    console.log(`A withdrawal has been made for ${amount} on ${date}`);
  	} else {
  		endingBalance = balance + amount;
  		console.log(`A deposit has been made for ${amount} on ${date}`);
  	} 
  	console.log(`Your current balance is: ${endingBalance}.`);
  	endMessage = showBalanceStatus(endingBalance);
  	console.log(`${endMessage}`);
  }	
}


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




