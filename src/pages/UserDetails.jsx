import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const UserDetails = () => {
  const { userid } = useParams();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((e) => alert(e.message));
  }, [userid]);

  return (
    <div className="col-md-6">
      <div className="card shadow border rounded">
        <div className="card-body">
          <h4 className="card-title">{details?.username}</h4>
          <Link to="/users" className="btn btn-warning">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
