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

function decode(expr) {

    let word = '';
    for (let i = 0; i < expr.length;) {

        if (expr[i] == '*') {
            i = i + 10;
            word += ' ';
        }

        let letter = '';
        let letterflag = true;

        for (; letterflag; i++) {
            if (expr[i] == 0) {
                i++;
                continue;
            }

            letter += expr[i + 1] == 1 ? '-' : '.';
            i++;

            if ((i + 1) % 10 == 0) {
                letterflag = false;
            }
        }
        word += MORSE_TABLE[letter];
    }
    return word;
}

module.exports = {
    decode
}