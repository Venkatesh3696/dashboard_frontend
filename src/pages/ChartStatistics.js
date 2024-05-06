import React, { useState, useEffect } from "react";
import axios from "axios";
import BarChart from "../components/BarChart";

const ChartStatistics = ({ month, monthsData }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/transactions/get-price-ranges`)
      .then((response) => {
        setData(response.data.data);
      });
  }, [month]);
  console.log(data);

  return (
    <div>
      <h1>Bar chart Stats -{monthsData[parseInt(month) - 1].month}</h1>
      <BarChart data={data} />
    </div>
  );
};

export default ChartStatistics;
