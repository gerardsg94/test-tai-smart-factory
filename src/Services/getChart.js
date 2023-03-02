import anychart from 'anychart'

export const getChart = (container, parados=20, preparados=25, producidos=30) => {

    var chart = anychart.bar();
    chart.data([
      ["Parados", parados],
      ["Preparados", preparados],
      ["Producidos", producidos],
    ]);

    chart.title("Piezas");

    chart.container(container);

    chart.draw();

}



export default getChart;