import axios from "axios";
import { useReducer } from "react";
import { MAKE_REQUEST, FAIL_REQUEST, GET_USER_LIST, ADD_USER,DELETE_REQUEST,EDIT_REQUEST} from "./actiontype";
export const makeRequest = () => {
  return {
    type: MAKE_REQUEST
  };
};
export const failRequest = err => {
  return {
    type: FAIL_REQUEST,
    payload: err
  };
};
export const getUserList = data => {
  return {
    type: GET_USER_LIST,
    payload: data
  };
};

export const addUser = user => {
  return {
    type: ADD_USER,
    payload: user
  };
};

export const updateUser = (id, updatedData) => {
  return {
    type: EDIT_REQUEST,
    payload: {id, updatedData}
  }
}

export const deleteUsers=userdeleteid=>{
  return{
    type:DELETE_REQUEST,
    payload:userdeleteid
  }
}



export const fetchUserList=()=>{
  return dispatch=>{
    dispatch(makeRequest());
    axios
    .get("http://localhost:8000/users")
    .then(res=>{
      const userlist=res.data;
      dispatch(getUserList(userlist));
    })
    .catch(err=>{
      dispatch(failRequest(err.message));
    });
  }
}


export const addUsertolist=user=>{
  return dispatch=>{
    dispatch(makeRequest());
    axios
    .post("http://localhost:8000/users",user)
    .then(res=>{
      dispatch(addUser(useReducer)); 
    })
    .catch(err=>{
      dispatch(failRequest(err.message));
    });
  }
}



export const deleteUsertolist = (userdeleteid) => {
  return (dispatch) => {
    dispatch(makeRequest());
    return axios
      .delete(`http://localhost:8000/users/${userdeleteid}`)
      .then(() => {
        dispatch(deleteUsers(userdeleteid)); 
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
        throw err; // Throw the error to propagate it to the calling function
      });
  };
};


export const editUserofform = (userId, updatedData) => {
  return (dispatch) => {
    dispatch(makeRequest());
    return axios
      .put(`http://localhost:8000/users/${userId}`, updatedData)
      .then((res) => {
        dispatch(updateUser(userId, updatedData));
        return res.data; // Return data from the response
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
        throw err; // Throw the error to propagate it to the calling function
      });
  };
};




 