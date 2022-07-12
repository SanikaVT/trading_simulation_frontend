import { Pie } from "react-chartjs-2";
import "chart.js/auto";

function PieChartComponent({
  labels = ["Bought", "Sold"],
  datasets = [
    {
      data: [5000, 3000],
      backgroundColor: ["#4CAF50", "#f55723"],
    },
  ],
}) {
  return (
    <Pie
      data={{
        labels: labels,
        datasets: datasets,
      }}
    />
  );
}

export default PieChartComponent;
