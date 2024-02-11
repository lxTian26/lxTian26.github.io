/*
This code is based upon an open code from codepen by Author: Collin Henderson
Location: https://codepen.io/syropian/pen/nJjZaE
Accessed: 07/04/2023
*/

var canvas = document.body.appendChild( document.createElement( 'canvas' ) ),
    context = canvas.getContext( '2d' );
//origenal:    canvas.width = 1280;
//origenal:    canvas.height = 800;

//I added the following lines to create stretchable canvas
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
//End of my modification
draw();

//origenal: var textStrip = ['诶', '比', '西', '迪', '伊', '吉', '艾', '杰', '开', '哦', '屁', '提', '维'];

//I added the following lines to create my own textStrip and change some defult proporties
var textStrip = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '凡', '所', '有', '相', '皆', '是', '虛', '妄', 'の', 'い', 'は', 'ん', 'す', 'ひ', 'み'];

//origenal: var stripCount = 60, stripX = new Array(), stripY = new Array(), dY = new Array(), stripFontSize = new Array();
var stripCount = 60, stripNumber = 12, stripX = new Array(), stripY = new Array(), dY = new Array(), stripFontSize = new Array();
//End of my modification

for (var i = 0; i < stripCount; i++) {
    stripX[i] = Math.floor(Math.random()*1265);
    //origenal: stripY[i] = -100;

    //I change the defulp y position for the effect
    stripY[i] = Math.floor(Math.random()*1265);
    //End of my modification

    dY[i] = Math.floor(Math.random()*7)+3;
    stripFontSize[i] = Math.floor(Math.random()*16)+10;
}

//origenal: var theColors = ['#cefbe4', '#81ec72', '#5cd646', '#54d13c', '#4ccc32', '#43c728'];

//I change the text color and allow them to change between light and dark theme
let theColors = [];
let black = ['#000000', '#222222', '#474747', '#646464', '#717171', '#939393'];
let white = ['#FFFFFF', '#E6E6E6', '#D5D5D5', '#CBCBCB', '#C1C1C1', '#B5B5B5'];

let pos = localStorage.getItem('name position');
let userN = localStorage.key(pos);
let themeN = localStorage.getItem(userN+" Theme");
if (themeN === "light"){
    theColors = black;
}else if (themeN === "dark"){
    theColors = white;
}
if (localStorage.getItem("log in") === "false"){
    theColors = black;
}
//End of my modification

var elem, context, timer;

function drawStrip(x, y) {
//origenal:    for (var k = 0; k <= 20; k++) {

    //I increace the number or time this function will loops
    for (var k = 0; k <= 30; k++) {
    //End of my modification

        var randChar = textStrip[Math.floor(Math.random()*textStrip.length)];
        if (context.fillText) {
            switch (k) {
            case 0:
                context.fillStyle = theColors[0]; break;
            case 1:
                context.fillStyle = theColors[1]; break;
            case 3:
                context.fillStyle = theColors[2]; break;
            case 7:
                context.fillStyle = theColors[3]; break;
            case 13:
                context.fillStyle = theColors[4]; break;
            case 17:
                context.fillStyle = theColors[5]; break;
            }
            context.fillText(randChar, x, y);
        }
        y -= stripFontSize[k];
    }
}

function draw() {
    // clear the canvas and set the properties
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.shadowOffsetX = context.shadowOffsetY = 0;
    context.shadowBlur = 8;
//origenal:     context.shadowColor = '#94f475';

    //i changed the shadow color of texts
    context.shadowColor = '#CCCCCC';
    //End of my modification
    
//origenal:    for (var j = 0; j < stripCount; j++) {

    //I change the lengh of each text rows 
    for (var j = 0; j < stripNumber; j++) {
    //End of my modification
        context.font = stripFontSize[j]+'px MatrixCode';
        context.textBaseline = 'top';
        context.textAlign = 'center';
        
        if (stripY[j] > 1358) {
            stripX[j] = Math.floor(Math.random()*canvas.width);
            stripY[j] = -100;
            dY[j] = Math.floor(Math.random()*7)+3;
            stripFontSize[j] = Math.floor(Math.random()*16)+8;
            drawStrip(stripX[j], stripY[j]);
        } else drawStrip(stripX[j], stripY[j]);
        
        stripY[j] += dY[j];
    }
//origenal: setTimeout(draw, 80);

//I changed the refresh speed of this function
  setTimeout(draw, 90);
//End of my modification
}