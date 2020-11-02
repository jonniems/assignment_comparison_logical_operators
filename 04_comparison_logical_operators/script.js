const age = 24;
const isFemale = false;
const driverStatus = 'bob';
const name = 'Bram';
const totalAmount = 75;


if (age >= 18) {
    console.log('Kom binnen en have fun!');
} else {
    console.log('Sorry, je bent te jong om mee te feesten');
}

if (isFemale) {
    console.log('Have fun at Ladiesnight');
} else {
    console.log('Je bent geen vrouw, dus je mag niet naar binnen');
}

if (driverStatus == 'bob') {
    console.log('Je bent de bob, dus je mag naar huis rijden');
} else {
    console.log('Je bent niet de bob, dus je mag niet naar huis rijden');
}

if (age >= 18 && age <= 25) {
    console.log('Je krijgt 50% korting!');
}

if (name === 'Sarah' || name === 'Bram') {
    console.log('Jij krijgt vandaag een gratis biertje!');
}

if (totalAmount > 100) {
    console.log('Je krijgt een gratis fles champagne bij je bestelling!');
} else if (totalAmount > 50) {
    console.log('Je krijgt een gratis portie nachos bij je bestelling!');
} else if (totalAmount > 25) {
    console.log('Je krijgt een gratis portie (vega)bitterballen bij je bestelling!');
}