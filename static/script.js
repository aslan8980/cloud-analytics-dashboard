const layoutBase = {
  margin:{t:40,l:50,r:30,b:50},
  paper_bgcolor:"transparent",
  plot_bgcolor:"transparent",
  font:{color:"#1f2937"}
};

// BAR 1 — Monthly Sales
fetch("/api/sales_monthly").then(r=>r.json()).then(d=>{
Plotly.newPlot("salesChart", [{
  x:d.map(i=>i.month),
  y:d.map(i=>i.sales),
  type:"bar",
  marker:{color:"#3b82f6"}
}], {...layoutBase, xaxis:{title:"Month"}, yaxis:{title:"Sales Amount"}},{displayModeBar:false});
});

// BAR 2 — User Growth
fetch("/api/user_growth").then(r=>r.json()).then(d=>{
Plotly.newPlot("usersChart", [{
  x:d.map(i=>i.month),
  y:d.map(i=>i.users),
  type:"bar",
  marker:{color:"#22c55e"}
}], {...layoutBase, xaxis:{title:"Month"}, yaxis:{title:"Users"}},{displayModeBar:false});
});

// PIE 1 — Traffic
fetch("/api/traffic_sources").then(r=>r.json()).then(d=>{
Plotly.newPlot("trafficChart", [{
  labels:d.map(i=>i.source),
  values:d.map(i=>i.percentage),
  type:"pie",
  hole:.45
}], {...layoutBase},{displayModeBar:false});
});

// PIE 2 — Products
fetch("/api/product_categories").then(r=>r.json()).then(d=>{
Plotly.newPlot("productsChart", [{
  labels:d.map(i=>i.category),
  values:d.map(i=>i.percentage),
  type:"pie",
  hole:.45
}], {...layoutBase},{displayModeBar:false});
});

// Reset button
function resetChart(id){
 Plotly.relayout(id,{
  'xaxis.autorange':true,
  'yaxis.autorange':true
 });
}