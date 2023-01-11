module.exports = function toReadable (number) {
    let arr0_9 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr10_19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrX0 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10){
        return arr0_9[number];
    } else if (number < 20){
        return arr10_19[number - 10];
    } else if (number < 100){
        let toStr = number.toString();
        let toNumStart = toStr.slice(0, -1);
        let toNumEnd = toStr.slice(1);
            if (toNumEnd == 0){
                return `${arrX0[toNumStart - 2]}`;
            } else {
                return `${arrX0[toNumStart - 2]} ${arr0_9[toNumEnd]}`
            };
    } else if (number < 1000){
        let toStr = number.toString();
        let toNumStartX00 = toStr.slice(0, 1);
        let toNumCenterX00 = toStr.slice(1, 2);
        let toNumEndX00 = toStr.slice(-1);
            if (toNumCenterX00 == 1){
                return `${arr0_9[toNumStartX00]} hundred ${arr10_19[toNumEndX00]}`;
            }

            if (toNumCenterX00 == 0 && toNumEndX00 == 0){
                return `${arr0_9[toNumStartX00]} hundred`;
            }

            if (toNumCenterX00 == 0){
                return `${arr0_9[toNumStartX00]} hundred ${arr0_9[toNumEndX00]}`;
            } else if (toNumEndX00 == 0){
                return `${arr0_9[toNumStartX00]} hundred ${arrX0[toNumCenterX00 - 2]}`;
            } return `${arr0_9[toNumStartX00]} hundred ${arrX0[toNumCenterX00 - 2]} ${arr0_9[toNumEndX00]}`;
    }
    
}
