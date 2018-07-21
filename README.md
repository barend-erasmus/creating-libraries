# Creating Libraries

A simple guide to creating libraries

## Introduction

Libraries comes with great benefits but if designed incorrectly it could be your worst nightmare.

When creating a software solution, we should always keep the future in mind especially when creating libraries as they have a longer lifespan.

## What does a bad library look like?

![Bad](https://raw.githubusercontent.com/barend-erasmus/creating-libraries/master/images/chart.jpg)

Here we have created a library for a component which creates colored rectangles for each datapoint.

```javascript
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
```

There are many problems with this implementation above such as:

* How do I change the `fill colors`?
* How do I change the `stroke color`?
* How do I change the `stroke width`?

## Improvements

We can solve the problems above by adding more parameters to the function.

```javascript
function initialize(data, height, width, fillColors, strokeColor, strokeWidth) {
  const pixelsPerUnit = width / data.reduce((a, b) => a + b);

  d3.select("svg#chart-bad-2")
    .attr("height", height)
    .attr("width", width);

  let sum = 0;

  for (let index = 0; index < data.length; index++) {
    const datum = data[index];

    d3.select("svg#chart-bad-2")
      .append("rect")
      .attr("x", sum * pixelsPerUnit)
      .attr("y", 0)
      .attr("width", datum * pixelsPerUnit)
      .attr("height", height)
      .attr("fill", fillColors[index])
      .attr("stroke", strokeColor)
      .attr("stroke-width", strokeWidth);

    sum += datum;
  }
}
```

With the parameters added to the function, we can easily change the `fill colors`, `stroke color` and `stroke width` but we won't be able to change the stroke to a `dash array` without any changes to the function.

We can design this function in different way so that it can be easily extended. If we limit the function to logic instead of logic and appearance it would be much easier to extend.

## What does a good library look like?

```javascript
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
```

In this implementation, we can see that the function is only concerned with the data and the drawing of the chart. We have add two classes namely `datum` and `datum-${index}` which can be used to change its appearance.

```css
svg#chart-good rect.datum {
    stroke: #CDA2AB;
    stroke-width: 4;
}

svg#chart-good rect.datum-0 {
    fill: #048A81;
}

svg#chart-good rect.datum-1 {
    fill: #06D6A0;
}

svg#chart-good rect.datum-2 {
    fill: #54C6EB;
}

svg#chart-good rect.datum-3 {
    fill: #8A89C0;
}

svg#chart-good rect.datum:hover {
    fill: #CDA2AB;
}
```
