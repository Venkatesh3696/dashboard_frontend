import React, { useState, useEffect } from "react";
import axios from "axios";
import Statistics from "./Statistics";
import ChartStatistics from "./ChartStatistics";

// import Layout from "../components/Layout";

const Dashboard = ({ monthsData }) => {
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState("03");
  const [fetchedData, setFetchedData] = useState([]);
  const [pagesData, setPagesData] = useState();

  const [loading, setLoading] = useState(false);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onChangeMonth = (e) => {
    setMonth(e.target.value);
  };

  const fetchAndSetData = () => {
    // const page = pagesData.currentPage;
    const page = 1;

    setLoading(true);
    axios.get(`http://localhost:5000/transactions`).then((response) => {
      setFetchedData(response.data.data);
      const info = {
        currentPage: response.data.current_page,
        perPage: response.data.per_page,
        lastPage: response.data.last_page,
      };

      setPagesData(info);
      setLoading(false);
    });
  };
  console.log("fetchedData == >>", fetchedData);

  useEffect(() => {
    fetchAndSetData();
  }, [search, month]);

  const renderTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Image</th>
            <th>date of sale</th>
          </tr>
        </thead>
        <tbody>
          {/* {console.log(fetchedData.data)} */}

          {fetchedData.map((each) => {
            return (
              <tr key={each.id}>
                <td>{each.id}</td>
                <td>{each.title}</td>
                <td>{each.price}</td>
                <td>{each.description}</td>
                <td>{each.category}</td>
                <td>{each.sold}</td>
                <td>
                  <img className="image" alt={each.title} src={each.image} />
                </td>
                <td>{each.dateOfSale}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  //   const onCLickPrevious = () => {
  //     const { currentPage, perPage, lastPage } = pagesData;
  //     if (currentPage === 1) {
  //       return;
  //     }
  //     setPagesData({
  //       ...pagesData,
  //       currentPage: currentPage - 1,
  //     });
  //   };

  //   const onCLickNext = () => {
  //     const { currentPage, perPage, lastPage } = pagesData;
  //     if (currentPage === lastPage) {
  //       return;
  //     }
  //     setPagesData({
  //       ...pagesData,
  //       currentPage: currentPage + 1,
  //     });
  //   };

  //   const renderPageControllers = () => {
  //     const { currentPage, perPage, lastPage } = pagesData;
  //     console.log(pagesData);

  //     return (
  //       <div className="page-controller">
  //         <button type="button">previous</button>
  //         <p>Current Page : {currentPage}</p>
  //         <p>Per Page : {perPage}</p>
  //         <p>Last Page : {lastPage}</p>
  //         <button type="button">Next</button>
  //       </div>
  //     );
  //   };
  return (
    <div>
      <h1>Transactions Dashboard</h1>
      <div className="controllers-container">
        <div>
          <input
            type="search"
            placeholder="search transactions"
            value={search}
            onChange={onChangeSearch}
          />
        </div>
        <div>
          <select value={month} onChange={onChangeMonth}>
            {monthsData.map((eachMonth) => {
              return (
                <option
                  key={eachMonth.monthNumber}
                  value={eachMonth.monthNumber}
                >
                  {eachMonth.month}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div>{loading ? <p>Loading ...</p> : renderTable()}</div>
      {/* {renderPageControllers()} */}
      <Statistics month={month} monthsData={monthsData} />
      <ChartStatistics month={month} monthsData={monthsData} />
    </div>
  );
};

export default Dashboard;
