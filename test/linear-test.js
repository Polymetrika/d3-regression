const tape = require("tape"),
      d3 = require("../");

tape("linear.domain(domain) sets the domain explicitly", function(test) {
  const r = d3.regressionLinear().domain([0, 50]);
  test.deepEqual(r.domain(), [0, 50]);
  test.end();
});

tape("linear(data) calculates the slope, y-intercept, and returns a line representing the regression", function(test) {
  const data = [[0, 2], [1, 1], [2, 0]];
  const r = d3.regressionLinear()
    .x(d => d[0])
    .y(d => d[1])
    (data);
  
  test.deepEqual(r[0], [0, 2]);
  test.deepEqual(r[1], [2, 0]);
  test.equal(r.slope, -1);
  test.equal(r.intercept, 2);
  test.end();
});