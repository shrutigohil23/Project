import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import axios from "axios";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const Horizontalchart = () => {
  const [u, setu] = useState([]);
  const [age, setage] = useState([]);
  var agedata = [];

  const [data, setData] = useState({
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: agedata,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(25, 90, 13, 0.5)",
      },
      {
        label: "Dataset 2",
        data: agedata,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });

  useEffect(() => {
    axios.get("http://localhost:4000/appointment/appointment").then((res) => {
      console.log("graph....", res.data.data);
      setu(res.data.data);
      for (var i = 0; i < res.data.data.length; i++) {
        console.log(res.data.data[i].age);
        // setage([...res.data.data[i].age, age]);
        agedata.push(res.data.data[i].age);
        //console.log("age array", age);
      }
      console.log(agedata);
      setage(agedata);
      console.log("age array ", age);
    });
  }, []);

  return (
    <div style={{ width: "80%", height: "50%" }}>
      {age?.length >= 1 ? <Bar data={data} options={options} /> : null}
    </div>
  );
};
export default Horizontalchart;
