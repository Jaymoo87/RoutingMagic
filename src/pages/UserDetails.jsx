import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home";

const UserDetails = () => {
  const { userid } = useParams();

  return (
    <main className="container">
      <section className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center"> User {userid} Details Page</h1>
        </div>
      </section>
    </main>
  );
};

export default UserDetails;
