import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   {
//     group_name: "Group A",
//     boys: 200,
//     girls: 400,
//   },
//   {
//     group_name: "Group B",
//     boys: 3000,
//     girls: 500,
//   },
//   {
//     group_name: "Group C",
//     boys: 1000,
//     girls: 1500,
//   },
//   {
//     group_name: "Group D",
//     boys: 700,
//     girls: 1200,
//   },
// ];
const data = [
  {
    price_range: "0 - 100",
    total_products: 17,
  },
  {
    price_range: "101 - 200",
    total_products: 7,
  },
  {
    price_range: "201 - 300",
    total_products: 4,
  },
  {
    price_range: "301 - 400",
    total_products: 3,
  },
  {
    price_range: "401 - 500",
    total_products: 2,
  },
  {
    price_range: "501 - 600",
    total_products: 6,
  },
  {
    price_range: "601 - 700",
    total_products: 4,
  },
  {
    price_range: "701 - 800",
    total_products: 4,
  },
  {
    price_range: "901 - above",
    total_products: 13,
  },
];

const MyChart = () => {
  const DataFormatter = (number) => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`;
    }
    return number.toString();
  };

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="price_range"
          tick={{
            stroke: "gray",
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: "gray",
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar
          dataKey="total_products"
          name="price range"
          fill="#1f77b4"
          barSize="10%"
        />
        {/* <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" /> */}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyChart;
