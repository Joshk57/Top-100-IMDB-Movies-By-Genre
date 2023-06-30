import { fetchMovies } from "./fetch_movies"

export async function createGraph(data) {
    clearGraph()
    const barHeight = 25;
    const marginTop = 30;
    const marginRight = 0;
    const marginBottom = 10;
    const marginLeft = 30;
    const width = 928;
    const height = Math.ceil((data.length + 0.1) * barHeight) + marginTop + marginBottom;

    // const x = d3.scaleLinear()
    //   .domain([0, d3.max(data, d => d.rating)])
    //   .range([marginLeft, width - marginRight]);

    const x = d3.scaleLinear()
      .domain([0, 10])
      .range([marginLeft, width - marginRight]);


    const y = d3.scaleBand()
      .domain(d3.sort(data, d => -d.rating).map(d => d.title))
      .rangeRound([marginTop, height - marginBottom])
      .padding(0.1);

    const format = x.tickFormat(20, "");

    const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");
      
    const container = document.getElementById("chartContainer");
      container.appendChild(svg.node());
      
    svg.append("g")
      .attr("fill", "steelblue")
    .selectAll()
    .data(data)
    .join("rect")
      .attr("x", x(0))
      .attr("y", (d) => y(d.title))
      .attr("width", (d) => x(d.rating) - x(0))
      .attr("height", y.bandwidth());

    svg.append("g")
      .attr("fill", "white")
      .attr("text-anchor", "end")
    .selectAll()
    .data(data)
    .join("text")
      .attr("x", (d) => x(d.rating))
      .attr("y", (d) => y(d.title) + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .attr("dx", -4)
      .text((d) => format(d.rating))
    .call((text) => text.filter(d => x(d.rating) - x(0) < 20) // short bars
      .attr("dx", +4)
      .attr("fill", "black")
      .attr("text-anchor", "start"));

    svg.append("g")
      .attr("transform", `translate(0,${marginTop})`)
      .call(d3.axisTop(x).ticks(width / 80, ""))
      .call(g => g.select(".domain").remove());


    svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).tickSizeOuter(0));

    return svg.node();
}

function clearGraph() {
    const message = d3.select("#message")
    message.remove();
    
    const svg = d3.select('svg');
    svg.remove();
}