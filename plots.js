console.log(data);
// YOUR CODE HERE

var greekRoman = data.map(god => god.pair)

console.log(greekRoman)

var greekGod = data.map(god => god.greekSearchResults)

console.log(greekGod)

var romanGod = data.map(god => god.romanSearchResults)

console.log(romanGod)

var greek = {
    x: greekRoman,
    y: greekGod,
    text: data.map(god => god.greekName),
    name: "Greek",
    type: "bar"
}

var roman = {
    x: greekRoman,
    y: romanGod,
    text: data.map(god => god.romanName),
    name: "Roman",
    type: "bar"
}

var data = [greek, roman]

var layout = {
    title: "Greek vs Roman God Popularity",
    yaxis: {title: "# of Search Results"},
    barmode: "group"
}

Plotly.newPlot("plot", data, layout)