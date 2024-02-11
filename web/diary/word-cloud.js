/*
This code is based upon an example from D3.js Graph Gallery by Author: D3.js Graph Gallery
Location: https://d3-graph-gallery.com/graph/wordcloud_size.html
Accessed: 07/04/2023
*/

//List of words
//origenal: var myWords = [{word: "Running", size: "10"}, {word: "Surfing", size: "20"}, {word: "Climbing", size: "50"}, {word: "Kiting", size: "30"}, {word: "Sailing", size: "20"}, {word: "Snowboarding", size: "60"} ]

//I ganerated different text size randomly with maximum and minimum value range
function randomSize(min, max){
    return Math.floor((Math.random() * (max - min)) + min);
}

//I ganerated diffenet font size of every word in word array
let word = {};
let myWords = [];
for (let i = 0; i < words.length; i++){
    word = {
        word: words[i],
        size: randomSize(25, 70)
    }
    myWords.push(word);
}
//End of my modification

//I changed the text color by theme modes
let pos = localStorage.getItem('name position');
let userN = localStorage.key(pos);
let themeN = localStorage.getItem(userN+" Theme");
console.log(themeN)
let color = "";
if (themeN === "dark"){
  color = "#ffffff";
}else if (themeN === "light"){
  color = "#000000";
}
//console.log(myWords);
//End of my modification

// set the dimensions and margins of the graph
var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 1100 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
// Wordcloud features that are different from one word to the other must be here
var layout = d3.layout.cloud()
  .size([width, height])
  .words(myWords.map(function(d) { return {text: d.word, size:d.size}; }))
  .padding(5)        //space between words
  .rotate(function() { return ~~(Math.random() * 2) * 90; })
  .fontSize(function(d) { return d.size; })      // font size of words
  .on("end", draw);
layout.start();

// This function takes the output of 'layout' above and draw the words
// Wordcloud features that are THE SAME from one word to the other can be here
function draw(words) {
  svg
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size; })
        //origenal: .style("fill", "#69b3a2")

        //I changed the colour of the text and capitalised the first letter of the text
        .style("fill", color)
        .style("text-transform", "capitalize")
        //End of my modification

        .attr("text-anchor", "middle")
        .style("font-family", "Impact")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
}