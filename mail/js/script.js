// per ogni elemento della lista controlla se è uguale all'input

let mails = ["mario@gmail.com", "sara@gmail.com", "franco@gmail.com"]
console.log(mails);

let invited = false;

let mail = prompt("Inserisci la tua email:");
console.log(mail);

for (let i = 0; i < mails.length; i++) {
    
    if (mails[i] === mail) {
        invited = true
    }
}

if (invited === true) {
    console.log("la email è tra gli invitati");
}
else {
    console.log("la email non è tra gli invitati");
}