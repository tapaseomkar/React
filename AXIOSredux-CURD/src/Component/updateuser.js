import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editUserofform } from '../Redux/action';
import "./updateuser.css"; // Import CSS file

const UpdateUser = ({ history }) => { // Pass history as a prop
  const { id } = useParams();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUserofform(id, userData))
      .then(() => {
        // Redirect to user list page after successful update
        history.push('/ulist');
      })
      .catch((error) => {
        console.error('Failed to update user:', error);
        // Handle error if needed
      });
  };

  return (
    <div className="update-user-container"> {/* Apply CSS class to the container */}
      <h2>Edit User</h2>
      <form className="update-user-form" onSubmit={handleSubmit}> {/* Apply CSS class to the form */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UpdateUser;
