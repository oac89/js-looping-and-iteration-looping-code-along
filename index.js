// Code your solutions in this file
const nameArray = ['Lisa', 'Kaitlin', 'Jan']

function writeCards(nameArray, eventName) {
    const thankYouCard = []
    for (let i = 0; i < nameArray.length; i++) {
       thankYouCard.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`) 
    }
    return thankYouCard
}

function countDown(integer){
    while (integer > 0) {
        console.log(integer)
        integer -= 1
    }
    console.log(integer)
}