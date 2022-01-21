import { Line } from "react-chartjs-2";
function Dashboard({ price, data }) {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: false
  };
  if (price === "0.00") {
    return <h2>please select a currency pair</h2>;
  }
  let inr = price * 74.57;
  inr = inr.toFixed(2);
  return (
    <div className="dashboard">
      <h2>{`$${price}`}</h2>

      <h2>{`${inr}INR`}</h2>
      <div className="chart-container">
        <Line data={data} options={opts} />
      </div>
    </div>
  );
}

export default Dashboard;
