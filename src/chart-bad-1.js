const d3 = require("d3");

function initialize(data, height, width) {
  const fillColors = ["#048A81", "#06D6A0", "#54C6EB", "#8A89C0"];

  const pixelsPerUnit = width / data.reduce((a, b) => a + b);

  d3.select("svg#chart-bad-1")
    .attr("height", height)
    .attr("width", width);

  let sum = 0;

  for (let index = 0; index < data.length; index++) {
    const datum = data[index];

    d3.select("svg#chart-bad-1")
      .append("rect")
      .attr("x", sum * pixelsPerUnit)
      .attr("y", 0)
      .attr("width", datum * pixelsPerUnit)
      .attr("height", height)
      .attr("fill", fillColors[index])
      .attr("stroke", "#CDA2AB")
      .attr("stroke-width", "4");

    sum += datum;
  }
}

module.exports = {
  initialize,
};
