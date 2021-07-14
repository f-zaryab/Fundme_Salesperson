$(document).ready(function(){
  $('#radio1').click(function(){
      $('.opt_1').addClass('active').siblings().removeClass('active');       
  });
  $('#radio2').click(function(){
      $('.opt_2').addClass('active').siblings().removeClass('active');       
  });
});

// Toggling Blocks: changing Icons  ======================================
$(document).ready(function(){
  $(".collapsable-block").on("hide.bs.collapse", function(){
    $(this).parent().find(".btn_openclose_icon img").attr('src', 'assets/images/toggle_add_icon.svg');
    // $(".btn_openclose_missingInfo").html("<img src='assets/images/SVGs/Extra-SVGs/arrow_toggle_down.svg'>");
  });
  $(".collapsable-block").on("show.bs.collapse", function(){
    $(this).parent().find(".btn_openclose_icon img").attr('src', 'assets/images/toggle_minus_icon.svg');
    // $(".btn_openclose_missingInfo").html("<img src='assets/images/SVGs/Extra-SVGs/arrow_toggle_up.svg'>");
  });
});







// Line charts: Total Loan Vol ========================================================================
var chart = am4core.create("chartdiv_tlv", am4charts.XYChart);
// Inline Data
chart.data = [{
  "month": "22/1",
  "cost": 29
}, {
  "month": "22/2",
  "cost": 27
}, {
  "month": "22/3",
  "cost": 27
}, {
  "month": "22/4",
  "cost": 25
}, {
  "month": "22/5",
  "cost": 24
}, {
  "month": "22/6",
  "cost": 26
}, {
  "month": "22/7",
  "cost": 23
}, {
  "month": "22/8",
  "cost": 22
}, {
  "month": "22/9",
  "cost": 21
}];
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
// var valueAxis = chart.xAxes.push(new am4charts.DateAxis());
categoryAxis.dataFields.category = "month";
// categoryAxis.title.text = "Countries";
// categoryAxis.title.fontWeight = "bold";
categoryAxis.renderer.minGridDistance = 50;
categoryAxis.renderer.grid.template.strokeWidth = 5;                    //controlling grid lines width; using 0 to make it disappear
categoryAxis.renderer.grid.template.strokeOpacity = 1;
categoryAxis.renderer.labels.template.fontSize = 10;                    //font size of x-axis labels 
categoryAxis.renderer.labels.template.fill = am4core.color("rgba(119, 119, 119, 1)");     // font -size color
categoryAxis.renderer.grid.template.disabled = true;                    // to disable all grid props

categoryAxis.renderer.line.strokeOpacity = 1;
categoryAxis.renderer.line.strokeWidth = 2;
categoryAxis.renderer.line.stroke = am4core.color("rgba(196, 196, 196, 1)");

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.strokeWidth = 0;
valueAxis.renderer.labels.template.fontSize = 10;
valueAxis.renderer.labels.template.fill = am4core.color("rgba(119, 119, 119, 1)");
valueAxis.min = 20;
valueAxis.max = 30;
valueAxis.strictMinMax = true;
valueAxis.renderer.minGridDistance = 20;

valueAxis.renderer.line.strokeOpacity = 1;
valueAxis.renderer.line.strokeWidth = 2;
valueAxis.renderer.line.stroke = am4core.color("rgba(196, 196, 196, 1)");

var series = chart.series.push(new am4charts.LineSeries());

series.dataFields.valueY = "cost";
series.dataFields.categoryX = "month";

series.name = "Sales";
series.stroke = am4core.color("rgba(0, 0, 0, 1)"); // black color of grid line
series.strokeWidth = 1; // 2px of graph line
series.fill = 'rgba(196, 196, 196, 1)';
series.fillOpacity = 0.75;




// Line charts: Total Revenue ========================================================================
var chart = am4core.create("chartdiv_trv", am4charts.XYChart);
// Inline Data
chart.data = [{
  "month": "22/1",
  "cost": 29
}, {
  "month": "22/2",
  "cost": 27
}, {
  "month": "22/3",
  "cost": 27
}, {
  "month": "22/4",
  "cost": 25
}, {
  "month": "22/5",
  "cost": 24
}, {
  "month": "22/6",
  "cost": 26
}, {
  "month": "22/7",
  "cost": 23
}, {
  "month": "22/8",
  "cost": 22
}, {
  "month": "22/9",
  "cost": 21
}];
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
// var valueAxis = chart.xAxes.push(new am4charts.DateAxis());
categoryAxis.dataFields.category = "month";
// categoryAxis.title.text = "Countries";
// categoryAxis.title.fontWeight = "bold";
categoryAxis.renderer.minGridDistance = 50;
categoryAxis.renderer.grid.template.strokeWidth = 5;                    //controlling grid lines width; using 0 to make it disappear
categoryAxis.renderer.grid.template.strokeOpacity = 1;
categoryAxis.renderer.labels.template.fontSize = 10;                    //font size of x-axis labels 
categoryAxis.renderer.labels.template.fill = am4core.color("rgba(119, 119, 119, 1)");     // font -size color
categoryAxis.renderer.grid.template.disabled = true;                    // to disable all grid props

categoryAxis.renderer.line.strokeOpacity = 1;
categoryAxis.renderer.line.strokeWidth = 2;
categoryAxis.renderer.line.stroke = am4core.color("rgba(196, 196, 196, 1)");

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.strokeWidth = 0;
valueAxis.renderer.labels.template.fontSize = 10;
valueAxis.renderer.labels.template.fill = am4core.color("rgba(119, 119, 119, 1)");
valueAxis.min = 20;
valueAxis.max = 30;
valueAxis.strictMinMax = true;
valueAxis.renderer.minGridDistance = 20;

valueAxis.renderer.line.strokeOpacity = 1;
valueAxis.renderer.line.strokeWidth = 2;
valueAxis.renderer.line.stroke = am4core.color("rgba(196, 196, 196, 1)");

var series = chart.series.push(new am4charts.LineSeries());

series.dataFields.valueY = "cost";
series.dataFields.categoryX = "month";

series.name = "Sales";
series.stroke = am4core.color("rgba(0, 0, 0, 1)"); // black color of grid line
series.strokeWidth = 1; // 2px of graph line
series.fill = 'rgba(196, 196, 196, 1)';
series.fillOpacity = 0.75;



// Line charts: Average Spread ========================================================================
var chart = am4core.create("chartdiv_avSprd", am4charts.XYChart);
// Inline Data
chart.data = [{
  "month": "22/1",
  "cost": 29
}, {
  "month": "22/2",
  "cost": 27
}, {
  "month": "22/3",
  "cost": 27
}, {
  "month": "22/4",
  "cost": 25
}, {
  "month": "22/5",
  "cost": 24
}, {
  "month": "22/6",
  "cost": 26
}, {
  "month": "22/7",
  "cost": 23
}, {
  "month": "22/8",
  "cost": 22
}, {
  "month": "22/9",
  "cost": 21
}];
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
// var valueAxis = chart.xAxes.push(new am4charts.DateAxis());
categoryAxis.dataFields.category = "month";
// categoryAxis.title.text = "Countries";
// categoryAxis.title.fontWeight = "bold";
categoryAxis.renderer.minGridDistance = 50;
categoryAxis.renderer.grid.template.strokeWidth = 5;                    //controlling grid lines width; using 0 to make it disappear
categoryAxis.renderer.grid.template.strokeOpacity = 1;
categoryAxis.renderer.labels.template.fontSize = 10;                    //font size of x-axis labels 
categoryAxis.renderer.labels.template.fill = am4core.color("rgba(119, 119, 119, 1)");     // font -size color
categoryAxis.renderer.grid.template.disabled = true;                    // to disable all grid props

categoryAxis.renderer.line.strokeOpacity = 1;
categoryAxis.renderer.line.strokeWidth = 2;
categoryAxis.renderer.line.stroke = am4core.color("rgba(196, 196, 196, 1)");

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.strokeWidth = 0;
valueAxis.renderer.labels.template.fontSize = 10;
valueAxis.renderer.labels.template.fill = am4core.color("rgba(119, 119, 119, 1)");
valueAxis.min = 20;
valueAxis.max = 30;
valueAxis.strictMinMax = true;
valueAxis.renderer.minGridDistance = 20;

valueAxis.renderer.line.strokeOpacity = 1;
valueAxis.renderer.line.strokeWidth = 2;
valueAxis.renderer.line.stroke = am4core.color("rgba(196, 196, 196, 1)");

var series = chart.series.push(new am4charts.LineSeries());

series.dataFields.valueY = "cost";
series.dataFields.categoryX = "month";

series.name = "Sales";
series.stroke = am4core.color("rgba(0, 0, 0, 1)"); // black color of grid line
series.strokeWidth = 1; // 2px of graph line
series.fill = 'rgba(196, 196, 196, 1)';
series.fillOpacity = 0.75;



// Line charts: Average Interest ========================================================================
var chart = am4core.create("chartdiv_avInt", am4charts.XYChart);
// Inline Data
chart.data = [{
  "month": "22/1",
  "cost": 29
}, {
  "month": "22/2",
  "cost": 27
}, {
  "month": "22/3",
  "cost": 27
}, {
  "month": "22/4",
  "cost": 25
}, {
  "month": "22/5",
  "cost": 24
}, {
  "month": "22/6",
  "cost": 26
}, {
  "month": "22/7",
  "cost": 23
}, {
  "month": "22/8",
  "cost": 22
}, {
  "month": "22/9",
  "cost": 21
}];
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
// var valueAxis = chart.xAxes.push(new am4charts.DateAxis());
categoryAxis.dataFields.category = "month";
// categoryAxis.title.text = "Countries";
// categoryAxis.title.fontWeight = "bold";
categoryAxis.renderer.minGridDistance = 50;
categoryAxis.renderer.grid.template.strokeWidth = 5;                    //controlling grid lines width; using 0 to make it disappear
categoryAxis.renderer.grid.template.strokeOpacity = 1;
categoryAxis.renderer.labels.template.fontSize = 10;                    //font size of x-axis labels 
categoryAxis.renderer.labels.template.fill = am4core.color("rgba(119, 119, 119, 1)");     // font -size color
categoryAxis.renderer.grid.template.disabled = true;                    // to disable all grid props

categoryAxis.renderer.line.strokeOpacity = 1;
categoryAxis.renderer.line.strokeWidth = 2;
categoryAxis.renderer.line.stroke = am4core.color("rgba(196, 196, 196, 1)");

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.strokeWidth = 0;
valueAxis.renderer.labels.template.fontSize = 10;
valueAxis.renderer.labels.template.fill = am4core.color("rgba(119, 119, 119, 1)");
valueAxis.min = 20;
valueAxis.max = 30;
valueAxis.strictMinMax = true;
valueAxis.renderer.minGridDistance = 20;

valueAxis.renderer.line.strokeOpacity = 1;
valueAxis.renderer.line.strokeWidth = 2;
valueAxis.renderer.line.stroke = am4core.color("rgba(196, 196, 196, 1)");

var series = chart.series.push(new am4charts.LineSeries());

series.dataFields.valueY = "cost";
series.dataFields.categoryX = "month";

series.name = "Sales";
series.stroke = am4core.color("rgba(0, 0, 0, 1)"); // black color of grid line
series.strokeWidth = 1; // 2px of graph line
series.fill = 'rgba(196, 196, 196, 1)';
series.fillOpacity = 0.75;






// Funnel Graphs: Funnel Breakdown ========================================================================
// am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv_funnel", am4charts.SlicedChart);
chart.data = [{
  "name": "Leads",
  "value": 600
}, {
  "name": "Long Apps",
  "value": 300
}, {
  "name": "Termsheets",
  "value": 200
},  {
  "name": "Closed",
  "value": 10
}];
var series = chart.series.push(new am4charts.FunnelSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.bottomRatio = 0;
series.sliceLinks.template.height = 0;
series.colors.list = [
  am4core.color("rgba(43, 48, 74, 1)"),
  am4core.color("rgba(43, 48, 74, 0.8)"),
  am4core.color("rgba(43, 48, 74, 0.6)"),
  am4core.color("rgba(43, 48, 74, 0.4)"),
 ];
series.alignLabels = true;
series.labelsOpposite = true;
// series.labels.template.text = "{category}: [bold]{value}[/]";
series.ticks.template.disabled = true;


// Comparison Line Graphs: Interest vs CoC >>>>========================================================
am4core.useTheme(am4themes_animated);
// Create chart instance
var chart = am4core.create("chartdiv_compGraph", am4charts.XYChart);
// Add data
chart.data = [{
  "date": new Date(2020, 0, 1),
  "value": 450,
  "value2": 362,
  "value3": 699
}, {
  "date": new Date(2020, 1, 1),
  "value": 269,
  "value2": 450,
  "value3": 841
}, {
  "date": new Date(2020, 2, 1),
  "value": 700,
  "value2": 358,
  "value3": 699
}, {
  "date": new Date(2020, 3, 1),
  "value": 490,
  "value2": 367,
  "value3": 500
}, {
  "date": new Date(2020, 4, 1),
  "value": 500,
  "value2": 485,
  "value3": 369
}, {
  "date": new Date(2020, 5, 1),
  "value": 550,
  "value2": 354,
  "value3": 250
}, {
  "date": new Date(2020, 6, 1),
  "value": 420,
  "value2": 350,
  "value3": 600
}];
// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.DateAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.grid.template.strokeWidth = 0;
categoryAxis.renderer.grid.template.disabled = true; 
categoryAxis.renderer.labels.template.fontSize = 16;                                      //font size of x-axis labels 
categoryAxis.renderer.labels.template.fill = am4core.color("rgba(119, 119, 119, 1)");     // font -size color
//categoryAxis.renderer.minGridDistance = 30;
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.strokeWidth = 0;
valueAxis.renderer.labels.template.fill = am4core.color("rgba(119, 119, 119, 1)");
chart.colors.list = [
  am4core.color("rgba(43, 48, 74, 1)"),
  am4core.color("rgba(196, 196, 196, 1)"),
];
// Create series
function createSeries(field, name) {
  var series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = field;
  series.dataFields.dateX = "date";
  // series.name = name;
  
  series.tooltipText = "{dateX}: [b]{valueY}[/]";
  series.strokeWidth = 2;
  series.strokeDasharray = "3,3";
  
var bullet = series.bullets.push(new am4charts.CircleBullet());
// bullet.events.on("hit", function(ev) {
//   alert("Clicked on " + ev.target.dataItem.dateX + ": " + ev.target.dataItem.valueY);
// });
}
createSeries("value", "Series #1");
createSeries("value2", "Series #2");
// chart.legend = new am4charts.Legend();
chart.cursor = new am4charts.XYCursor();

chart.colors.list = [
  am4core.color("red"),
  am4core.color("blue"),
];


// Line Graphs: Cost-per-lead >>>>=====================================================================
var chart = am4core.create("chartdiv_cpl", am4charts.XYChart);
// Inline Data
chart.data = [{
  "month": "22/1",
  "cost": 29
}, {
  "month": "22/2",
  "cost": 27
}, {
  "month": "22/3",
  "cost": 27
}, {
  "month": "22/4",
  "cost": 25
}, {
  "month": "22/5",
  "cost": 24
}, {
  "month": "22/6",
  "cost": 26
}, {
  "month": "22/7",
  "cost": 23
}, {
  "month": "22/8",
  "cost": 22
}, {
  "month": "22/9",
  "cost": 21
}];
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
// var valueAxis = chart.xAxes.push(new am4charts.DateAxis());
categoryAxis.dataFields.category = "month";
// categoryAxis.title.text = "Countries";
// categoryAxis.title.fontWeight = "bold";
categoryAxis.renderer.minGridDistance = 100;
categoryAxis.renderer.grid.template.strokeWidth = 5;                    //controlling grid lines width; using 0 to make it disappear
categoryAxis.renderer.grid.template.strokeOpacity = 1;
categoryAxis.renderer.labels.template.fontSize = 16;                    //font size of x-axis labels 
categoryAxis.renderer.labels.template.fill = am4core.color("rgba(119, 119, 119, 1)");     // font -size color
categoryAxis.renderer.grid.template.disabled = true;                    // to disable all grid props
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
// valueAxis.title.text = "Litres sold (M)";
// valueAxis.title.fontWeight = "bold";
valueAxis.renderer.grid.template.strokeWidth = 0;
valueAxis.renderer.labels.template.fontSize = 16;
valueAxis.renderer.labels.template.fill = am4core.color("rgba(119, 119, 119, 1)");
valueAxis.min = 20;
valueAxis.max = 30;
valueAxis.strictMinMax = true;
valueAxis.renderer.minGridDistance = 40;

var series = chart.series.push(new am4charts.LineSeries());

series.dataFields.valueY = "cost";
series.dataFields.categoryX = "month";

series.name = "Sales";
series.stroke = am4core.color("rgba(0, 0, 0, 1)"); // black color of grid line
series.strokeWidth = 1; // 2px of graph line
// series.fill = 'yellow';
// series.fillOpacity = 0.3;




// Line Graphs: Avg.Revenue per Deal >>>>=====================================================================
var chart = am4core.create("chartdiv_avgRev", am4charts.XYChart);
// Inline Data
chart.data = [{
  "month": "22/1",
  "cost": 29
}, {
  "month": "22/2",
  "cost": 27
}, {
  "month": "22/3",
  "cost": 27
}, {
  "month": "22/4",
  "cost": 25
}, {
  "month": "22/5",
  "cost": 24
}, {
  "month": "22/6",
  "cost": 26
}, {
  "month": "22/7",
  "cost": 23
}, {
  "month": "22/8",
  "cost": 22
}, {
  "month": "22/9",
  "cost": 21
}];
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
// var valueAxis = chart.xAxes.push(new am4charts.DateAxis());
categoryAxis.dataFields.category = "month";
// categoryAxis.title.text = "Countries";
// categoryAxis.title.fontWeight = "bold";
categoryAxis.renderer.minGridDistance = 100;
categoryAxis.renderer.grid.template.strokeWidth = 5;                    //controlling grid lines width; using 0 to make it disappear
categoryAxis.renderer.grid.template.strokeOpacity = 1;
categoryAxis.renderer.labels.template.fontSize = 16;                    //font size of x-axis labels 
categoryAxis.renderer.labels.template.fill = am4core.color("rgba(119, 119, 119, 1)");     // font -size color
categoryAxis.renderer.grid.template.disabled = true;                    // to disable all grid props
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
// valueAxis.title.text = "Litres sold (M)";
// valueAxis.title.fontWeight = "bold";
valueAxis.renderer.grid.template.strokeWidth = 0;
valueAxis.renderer.labels.template.fontSize = 16;
valueAxis.renderer.labels.template.fill = am4core.color("rgba(119, 119, 119, 1)");
valueAxis.min = 20;
valueAxis.max = 30;
valueAxis.strictMinMax = true;
valueAxis.renderer.minGridDistance = 40;

var series2b = chart.series.push(new am4charts.LineSeries());

series2b.dataFields.valueY = "cost";
series2b.dataFields.categoryX = "month";

series2b.name = "Sales";
series2b.stroke = am4core.color("rgba(0, 0, 0, 1)"); // black color of grid line
series2b.strokeWidth = 1; // 2px of graph line
series2b.fill = am4core.color("grey");
// series.fill = 'grey';
series2b.fillOpacity = 1;

var fillModifier = new am4core.LinearGradientModifier();
fillModifier.opacities = [0.6, 0];
fillModifier.offsets = [0,  5];
fillModifier.gradient.rotation = 90;
series2b.segments.template.fillModifier = fillModifier;


// Line Graphs: Avg. Loan Size ========================================================================
var chart = am4core.create("chartdiv_als", am4charts.XYChart);
// Inline Data
chart.data = [{
  "month": "22/1",
  "cost": 420
}, {
  "month": "22/2",
  "cost": 410
}, {
  "month": "22/3",
  "cost": 408
}, {
  "month": "22/4",
  "cost": 400
}, {
  "month": "22/5",
  "cost": 385
}, {
  "month": "22/6",
  "cost": 396
}, {
  "month": "22/7",
  "cost": 390
}, {
  "month": "22/8",
  "cost": 388
}, {
  "month": "22/9",
  "cost": 384
}];
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
// var valueAxis = chart.xAxes.push(new am4charts.DateAxis());
categoryAxis.dataFields.category = "month";
// categoryAxis.title.text = "Countries";
// categoryAxis.title.fontWeight = "bold";
categoryAxis.renderer.minGridDistance = 100;
categoryAxis.renderer.grid.template.strokeWidth = 5;                    //controlling grid lines width; using 0 to make it disappear
categoryAxis.renderer.grid.template.strokeOpacity = 1;
categoryAxis.renderer.labels.template.fontSize = 16;                    //font size of x-axis labels 
categoryAxis.renderer.labels.template.fill = am4core.color("rgba(119, 119, 119, 1)");     // font -size color
categoryAxis.renderer.grid.template.disabled = true;                    // to disable all grid props
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
// valueAxis.title.text = "Litres sold (M)";
// valueAxis.title.fontWeight = "bold";
valueAxis.renderer.grid.template.strokeWidth = 0;
valueAxis.renderer.labels.template.fontSize = 16;
valueAxis.renderer.labels.template.fill = am4core.color("rgba(119, 119, 119, 1)");
valueAxis.min = 380;
valueAxis.max = 420;
valueAxis.strictMinMax = true;
valueAxis.renderer.minGridDistance = 40;
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "cost";
series.dataFields.categoryX = "month";
series.name = "Sales";
series.stroke = am4core.color("rgba(0, 0, 0, 1)"); // black color of grid line
series.strokeWidth = 1; // 2px of graph line
// series.fill = 'yellow';
// series.fillOpacity = 0.3;


// Map Graphs: Market Breakdown ========================================================================

// Theme
am4core.useTheme(am4themes_animated);
// Create map instance
var chart = am4core.create("chartdiv_marketBreakdown", am4maps.MapChart);
// Set map definition
chart.geodata = am4geodata_usaLow;
// Set projection
chart.projection = new am4maps.projections.AlbersUsa();
// Round all numbers to integer
chart.numberFormatter.numberFormat = "#.0a";
// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
//Set min/max fill color for each area
polygonSeries.heatRules.push({
  property: "fill",
  target: polygonSeries.mapPolygons.template,
  "min": am4core.color("rgba(43, 48, 74, 0.2)"),
  "max": am4core.color("rgba(43, 48, 74, 1)"),
  logarithmic: true
});
// Make map load polygon data (state shapes and names) from GeoJSON
polygonSeries.useGeodata = true;
// Set heatmap values for each state
polygonSeries.data = [
  {
    id: "US-AL",
    value: 444710
  },
  {
    id: "US-AK",
    value: 626932
  },
  {
    id: "US-AZ",
    value: 5130632
  },
  {
    id: "US-AR",
    value: 2673400
  },
  {
    id: "US-CA",
    value: 33871648
  },
  {
    id: "US-CO",
    value: 4301261
  },
  {
    id: "US-CT",
    value: 3405565
  },
  {
    id: "US-DE",
    value: 783600
  },
  {
    id: "US-FL",
    value: 15982378
  },
  {
    id: "US-GA",
    value: 8186453
  },
  {
    id: "US-HI",
    value: 1211537
  },
  {
    id: "US-ID",
    value: 1293953
  },
  {
    id: "US-IL",
    value: 12419293
  },
  {
    id: "US-IN",
    value: 6080485
  },
  {
    id: "US-IA",
    value: 2926324
  },
  {
    id: "US-KS",
    value: 2688418
  },
  {
    id: "US-KY",
    value: 4041769
  },
  {
    id: "US-LA",
    value: 4468976
  },
  {
    id: "US-ME",
    value: 1274923
  },
  {
    id: "US-MD",
    value: 5296486
  },
  {
    id: "US-MA",
    value: 6349097
  },
  {
    id: "US-MI",
    value: 9938444
  },
  {
    id: "US-MN",
    value: 4919479
  },
  {
    id: "US-MS",
    value: 2844658
  },
  {
    id: "US-MO",
    value: 5595211
  },
  {
    id: "US-MT",
    value: 902195
  },
  {
    id: "US-NE",
    value: 1711263
  },
  {
    id: "US-NV",
    value: 1998257
  },
  {
    id: "US-NH",
    value: 1235786
  },
  {
    id: "US-NJ",
    value: 8414350
  },
  {
    id: "US-NM",
    value: 1819046
  },
  {
    id: "US-NY",
    value: 18976457
  },
  {
    id: "US-NC",
    value: 8049313
  },
  {
    id: "US-ND",
    value: 642200
  },
  {
    id: "US-OH",
    value: 11353140
  },
  {
    id: "US-OK",
    value: 3450654
  },
  {
    id: "US-OR",
    value: 3421399
  },
  {
    id: "US-PA",
    value: 12281054
  },
  {
    id: "US-RI",
    value: 1048319
  },
  {
    id: "US-SC",
    value: 4012012
  },
  {
    id: "US-SD",
    value: 754844
  },
  {
    id: "US-TN",
    value: 5689283
  },
  {
    id: "US-TX",
    value: 20851820
  },
  {
    id: "US-UT",
    value: 2233169
  },
  {
    id: "US-VT",
    value: 608827
  },
  {
    id: "US-VA",
    value: 7078515
  },
  {
    id: "US-WA",
    value: 5894121
  },
  {
    id: "US-WV",
    value: 1808344
  },
  {
    id: "US-WI",
    value: 5363675
  },
  {
    id: "US-WY",
    value: 493782
  }
];
// Set up heat legend
let heatLegend = chart.createChild(am4maps.HeatLegend);
heatLegend.series = polygonSeries;
heatLegend.align = "right";
heatLegend.valign = "bottom";
heatLegend.height = am4core.percent(80);
heatLegend.orientation = "vertical";
heatLegend.valign = "middle";
heatLegend.marginRight = am4core.percent(4);
heatLegend.valueAxis.renderer.opposite = true;
heatLegend.valueAxis.renderer.dx = - 25;
heatLegend.valueAxis.strictMinMax = false;
heatLegend.valueAxis.fontSize = 9;
heatLegend.valueAxis.logarithmic = true;
// Configure series tooltip
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}: {value}";
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;
// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("rgba(0, 0, 0, 1)");
// heat legend behavior
polygonSeries.mapPolygons.template.events.on("over", function (event) {
  handleHover(event.target);
})
polygonSeries.mapPolygons.template.events.on("hit", function (event) {
  handleHover(event.target);
})
function handleHover(column) {
  if (!isNaN(column.dataItem.value)) {
    heatLegend.valueAxis.showTooltipAt(column.dataItem.value)
  }
  else {
    heatLegend.valueAxis.hideTooltip();
  }
}
polygonSeries.mapPolygons.template.events.on("out", function (event) {
  heatLegend.valueAxis.hideTooltip();
})


