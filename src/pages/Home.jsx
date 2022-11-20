import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="container">
      <section className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Home Page</h1>
          <Link to="./about">
            <button className="btn btn-primary">About Me</button>
          </Link>
          <Link to="./users">
            <button className="btn btn-primary m-2">User Page</button>
          </Link>
          <Link to="./FAQ">
            <button className="btn btn-primary m-2">FAQ Page</button>
          </Link>
          <Link to="./UserDetails">
            <button className="btn btn-primary m-2">User Details</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
