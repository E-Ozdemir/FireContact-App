import {Grid,Segment,Button,Form, GridColumn, ButtonContent} from "semantic-ui-react"
import { options } from "../../utils/constants";


const FormComponent = ({info,setInfo}) => {

const handleSubmit = ()=>{
  console.log('info :>> ', info);
}

const handleInputChange = (e)=>{
  // const name= e.target.name;
  // const value = e.target.value;
  // shorthand code of above
  const{ name, value } = e.target
  setInfo({...info, [name]: value.toUpperCase()});
}

// semantic ui da dropdown menüden veri cekme yöntemi asagidaki gibidir.
const handleOptionChange= (_,result)=>{
  // const name =result.name;
  // const value =result.value;
  const {name,value} = result;
  setInfo({...info,[name]:value.toUpperCase()})
}

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{width : "300px"}}>
        <div className="ui pilled segment">
          <div className="ui pilled brand" >
            <a href="...." className="design" target="_blank" rel="noreferrer noopener">
              <code>{"<Özdmr/>"}</code>
              <span className="design header">design</span>
            </a>
          </div>
        </div>
        <h2 className="contact-header">Add Contact</h2>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input  fluid name="username" icon='user' iconPosition='left' placeholder='Name' type="text" 
            value={info.username} 
            onChange={handleInputChange}
            required
            />
            <Form.Input  fluid name="phoneNumber" icon='phone square' iconPosition='left' placeholder='Phone Number' type="number"
            value={info.phoneNumber}
            onChange={handleInputChange}
            required />
            <Form.Dropdown
              options={options}
              onChange={handleOptionChange}
              value={info.gender.toLowerCase()}
              placeholder="Gender"
              name="gender"
              fluid
              selection
              required/>
              <Button color="teal" fluid size="large" type="submit">Add</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
};

export default FormComponent;
