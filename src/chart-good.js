const d3 = require("d3");

function initialize(data) {
  const height = d3.select("svg#chart-good").attr("height");

  const width = d3.select("svg#chart-good").attr("width");

  const pixelsPerUnit = width / data.reduce((a, b) => a + b);

  let sum = 0;

  for (let index = 0; index < data.length; index++) {
    const datum = data[index];

    d3.select("svg#chart-good")
      .append("rect")
      .attr("x", sum * pixelsPerUnit)
      .attr("y", 0)
      .attr("width", datum * pixelsPerUnit)
      .attr("height", height)
      .attr("class", `datum datum-${index}`)

    sum += datum;
  }
}

module.exports = {
  initialize
};
