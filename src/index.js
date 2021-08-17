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
    let newArr = expr.split('');
    let result = [];

    while (newArr.length) {
        let simbol = '';
        let letters = newArr.splice(0, 10);
        if (letters.join('') === '**********') {
            result.push(' ');
            continue;
        }

        for (i = 0; i < letters.length; i += 2) {
            let sim = letters.slice(i, i + 2).join('');
            simbol += sim == 10 ? "." : sim == 11 ? "-" : "";
        }
        result.push(MORSE_TABLE[simbol]);

    }
    return result.join("");
}

module.exports = {
    decode
}