import { useReducer, useState } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

//should have the cases "email", "password", and "reset", along with the default cases
const reducer = (state, action) => {
  switch(action.type){

    case "EMAIL" :{
      return {...state,email:action.payload}
    }

    case "PASSWORD":{
      return {...state,password:action.payload}
    }
    default:{
      return state
    }
  }
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.
 const [state,dispatch]=useReducer(reducer,initialState)
  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState({});
 const {email,password}=state


 
 const handlesubmit=(e)=>{
  e.preventDefault()
     let obj={email,password}
     setSubmittedData(obj)

 }
  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form className="form-wrapper"  onSubmit={handlesubmit} data-testid="form-wrapper">
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input type="email" value={email} name="email" onChange={(e)=>dispatch({type:"EMAIL",payload:e.target.value})}  data-testid="user-email" />
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input type="password" value={password} name="password" onChange={(e)=>dispatch({type:"PASSWORD",payload:e.target.value})}  data-testid="user-password" />
        </div>
        <button type="submit" >Submit</button>
      </form>

      {/* IF there is data in the submittedData variable after submitting the form, show the data here ELSE show the No details found div. */}
      <div>
        <div data-testid="submitted-data-email">User Email:{email ? email : ""}</div>
        <div data-testid="submitted-data-password">User Password:{password ? password:""}</div>
      </div>

      <div data-testid="no-details-container"></div>
      
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
