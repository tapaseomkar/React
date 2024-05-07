import React, { useState } from "react";
import { addUsertolist } from "../Redux/action";
import { connect } from "react-redux";
import "./AddUser.css";

const AddUser = ({ addUsertolist }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {

    addUsertolist({ name, email });
    setName("");
    setEmail("");
  };



  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} className="user-form">
      
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input  type="email"  id="email"  value={email}  onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Add User</button>
      </form>
      
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addUsertolist: (user) => dispatch(addUsertolist(user)),
});

export default connect(null, mapDispatchToProps)(AddUser);