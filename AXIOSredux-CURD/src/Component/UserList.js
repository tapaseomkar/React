import React, { useEffect, useState } from "react";
import { connect } from "react-redux"; 
import { Link } from "react-router-dom";
import { fetchUserList, deleteUsertolist } from "../Redux/action";
import "./UserList.css";

const UserList = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    props.fetchUserList();
  }, []);

  const handleDelete = (userId) => {
    setLoading(true);
    setError(""); // Reset error state
    props.deleteUsertolist(userId)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="user-list-container">
          <h2>User List.....</h2>
          <div className="user-list-header">
            <div>Name</div>
            <div>Email</div>
            <div>Actions</div>
          </div>
          {props.user.userlist.map((user) => (
            <div key={user.id} className="user-item">
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div className="user-item-actions">
              <Link to={`/edit/${user.id}`}><button>Edit</button></Link>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </div>
            </div>
          ))}
          {error && <div className="error-message">{error}</div>}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserList: () => dispatch(fetchUserList()),
  deleteUsertolist: (userId) => dispatch(deleteUsertolist(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
