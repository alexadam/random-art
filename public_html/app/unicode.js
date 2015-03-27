var miscSets = [[8208, 8231],
   [8240, 8286],
   [8352, 8377],
   [8704, 8959],
   [9472, 9599],
   [9600, 9631],
   [9632, 9727],
   [9728, 9983],
   [9985, 10175],
   [8592, 8703]];


var charSets = [[9608, 9609, 9610, 9611, 9612, 9613, 9614, 9615, 9616, 9617, 9618, 9619],
                [9601, 9602, 9603, 9604, 9605, 9606, 9607],
                [9581, 9582, 9583, 9584],
                [9585, 9586, 9587],
                [9516, 9517, 9518, 9519, 9520, 9521, 9522, 9523, 9524, 9525, 9526, 9527, 9528, 9529, 9530, 9531, 9532, 9533, 9534, 9535, 9536, 9537, 9538, 9539, 9540, 9541, 9542, 9543, 9544, 9545, 9546, 9547],
                [9472, 9473, 9474, 9475, 9476, 9477, 9478, 9479, 9480, 9481, 9482],
                [9632, 9633, 9634, 9635, 9636, 9637, 9638, 9639, 9640, 9641],
                [9552, 9553, 9554, 9555, 9556, 9557, 9558, 9559, 9560, 9561, 9562, 9563, 9564, 9565, 9566, 9567, 9568, 9569, 9570, 9571, 9572, 9573, 9574, 9575, 9576, 9577, 9578, 9579, 9580],
                [8942, 8943, 8944, 8945]
               ];


function generateMiscRandomUnicodeChars(length) {
    var charSet = randInt(0, miscSets.length - 1);
    var output = '';

    for (var i = 0; i < length; i++) {
        output += String.fromCharCode(randInt(miscSets[charSet][0], miscSets[charSet][1]));
    }

    return output;
}

function generateRandomUnicodeChars(charSet, length) {
    if (charSet === -1) {
        charSet = randInt(0, charSets.length - 1);
    }

    var output = '';

    for (var i = 0; i < length; i++) {
        output += String.fromCharCode(charSets[charSet][randInt(0, charSets[charSet].length - 1)]);
    }

    return output;
}

function getParts(str, len) {
    var res = [];
    while (str.length) {
        res.push(str.substring(0, len));
        str = str.substring(len);
    }
    return res;
}

function paintText(canvasId, text, nrOfLines, charsPerLine) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');
    ctx.font = "18px serif";
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#eee';
    ctx.fill();
    ctx.fillStyle = '#000';
    var lineHeight = 20;
    var lineY = 20;
    var textParts = getParts(text, charsPerLine);

    for (var i = 0; i < nrOfLines; i++) {
        var tmpText = textParts[i];
        ctx.fillText(tmpText, 0, lineY);
        lineY += lineHeight;
    }
}