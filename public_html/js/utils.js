function shuffleArray(array) {
    var counter = array.length, temp, index;

    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function randInt(minVal, maxVal) {
    if (maxVal < minVal) {
        var tmp = minVal;
        minVal = maxVal;
        maxVal = tmp;
    }
    return minVal + Math.round(Math.random() * (maxVal - minVal));
}