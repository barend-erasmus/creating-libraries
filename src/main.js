const simpleBad = require("./simple-bad");
const simpleGood = require("./simple-good");
const simpleOk = require("./simple-ok");

const chartBad1 = require("./chart-bad-1");
const chartBad2 = require("./chart-bad-2");
const chartBad3 = require("./chart-bad-3");
const chartGood = require("./chart-good");

simpleBad.initialize();
simpleOk.initialize("#81F495", "#8E8DBE", "#A9E4EF", "#7A306C");
simpleGood.initialize();

chartBad1.initialize([10, 15, 8, 3], 30, 600);
chartBad2.initialize([10, 15, 8, 3], 30, 600, ["#048A81", "#06D6A0", "#54C6EB", "#8A89C0"], "#CDA2AB", 4);
chartBad3.initialize([10, 15, 8, 3], 30, 600, ["#048A81", "#06D6A0", "#54C6EB", "#8A89C0"], ["#CDA2AB", "#CDA2AB", "#CDA2AB", "#CDA2AB"], 4);
chartGood.initialize([10, 15, 8, 3]);