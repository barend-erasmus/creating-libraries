const d3 = require("d3");

function initialize(outerFill, outerStroke, innerFill, innerStroke) {
  d3.select("svg#simple-ok")
    .append("circle")
    .attr("cx", "100")
    .attr("cy", "100")
    .attr("r", "50")
    .attr("fill", outerFill)
    .attr("stroke", outerStroke)
    .attr("stroke-width", "4");

  d3.select("svg#simple-ok")
    .append("circle")
    .attr("cx", "100")
    .attr("cy", "100")
    .attr("r", "25")
    .attr("fill", innerFill)
    .attr("stroke", innerStroke)
    .attr("stroke-width", "4");
}

module.exports = {
  initialize,
};