const d3 = require("d3");

function initialize() {
  d3.select("svg#bad")
    .append("circle")
    .attr("cx", "100")
    .attr("cy", "100")
    .attr("r", "50")
    .attr("fill", "#81F495")
    .attr("stroke", "#8E8DBE")
    .attr("stroke-width", "4");

  d3.select("svg#bad")
    .append("circle")
    .attr("cx", "100")
    .attr("cy", "100")
    .attr("r", "25")
    .attr("fill", "#A9E4EF")
    .attr("stroke", "#7A306C")
    .attr("stroke-width", "4");
}

module.exports = {
  initialize
};
