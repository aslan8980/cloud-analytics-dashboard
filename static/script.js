const baseLayout={
 margin:{t:40,l:50,r:30,b:50},
 paper_bgcolor:"transparent",
 plot_bgcolor:"transparent",
 font:{color:"#1f2937"}
};

// Monthly Sales
fetch("/api/sales_monthly").then(r=>r.json()).then(d=>{
Plotly.newPlot("salesChart",[{
 x:d.map(i=>i.month),
 y:d.map(i=>i.sales),
 type:"bar",
 marker:{color:"#3b82f6"}
}],{...baseLayout,xaxis:{title:"Month"},yaxis:{title:"Sales Amount"}},{displayModeBar:false});
});

// User Growth
fetch("/api/user_growth").then(r=>r.json()).then(d=>{
Plotly.newPlot("usersChart",[{
 x:d.map(i=>i.month),
 y:d.map(i=>i.users),
 type:"bar",
 marker:{color:"#22c55e"}
}],{...baseLayout,xaxis:{title:"Month"},yaxis:{title:"Users"}},{displayModeBar:false});
});

// Traffic
fetch("/api/traffic_sources").then(r=>r.json()).then(d=>{
Plotly.newPlot("trafficChart",[{
 labels:d.map(i=>i.source),
 values:d.map(i=>i.percentage),
 type:"pie",
 hole:.45
}],baseLayout,{displayModeBar:false});
});

// Products
fetch("/api/product_categories").then(r=>r.json()).then(d=>{
Plotly.newPlot("productsChart",[{
 labels:d.map(i=>i.category),
 values:d.map(i=>i.percentage),
 type:"pie",
 hole:.45
}],baseLayout,{displayModeBar:false});
});

function resetChart(id){
 Plotly.relayout(id,{
  'xaxis.autorange':true,
  'yaxis.autorange':true
 });
}

function runTest(){
 const url=document.getElementById("apiUrl").value;
 const box=document.getElementById("apiResult");
 box.style.display="block";
 box.innerText="Loading...";

 fetch(url)
 .then(r=>r.json())
 .then(d=>{
  box.innerText=JSON.stringify(d,null,2);
 })
 .catch(e=>{
  box.innerText="Error: "+e.message;
 });
}


function openTest(title,url){
 document.getElementById("testTitle").innerText = title + " – API Test";
 document.getElementById("apiInput").value = window.location.origin + url;
 document.getElementById("testResult").style.display="none";
 new bootstrap.Modal(document.getElementById("testModal")).show();
}

function runApiTest(){
 const box=document.getElementById("testResult");
 const url=document.getElementById("apiInput").value;
 box.style.display="block";
 box.innerText="Loading...";

 fetch(url)
 .then(r=>r.json())
 .then(d=>{
  box.innerText=JSON.stringify(d,null,2);
 })
 .catch(e=>{
  box.innerText="ERROR: "+e.message;
 });
}

