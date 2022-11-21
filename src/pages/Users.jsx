import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((e) => alert(e.message));
  }, []);

  return (
    <div className="col-md-6">
      <ul className="list-group">
        {users.map((user) => (
          <li key={`user-${user.id}`} className="list-group-item d-flex justify-content-between alighn-items-center">
            {user.username}
            <Link to={`/users/${user.id}`} className="btn btn-primary">
              Full Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
