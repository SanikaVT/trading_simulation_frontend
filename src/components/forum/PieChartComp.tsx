import { Pie } from "react-chartjs-2";
import 'chart.js/auto';

function PieChartComponent({
  labels = ["Bought", "Sold", "Hold"],
  datasets = [
    {
      data: [3000, 3000, 1500],
      backgroundColor: ["#329ba8", "#cc7b4b", "#463054"]
    }
  ]
}) {
  return (
    <Pie
      data={{
        labels: labels,
        datasets: datasets
      }}
    />
  );
}

export default PieChartComponent;
