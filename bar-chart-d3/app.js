/* Bar chart */
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", (d) => (d * 10 + "px"))


/* SVG */
const w = 500;
const h = 100;
const svg = d3.select("body")
  .append('svg')
  .attr('width', w)
  .attr('height', h)

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d, i) => d * 3)
  .attr('fill', 'navy')
  //Hoover
  .attr('class', 'bar')
  //Tooltip
  .append("title")
  .text(d => d);

// Labels
svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d - 3)
  .text(d => d)

