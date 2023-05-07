// statement Definition
const statement = "If I could give you one thing in life, I’d give you the ability to see yourself through my eyes, only then would you realize how special you are to me."

// Word existence validation function - also word searching
function findWord(text,word) {
    const wordIndex = text.indexOf(word)
    if (wordIndex === -1){
        console.log('We do not have this word in text');
    }
    else{
        console.log('The position of the first letter of the word in the sentence is:',wordIndex);
        if (statement.includes(word) == true){
            count
        }
    }
    return wordIndex;
}
findWord(statement,'you')

// counting numbers of the word
function count(statement,word) {
    let count = 0;
    for (let index of statement){
        if (word == index){
            count++
        }
    }
    return count;
}
let counter = count(statement, 'y');
console.log('The word has been reapeted for ',counter,' times');