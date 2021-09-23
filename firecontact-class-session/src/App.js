import FormComponent from "./components/form/Form"
import Contacts from "./components/contacts/Contacts";
import { useState } from "react";
import { addInfo,editHandler } from "./utils/functions";
import { ToastContainer } from "react-toastify";


 export const initialState = {
  username:"",
  phoneNumber:"",
  gender:"NO INFO"
}

function App() {
  const [info, setInfo] = useState(initialState)

  const handleFormsubmit = (e) => {
    e.preventDefault();
    if(info?.id){
      editHandler(info)
    }
    else{
      addInfo(info)
    }
    setInfo(initialState);
  }
  const updateFormHandler = (item) => {
    setInfo({...item})
  }
  return <div className="App">
    <FormComponent className="form" info={info} setInfo={setInfo} handleFormsubmit={handleFormsubmit}/>
    <Contacts className="contacts" updateFormHandler={updateFormHandler}/>
    <ToastContainer/>
  </div>;
}

export default App;
