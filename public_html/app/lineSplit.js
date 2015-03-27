var imageData;
var width;
var height;
var c;
var patternH = 0;
var patternW = 0;
var pattern = [];
var topXPoints = [];

function createImageData(canvasId) {
    var element = document.getElementById(canvasId);
    c = element.getContext("2d");

    width = element.width;
    height = element.height;

    imageData = c.createImageData(1000, 1000);

    patternH = 500;
    patternW = 500;

    pattern = new Array(patternH);
    for (var i = 0; i < patternW; i++) {
        pattern[i] = new Array(patternW);
    }

    initPatterns();
    anim();

    c.putImageData(imageData, 0, 0);
}

function initPatterns() {
    topXPoints.push(0);

    for (var i = 0; i < patternW; i++) {
        var saved = false;
        if (randInt(0, 200) < 5) {
            topXPoints.push(i);
            saved = true;
        }
        for (var j = 0; j < patternH; j++) {
            if (saved)
                pattern[j][i] = 1;
            else
                pattern[j][i] = 0;
        }
    }
}

function setHorizLines() {
    var rx = randInt(0, patternW - 1);
    var ry = randInt(0, patternH - 1);

    for (var i = rx; i < patternW; i++) {
        if (pattern[ry][i] === 1) {
            for (var k = i + 1; k < patternW; k++) {
                if (pattern[ry][k] === 1)
                    break;
                else
                    pattern[ry][k] = 1;
            }
            break;
        }
    }
}

function setVertLines() {
    var rx = randInt(0, patternW - 1);
    var ry = randInt(0, patternH - 1);

    for (var i = ry; i < patternH; i++) {
        if (pattern[i][rx] === 1) {
            for (var k = i + 1; k < patternH; k++) {
                if (pattern[k][rx] === 1)
                    break;
                else
                    pattern[k][rx] = 1;
            }
            break;
        }
    }
}

function createPattern() {
    for (var i = 0; i < 150; i++) {
        setHorizLines();
    }
    for (var i = 0; i < 150; i++) {
        setVertLines();
    }
    for (var i = 0; i < 150; i++) {
        setHorizLines();
    }
}

function anim() {
    createPattern();
    draw(imageData);
    c.putImageData(imageData, 0, 0);
}

function draw(imageData) {
    var backColor = 238;
    for (var x = 0; x < patternW; x++) {
        for (var y = 0; y < patternH; y++) {
            index = x + y * patternW;

            if (pattern[y][x] === 1) {
                setPixel(imageData, x, y, 0, 0, 0, 255);
            } else {
                setPixel(imageData, x, y, backColor, backColor, backColor, 255);
            }
        }
    }
}

function setPixel(imageData, x, y, r, g, b, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}