module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero';
    }
    let numberstring = number.toString();
    let num = +numberstring[numberstring.length - 1] ?? 0;
    let dec = +numberstring[numberstring.length - 2] ?? 0;
    let hundred = +numberstring[numberstring.length - 3] ?? 0;
    let result = '';
    let numread = '';
    let decread = '';
    let hundredread = '';
    switch (num) {
        case 1:
        numread = ' one';
        break;
        case 2:
        numread = ' two';
        break;
        case 3:
        numread = ' three';
        break;
        case 4:
        numread = ' four';
        break;
        case 5:
        numread = ' five';
        break;
        case 6:
        numread = ' six';
        break;
        case 7:
        numread = ' seven';
        break;
        case 8:
        numread = ' eight';
        break;
        case 9:
        numread = ' nine';
        break;
        case 0:
        numread = '';
        break;
    };
    switch (dec) {
        case 1: 
            switch (num) {
                case 0:
                decread = ' ten';
                numread = '';
                break;
                case 1:
                decread = ' eleven';
                numread = '';
                break;
                case 2:
                decread = ' twelve';
                numread = '';
                break;
                case 3:
                decread = ' thirteen';
                numread = '';
                break;
                case 4:
                decread = ' fourteen';
                numread = '';
                break;
                case 5:
                decread = ' fifteen';
                numread = '';
                break;
                case 6:
                decread = ' sixteen';
                numread = '';
                break;
                case 7:
                decread = ' seventeen';
                numread = '';
                break;
                case 8:
                decread = ' eighteen';
                numread = '';
                break;
                case 9:
                decread = ' nineteen';
                numread = '';
                break;  
            };
        break;
        case 2: 
        decread = ' twenty';
        break;
        case 3: 
        decread = ' thirty';
        break;
        case 4: 
        decread = ' forty';
        break;
        case 5: 
        decread = ' fifty';
        break;
        case 6: 
        decread = ' sixty';
        break;
        case 7: 
        decread = ' seventy';
        break;
        case 8: 
        decread = ' eighty';
        break;
        case 9: 
        decread = ' ninety';
        break;
        case 0: 
        decread = '';
        break;
    };
    switch (hundred) {
        case 1:
        hundredread = 'one hundred';
        break;
        case 2:
        hundredread = 'two hundred';
        break;
        case 3:
        hundredread = 'three hundred';
        break;
        case 4:
        hundredread = 'four hundred';
        break;
        case 5:
        hundredread = 'five hundred';
        break;
        case 6:
        hundredread = 'six hundred';
        break;
        case 7:
        hundredread = 'seven hundred';
        break;
        case 8:
        hundredread = 'eight hundred';
        break;
        case 9:
        hundredread = 'nine hundred';
        break;
        case 0:
        hundredread = '';
        break;
    };
    result = `${hundredread}${decread}${numread}`;
    return result.trim();
};