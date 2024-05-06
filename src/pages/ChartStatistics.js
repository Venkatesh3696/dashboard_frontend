import React from "react";

const ChartStatistics = ({ month, monthsData }) => {
  return (
    <div>
      <h1>Bar chart Stats -{monthsData[parseInt(month) - 1].month}</h1>
    </div>
  );
};

export default ChartStatistics;
