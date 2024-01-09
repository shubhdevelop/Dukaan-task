import { Link } from "react-router-dom";

const AllCatchRoute = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "32px",
      }}
    >
      Ops..... Page is under construction
      <Link to="/payments"> Go to Payments Page</Link>
    </div>
  );
};

export default AllCatchRoute;
