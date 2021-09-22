import FormComponent from "./components/form/Form"
import Contacts from "./components/contacts/Contacts";
import { useState } from "react";


 export const initialState = {
  username:"",
  phoneNumber:"",
  gender:"NO INFO"
}

function App() {
  const [info, setinfo] = useState(initialState)

  return <div className="App">
    <FormComponent className="form" info={info} setInfo={setinfo}/>
    <Contacts/>
  </div>;
}

export default App;
