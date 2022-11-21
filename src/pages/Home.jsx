import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="col-md-6">
      <h1 className="text-center">Home Page</h1>
      <div className="d-flex justify-content-center">
        <Link to="./users">
          <button className="btn btn-primary m-3">User Page</button>
        </Link>

        <Link to="./UserDetails">
          <button className="btn btn-primary m-3">User Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
