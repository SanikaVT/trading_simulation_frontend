import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { useEffect, useState } from "react";
import axios from "axios";

function PieChartComponent(props: any): JSX.Element {
  return <Pie data={props.chartData} />;
}
export default PieChartComponent;
