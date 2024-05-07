import {  MAKE_REQUEST, FAIL_REQUEST,GET_USER_LIST,ADD_USER, DELETE_REQUEST, EDIT_REQUEST} from "./actiontype";


const initialstate = {
  loading: true,
  userlist: [],
  userobj: {},
  errmessage: ""
};


export const Reducer = (state=initialstate, action) => 
{
  switch (action.type)
   {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: false
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errmessage: action.payload
      };
    case GET_USER_LIST:
      return {
        ...state,
        loading: false,
        errmessage: "",
        userlist: action.payload,
        userobj: {}
      };
      case ADD_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload],
        error: null
      };
      case DELETE_REQUEST:
      return {
        ...state,
        loading: false,
        userlist: state.userlist.filter(user => user.id !== action.payload), // Remove deleted user from userlist
        errmessage: ""
      };
  
      case EDIT_REQUEST:
        return{
          ...state,
         loading: true,
         error:null
        }
   
    default:
      return state;
  }
};