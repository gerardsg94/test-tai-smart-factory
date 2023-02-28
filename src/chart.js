export const chart = (containerChart='myChartContainer', x=0, y=0, z=0)=> {

}

export default chart;

/*
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ["Piezas", "Numero", { role: "style" } ],
        ["Paros", 10.49, "red"],
        ["Preparada", 19.30, "orange"],
        ["Producida", 21.45, "green"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

      var options = {
        width: 300,
        height: "auto",
        backgroundColor:'#EEEDED',
        legend: { position: "none"},
        chartArea:{
            baseline:2 
        },
        hAxis: {
          minValue: 0
        },
        vAxis: {
          title: 'KPI',

        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      

      chart.draw(view, options);
    }*/