import React, { useEffect, useState } from "react";
import axios from "axios";

const Statistics = ({ month, monthsData }) => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/transactions/month/${month}`)
      .then((response) => {
        setStats(response.data.data);
        const finalData = {
          totalSale: response.data.data.totalSale,
          soldCount: response.data.data.sold_count,
          unsoldCount: response.data.data.unsold_count,
        };
        setStats(finalData);
      });
  }, [month]);
  console.log(stats);
  return (
    <div>
      <h1>Statistics - {monthsData[parseInt(month) - 1].month}</h1>
      <div>
        <p>Total sale : ₹ {stats.totalSale}</p>
        <p>Total sold items : {stats.soldCount}</p>
        <p>Total not sold item : {stats.unsoldCount}</p>
      </div>
    </div>
  );
};

export default Statistics;
