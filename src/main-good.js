const d3 = require("d3");

d3.select("svg#good")
  .append("circle")
  .attr("cx", "100")
  .attr("cy", "100")
  .attr("r", "50")
  .attr("class", "outer");

d3.select("svg#good")
  .append("circle")
  .attr("cx", "100")
  .attr("cy", "100")
  .attr("r", "25")
  .attr("class", "inner");
