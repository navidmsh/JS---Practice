// transform number to star
function numberToStar(number) {
    for (let i = 1; i <= number; i++) {
        let star = ' ';
        for (let j = 0; j < i; j++) {
            star += '* ';          
        }
        console.log(star);
    }
    for (let i = number-1; i >= 0; i--) {
        let star = ' ';
        for (let j = 0; j < i; j++) {
            star += '* ';        
        }
        console.log(star);
    }
}
numberToStar(10)