const d3 = require("d3");

function initialize(data, height, width, fillColors, strokeColors, strokeWidth) {
  const pixelsPerUnit = width / data.reduce((a, b) => a + b);

  d3.select("svg#chart-bad-3")
    .attr("height", height)
    .attr("width", width);

  let sum = 0;

  for (let index = 0; index < data.length; index++) {
    const datum = data[index];

    d3.select("svg#chart-bad-3")
      .append("rect")
      .attr("x", sum * pixelsPerUnit)
      .attr("y", 0)
      .attr("width", datum * pixelsPerUnit)
      .attr("height", height)
      .attr("fill", fillColors[index])
      .attr("stroke", strokeColors[index])
      .attr("stroke-width", strokeWidth);

    sum += datum;
  }
}

module.exports = {
  initialize,
};
