import React, { useState, useEffect } from "react";
import axios from "axios";
import BarChart from "../components/BarChart";

const ChartStatistics = ({ month, monthsData, API_URL }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/transactions/get-price-ranges/${month}`)
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      });
  }, [month]);
  console.log("data", data);

  return (
    <div>
      <h1>Bar chart Stats -{monthsData[parseInt(month) - 1].month}</h1>
      <BarChart data={data} />
    </div>
  );
};

export default ChartStatistics;
