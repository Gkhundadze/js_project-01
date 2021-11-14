const prompt = require('prompt-sync')({sigint: true});
main()
function main () {
    let length = parseInt(prompt('enter length number : '));
    if (isNaN(length)) {
        console.log('length is not a number, enter only numbers, lets try again');
        main()
        return
    }
    let width = parseInt(prompt('enter width number : '))
    if (isNaN(width)) {
        console.log('width is not a number, enter only numbers, lets try again');
        main()
        return
    }
let area = length * width;
let perimeter = (length + width) * 2;
console.log('AREA equals to : ', area);
console.log('PERIMETER equals to : ', perimeter);
}