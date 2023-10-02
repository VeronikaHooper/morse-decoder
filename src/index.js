const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
// "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"
function decode(expr) {

    const codedWords = expr.split('**********');//['00101010100000000010001011101000101110100000111111','00001011110000111111000010111000101110100000111010']
    let word = '';

    for (let i = 0; i < codedWords.length; i++) {
        let codedWord = codedWords[i];//'00101010100000000010001011101000101110100000111111'
        const strLength = codedWord.length; //40
        const charCount = strLength / 10; //4

        for (let j = 0; j < charCount; j++) {
            let letter = codedWord.slice(j * 10, (j * 10) + 10);//0010101010 //....
            let codedLetter = '';

            for (let k = 0; k < letter.length; k = k + 2) {
                let char = letter.slice(k, k + 2); //00
                if (char === '10') {
                    codedLetter = codedLetter + `.`;
                }
                if (char === '11') {
                    codedLetter = codedLetter + `-`;
                }
            }

            let encodedLetter = MORSE_TABLE[codedLetter];//h
            word = word + encodedLetter;
        }
        word = word + ' ';
    }
    return word.trim();
}

module.exports = {
    decode
}