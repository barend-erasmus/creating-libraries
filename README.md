# Creating Libraries

A simple guide to creating libraries

## Introduction

Libraries comes with great benefits but if done incorrectly it could be your worst nightmare.

When creating a software solution, we should always keep the future in mind especially when creating libraries as they usually have a longer lifespan.

## What does a bad library look like?

![Bad]()

```javascript
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
```