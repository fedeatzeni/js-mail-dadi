// genera due numeri casuali 
// e valuta se è più grande di qual è più grande

let pcNumber = (Math.floor(Math.random() * 6) + 1);
console.log("il numero del PC è:", pcNumber);

let userNumber = (Math.floor(Math.random() * 6) + 1);
console.log("il tuo numero è:", userNumber);

if (pcNumber > userNumber) {
    console.log("ha vinto il PC"); 
}

else if (pcNumber < userNumber) {
    console.log("hai vinto"); 
}

else {
    console.log("hai pareggiato"); 
}

