module.exports = function toReadable (number) {
    let arr1_9 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr10_19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrX0 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10){
        return console.log(arr1_9[number - 1]);
    } else if (number < 20){
        return console.log(arr10_19[number - 10]);
    } else if (number < 100){
        let toStr = number.toString();
        let toNumStart = toStr.slice(0, -1)
        let toNumEnd = toStr.slice(1)
            if (toNumEnd == 0){
                return console.log(`${arrX0[toNumStart - 2]}`);
            } else {
                return console.log(`${arrX0[toNumStart - 2]} ${arr1_9[toNumEnd - 1]}`)
            };
    } else if (number < 1000){
        let toStr = number.toString();
        let toNumStartX00 = toStr.slice(0, 1)
        let toNumCenterX00 = toStr.slice(1, 2)
        let toNumEndX00 = toStr.slice(-1)
            if (toNumCenterX00 == 0 && toNumEndX00 == 0){
                return console.log(`${arr1_9[toNumStartX00 - 1]} hundred`)
            }

            if (toNumCenterX00 == 0){
                return console.log(`${arr1_9[toNumStartX00 - 1]} hundred ${arr1_9[toNumEndX00 - 1]}`)
            } else if (toNumEndX00 == 0){
                return console.log(`${arr1_9[toNumStartX00 - 1]} hundred ${arrX0[toNumCenterX00 - 2]}`)
            } return console.log(`${arr1_9[toNumStartX00 - 1]} hundred ${arrX0[toNumCenterX00 - 2]} ${arr1_9[toNumEndX00 - 1]}`)
    }
    
}
